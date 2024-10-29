import axios from "axios";

const API_URL = "https://restcountries.com/v3.1/all?fields=name,flags,idd";

export const fetchCountries = async () => {
	try {
		const response = await axios.get(API_URL);
		const formatted = response.data.map((country) => {
			return {
				name: country.name.common,
				code: `${country.idd.root}${country.idd.suffixes[0]}`,
				flag_img: country.flags.svg,
			};
		});
		console.log("RESPONSE DATA: ", formatted);
		return formatted;
	} catch (error) {
		throw new Error("Failed to fetch countries");
	}
};
