export async function GET(req) {
	try {
		const response = await fetch(
			"https://restcountries.com/v3.1/all?fields=name,flags,idd"
		);
		if (!response.ok) {
			throw new Error("Failed to fetch countries");
		}
		const countries = await response.json();
		const formatted = countries.map((country) => {
			return {
				name: country.name.common,
				code: `${country.idd.root}${country.idd.suffixes[0]}`,
				flag_img: country.flags.svg,
			};
		});
		return new Response(JSON.stringify(formatted), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		return new Response(JSON.stringify({ error: error.message }), {
			status: 500,
			headers: { "Content-Type": "application/json" },
		});
	}
}
