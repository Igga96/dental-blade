import axios, { AxiosInstance } from 'axios';

const apiClient: AxiosInstance = axios.create({
  baseURL: 'https://api.example.com/doctors/', 
  headers: {
    'Content-Type': 'application/json',
  }
});

export default apiClient;
