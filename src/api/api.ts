import axios from 'axios';
import {TrainingInterface} from "../types";

const instance = axios.create({
    withCredentials: true,
    baseURL: `http://127.0.0.1/api/`,
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

export const getTrainings = async () => {
    const response = await instance.get(`trainings`);
    return response.data;
};

export const getTraining = async (id: number) => {
    const response = await instance.get(`training/${id}`);
    return response.data;
};

export const postTraining = async (training: TrainingInterface) => {
    const response = await instance.post(`training`, training);
    return response.data;
};

export const delTraining = async (id: number) => {
    const response = await instance.delete(`training/${id}`, {headers: {options: {
                "Cache-Control": "no-cache"
            }}});
    return response.data;
};