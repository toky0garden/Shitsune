'use client';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';

export default function SignIn() {
	const [message, setMessage] = useState('');
	const [loginValue, setLoginValue] = useState('');
	const [passwordValue, setPasswordValue] = useState('');

	const handleLogin = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => setLoginValue(e.target.value),
		[]
	);
	const handleRegister = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => setPasswordValue(e.target.value),
		[]
	);

	useEffect(() => {
		fetch('http://26.172.117.24:8000/api/hello')
			.then((res) => res.json())
			.then((data) => setMessage(data.message));
	}, []);

	return (
		<div className='min-h-screen flex-col bg-gray-50 p-4 mt-30'>
			<p>{message}</p>
			<Head>
				<title>Instagram - Вход</title>
				<meta name='description' content='Войдите в Instagram' />
			</Head>

			<div className='w-full max-w-md bg-white p-8 border border-gray-300 rounded-lg'>
				<div className='flex justify-center mb-8'>
					<Image src='/y-logo.svg' alt='Y Logo' width={175} height={51} priority />
				</div>

				<form className='space-y-4'>
					<div>
						<input
							type='text'
							placeholder='Имя пользователя или эл. адрес'
							className='w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-gray-500'
							value={loginValue}
							onChange={handleLogin}
						/>
					</div>

					<div>
						<input
							type='password'
							placeholder='Пароль'
							className='w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-gray-500'
							value={passwordValue}
							onChange={handleRegister}
						/>
					</div>

					<button
						type='submit'
						className='w-full py-1 rounded text-white font-medium text-sm
              bg-blue-500 hover:bg-blue-600
            '
					>
						Войти
					</button>
				</form>
			</div>

			<div className='w-full max-w-md bg-white p-4 border border-gray-300 rounded-lg mt-4 text-center text-sm'>
				<p>
					У вас ещё нет аккаунта?{' '}
					<Link href='/signup' className='text-blue-500 font-medium'>
						Зарегистрироваться
					</Link>
				</p>
			</div>
		</div>
	);
}
