import axiosOriginal from 'axios';

const config = {
  directus: {
    baseURL: 'https://logiform.directus.app/items/',
  },
  
};

const createApiDirectus = (config = {}) => {
  const api = axiosOriginal.create(config);

  api.interceptors.request.use(
    successfulReq => {
      return successfulReq;
    },
    error => {
      console.log('ERROR: ', error);

      throw error;
    },
  );
  return api;
};

export const directus = createApiDirectus(config.directus);
