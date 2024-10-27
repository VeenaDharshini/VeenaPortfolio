import nodemailer from "nodemailer";
import { format } from "date-fns";

export async function POST(req) {
	const formData = await req.json();
	const {
		client_name,
		client_email,
		country_code,
		country_name,
		phone_number,
		subject,
		message,
	} = formData;

	const transporter = nodemailer.createTransport({
		host: process.env.SMTP_HOST,
		port: process.env.SMTP_PORT,
		secure: false,
		auth: {
			user: process.env.SMTP_USER,
			pass: process.env.SMTP_PASS,
		},
	});

	const sent_time = format(new Date(), "dd/MM/yyyy h:mm a");

	const mailOptions = {
		from: client_email,
		to: process.env.SMTP_USER,
		subject: subject,
		html: `<h1>New Connection through my-portfolio</h1>
		 <p><strong>Name:</strong> ${client_name}</p>
		 <p><strong>Email:</strong> ${client_email}</p>
		 <p><strong>Country:</strong> ${country_name}</p>
		 <p><strong>Phone Number:</strong> ${country_code} ${phone_number}</p>
		 <p><strong>Description:</strong> ${message}</p>
		 <p><strong>Sent Time:</strong> ${sent_time}</p>`,
	};

	try {
		await transporter.sendMail(mailOptions);
		return new Response(
			JSON.stringify({
				message: "Email sent successfully!",
			}),
			{
				status: 200,
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
	} catch (error) {
		return new Response(
			JSON.stringify({
				message: "Error in sending email!",
			}),
			{
				status: 500,
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
	}
}
