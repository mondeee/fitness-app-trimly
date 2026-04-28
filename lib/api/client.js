import axios from 'axios';
import { useAuthStore } from '@/store/auth';
export const apiClient = axios.create({
    timeout: 30_000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});
apiClient.interceptors.request.use((config) => {
    const token = useAuthStore.getState().token;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
apiClient.interceptors.response.use(response => response, (error) => Promise.reject(error));
