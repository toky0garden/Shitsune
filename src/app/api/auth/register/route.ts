'use server';
import { RegisterData, RegisterResponse } from '@/types/register.types';
import { API_URL } from '@/utils/constants';
import { cookies } from 'next/headers';
import axios, { AxiosError, AxiosResponse } from 'axios';

const API = API_URL;

export const registerUser = async (userData: RegisterData): Promise<RegisterResponse> => {
	try {
		const response: AxiosResponse<RegisterResponse> = await axios.post(
			`${API}/api/register`,
			userData,
			{
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);

		const token = response.data.access_token;

		const cookiesStore = await cookies();
		cookiesStore.set('auth_token', token, {
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
			maxAge: 60 * 60 * 24 * 7, // 1 неделя
			path: '/'
		});

		return response.data;
	} catch (error) {
		const axiosError = error as AxiosError<RegisterResponse>;
		if (axiosError.response) {
			throw new Error(axiosError.response.data.error || 'Ошибка регистрации');
		} else {
			throw new Error('Не удалось подключиться к серверу');
		}
	}
};
