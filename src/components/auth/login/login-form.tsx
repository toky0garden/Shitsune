'use client';

import { Input } from '../Input';
import { LoginData } from '@/types/login.types';
import { useState } from 'react';
import { getLogin } from '@/utils/api/request';
import { ValidateInputsForLogin } from '@/generated/validateInputs';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { Error } from '@/components/Error';
import { ErrorsMsgHandling } from '@/generated/errorsMsgHandling';

export function LoginForm() {
	const [formData, setFormData] = useState<LoginData>({
		username: '',
		password: '',
	});
	const router = useRouter();

	const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleLoginUser = async (e: React.FormEvent) => {
		e.preventDefault();

		const validation = ValidateInputsForLogin(formData);

		if (validation.isValid) {
			await getLogin({ params: formData })
				.then(() => router.push('/'))
				.catch((err) => ErrorsMsgHandling(err));
			//НАДО ЧТОБ ВЕЛО НА ПРОФИЛЬ СТРАНИЦУ
		} else {
			toast.error(validation.error);
			return;
		}
	};

	return (
		<form className='space-y-4'>
			<Error />
			<div className='mb-4'>
				<Input
					name='username'
					type='text'
					value={formData.username}
					onChange={handleChangeValue}
					placeholder='Имя пользователя или почта'
				/>
			</div>

			<div className='mb-4'>
				<Input
					name='password'
					type='password'
					value={formData.password}
					onChange={handleChangeValue}
					placeholder='Пароль'
				/>
			</div>

			<button
				style={{ cursor: 'pointer', fontSize: 16 }}
				onClick={handleLoginUser}
				className='w-full bg-white text-black py-1 rounded-md hover:bg-stone-300 transition-colors mb-4'
			>
				Продолжить
			</button>
		</form>
	);
}
