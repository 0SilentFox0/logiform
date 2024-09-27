import { directus } from '../../plugins/axios';

async function sendContact(formData) {
    try {
        const response = await directus.post("contact_form", formData, {
            // No need to set Content-Type; let the browser handle it
            // headers: {
            //     "Content-Type": "multipart/form-data", 
            // },
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
