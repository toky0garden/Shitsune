'use client';

import Link from 'next/link';
import React from 'react';
import { useCallback, useState } from 'react';

export function Register() {
	const [loginValue, setLoginValue] = useState('');
	const [emailValue, setEmailValue] = useState('');
	const [passwordValue, setPasswordValue] = useState('');

	const handleChangeLogin = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => setLoginValue(e.target.value),
		[]
	);
	const handleChangeEmail = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => setEmailValue(e.target.value),
		[]
	);
	const handleChangePassword = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => setPasswordValue(e.target.value),
		[]
	);

	return (
		<div className='min-h-screen flex items-center justify-center'>
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
								id='username'
								type='text'
								value={loginValue}
								onChange={handleChangeLogin}
								placeholder='inadzuma'
								className='w-full px-3 py-1 text-white border border-stone-800 rounded-md focus:outline-none focus:ring-1 focus:ring-white/80'
							/>
						</div>

						<div className='mb-4'>
							<div className='mb-2'>
								<span className='text-white text-sm font-semibold'>Почта</span>
							</div>
							<input
								id='email'
								type='email'
								value={emailValue}
								onChange={handleChangeEmail}
								placeholder='desp@ayano.mc'
								className='w-full px-3 py-1 text-white border border-stone-800 rounded-md focus:outline-none focus:ring-1 focus:ring-white/80'
							/>
						</div>

						<div className='mb-4'>
							<div className='mb-2'>
								<span className='text-white text-sm font-semibold'>Пароль</span>
							</div>
							<input
								id='password'
								type='password'
								value={passwordValue}
								onChange={handleChangePassword}
								placeholder='Введите пароль'
								className='w-full px-3 py-1 text-white border border-stone-800 rounded-md focus:outline-none focus:ring-1 focus:ring-white/80'
							/>
						</div>

						<button
							style={{ cursor: 'pointer' }}
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
