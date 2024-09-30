import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_PIPEDRIVE_API;
const baseURL = "https://api.pipedrive.com/v1";

const pipedriveApi = axios.create({
	baseURL,
	params: { api_token: API_KEY },
});

async function createPerson(data) {
	try {
		const response = await pipedriveApi.post("/persons", {
			name: data.name,
			email: data.email,
		});

		if (response.data.success) {
			return response.data.data.id;
		} else {
			console.error("Error creating person:", response.data.error);
			return null;
		}
	} catch (error) {
		console.error("Network error while creating person:", error);
		return null;
	}
}

async function createLead(data, person_id) {
	try {
		const response = await pipedriveApi.post("/leads", {
			title: `New lead from ${data.name}`,
			person_id: person_id,
		});

		if (response.data.success) {
			console.log("Lead created successfully:", response.data.data);
			return response.data.data.id;
		} else {
			console.error("Error creating lead:", response.data.error);
			return null;
		}
	} catch (error) {
		console.error("Network error while creating lead:", error);
		return null;
	}
}

async function addNoteToLead(leadId, message) {
	try {
		const response = await pipedriveApi.post("/notes", {
			content: message,
			lead_id: leadId,
		});

		if (response.data.success) {
			console.log("Note added successfully:", response.data.data);
		} else {
			console.error("Error adding note:", response.data.error);
		}
	} catch (error) {
		console.error("Network error while adding note:", error);
	}
}

async function attachFileToLead(leadId, file) {
	try {
		const formData = new FormData();
		formData.append("file", file);
		formData.append("lead_id", leadId);

		const response = await pipedriveApi.post("/files", formData, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});

		if (response.data.success) {
			console.log("File attached successfully:", response.data.data);
		} else {
			console.error("Error attaching file:", response.data.error);
		}
	} catch (error) {
		console.error("Network error while attaching file:", error);
	}
}

async function sendContact(data) {
	console.log("Data received in sendContact:", data);

	try {
		const person_id = await createPerson(data);

		if (person_id) {
			const lead_id = await createLead(data, person_id);

			if (lead_id) {
				await addNoteToLead(lead_id, data.message);

				if (data.file) {
					await attachFileToLead(lead_id, data.file);
				}

				return { success: true, lead_id };
			} else {
				throw new Error("Failed to create lead.");
			}
		} else {
			throw new Error("Failed to create person.");
		}
	} catch (error) {
		console.error("Error in sendContact:", error);
		return { success: false, error: error.message };
	}
}

export const ContactGateway = {
	sendContact,
};
