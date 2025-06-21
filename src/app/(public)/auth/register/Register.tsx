'use client';

import { registerUser } from '@/app/api/auth/register/route';
import { Error } from '@/components/Error';
import { useBoolean } from '@/shared/hooks';
import { RegisterData } from '@/types/register.types';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';

export function Register() {
	const [formData, setFormData] = useState<RegisterData>({
		username: '',
		email: '',
		password: ''
	});
	const [error, setError] = useState<string>('');
	const [showError, setShowError] = useBoolean(false);

	//setError в отправке запроса на бэк юзаем в try catch

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const showErrorMsg = () => {
		setShowError(true);
		setTimeout(() => setShowError(false), 4000);
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!formData.username || !formData.email || !formData.password) {
			setError('Заполните все поля');
			showErrorMsg();
			return;
		}

		if (!/\S+@\S+\.\S+/.test(formData.email)) {
			setError('Введите корректный email');
			showErrorMsg();
			return;
		}

		if (formData.password.length < 6) {
			setError('Пароль должен содержать минимум 6 символов');
			showErrorMsg();
			return;
		}

		try {
			await registerUser(formData);
			return;
		} catch {
			setError('Произошла ошибка при регистрации');
			showErrorMsg();
			return;
		}
	};

	return (
		<div className='min-h-screen flex items-center justify-center'>
			{showError && <Error message={error} isVisible={showError} />}
			<div className='w-full' style={{ maxWidth: 400 }}>
				<div className='p-8 border border-stone-800 rounded-lg'>
					<h2 className='text-xl font-semibold mb-2 text-white text-center'>Регистрация</h2>
					<p className='text-stone-400 text-center text-sm mb-6'>
						Введите ваше имя пользователя, почту а также пароль
					</p>

					<form className='space-y-4'>
						<div className='mb-4'>
							<div className='mb-2'>
								<span className='text-white text-sm font-semibold'>Имя пользователя</span>
							</div>
							<input
								name='username'
								type='text'
								value={formData.username}
								onChange={handleChange}
								placeholder='inadzuma'
								className='w-full px-3 py-1 text-white border border-stone-800 rounded-md focus:outline-none focus:ring-1 focus:ring-white/80'
							/>
						</div>

						<div className='mb-4'>
							<div className='mb-2'>
								<span className='text-white text-sm font-semibold'>Почта</span>
							</div>
							<input
								name='email'
								type='email'
								value={formData.email}
								onChange={handleChange}
								placeholder='desp@ayano.mc'
								className='w-full px-3 py-1 text-white border border-stone-800 rounded-md focus:outline-none focus:ring-1 focus:ring-white/80'
							/>
						</div>

						<div className='mb-4'>
							<div className='mb-2'>
								<span className='text-white text-sm font-semibold'>Пароль</span>
							</div>
							<input
								name='password'
								type='password'
								value={formData.password}
								onChange={handleChange}
								placeholder='Введите пароль'
								className='w-full px-3 py-1 text-white border border-stone-800 rounded-md focus:outline-none focus:ring-1 focus:ring-white/80'
							/>
						</div>

						<button
							style={{ cursor: 'pointer' }}
							onClick={handleSubmit}
							className='w-full bg-white text-black font-semibold py-0.5 rounded-md hover:bg-stone-300 transition-colors mb-4'
						>
							Создать аккаунт
						</button>

						<p className='text-center text-sm text-stone-400'>
							Есть аккаунт?{' '}
							<span className='text-white hover:text-gray-400 transition-colors'>
								<Link href='/auth/login'>Войти</Link>
							</span>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
}
