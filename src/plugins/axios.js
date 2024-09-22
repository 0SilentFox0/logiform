import axiosOriginal from "axios";

const config = {
	directus: {
		baseURL: `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/items/`,
	},
};

const createApiDirectus = (config = {}) => {
	const api = axiosOriginal.create(config);

	api.interceptors.request.use(
		(successfulReq) => {
			return successfulReq;
		},
		(error) => {
			console.log("ERROR: ", error);

			throw error;
		}
	);
	return api;
};

export const directus = createApiDirectus(config.directus);
