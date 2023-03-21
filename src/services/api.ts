import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { toast } from 'react-toastify'

const BACKEND_URL = process.env.API_HOST;
const REQUEST_TIMEOUT = 5000;

export default function createApi(): AxiosInstance {
	const api = axios.create({
		baseURL: BACKEND_URL,
		timeout: REQUEST_TIMEOUT,
	})

	api.interceptors.response.use(
		(response: AxiosResponse): AxiosResponse => {
			const responseMessage = 'We will contact you!)))';

			toast.success(responseMessage);

			return response;
		},
		(error: AxiosError): void => {
			const errorMessage = error.message;
			toast.error(errorMessage);
		}
	)

	return api;
};