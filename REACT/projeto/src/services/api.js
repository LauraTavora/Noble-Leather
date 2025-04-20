import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8080/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            console.error('Erro na resposta:', {
                status: error.response.status,
                data: error.response.data,
            });
        } else if (error.request) {
            console.error('Erro na requisição:', error.request);
        } else {
            console.error('Erro:', error.message);
        }
        return Promise.reject(error);
    }
);


// Não sei vamos usar isso efetivamente no projeto, mas já deixei pronto pq aprendi e alegria
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;