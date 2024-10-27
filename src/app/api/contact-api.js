import nodemailer from "nodemailer";

export default async function handler(req, res) {
	if (req.method === "POST") {
		const { name, country, phone, description } = req.body;

		const transporter = nodemailer.createTransport({
			service: "Gmail", // Use your email service
			auth: {
				user: process.env.EMAIL, // Your email
				pass: process.env.EMAIL_PASSWORD, // Your email password or app password
			},
		});

		const mailOptions = {
			from: process.env.EMAIL,
			to: process.env.EMAIL,
			subject: "New Contact Form Submission",
			html: `
        <h1>Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Description:</strong> ${description}</p>
      `,
		};

		try {
			await transporter.sendMail(mailOptions);
			res.status(200).json({ message: "Email sent successfully!" });
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: "Error sending email." });
		}
	} else {
		res.setHeader("Allow", ["POST"]);
		res.status(405).end(`Method ${req.method} Not Allowed`);
	}
}
