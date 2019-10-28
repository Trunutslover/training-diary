import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: ``,
    headers: {

    }
});

export const auth = {
    getAuth: async () => {
        const response = await instance.get(`auth/me`);
        return response.data;
    },

    postLogin: async (email: string, password: string) => {
        const response = await instance.post(`auth/login`, {email, password});
        return response.data;
    },

    delLogin: async () => {
        const response = await instance.delete(`auth/login`);
        return response.data;
    }
};