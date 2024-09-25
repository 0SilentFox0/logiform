import { directus } from "@/plugins/axios";

async function sendContact(formData) {
	const payload = {
		type: "contact_form", // Add this line
		...formData,
	};

	try {
		const response = await directus.post("contact_form", payload, {
			headers: {
				"Content-Type": "application/json",
			},
		});

		console.log("Form submitted successfully:", response.data);
		return response.data;
	} catch (error) {
		console.error("Error submitting form:", error);
		throw error;
	}
}

export const ContactGateway = {
	sendContact,
};
