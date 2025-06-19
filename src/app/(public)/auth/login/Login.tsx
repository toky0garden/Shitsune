'use client';

import Link from 'next/link';

export function Login() {
	// useEffect(() => {
	// 	fetch('http://26.172.117.24:8000/api/hello')
	// 		.then((res) => res.json())
	// 		.then((data) => setMessage(data.message));
	// }, []);

	return (
		<div className='min-h-screen flex items-center justify-center'>
			<div className='w-full' style={{ maxWidth: 400 }}>
				<div className='p-8 border border-stone-800 rounded-lg'>
					<h2 className='text-xl font-semibold mb-2 text-white text-center'>Вход в аккаунт</h2>
					<p className='text-stone-400 text-center text-sm mb-6'>
						Введите имя пользователя или почту а также пароль
					</p>

					<form className='space-y-4'>
						<div className='mb-4'>
							<div className='mb-2'>
								<span className='text-white text-sm font-semibold'>Имя пользователя или почта</span>
							</div>
							<input
								id='username'
								type='text'
								placeholder='desp@ayano.mc'
								className='w-full px-3 py-1 text-white border border-stone-800 rounded-md focus:outline-none focus:ring-1 focus:ring-white/80'
							/>
						</div>

						<div className='mb-4'>
							<div className='mb-2'>
								<span className='text-white text-sm font-semibold'>Пароль</span>
							</div>
							<input
								id='username'
								type='text'
								placeholder='Введите пароль'
								className='w-full px-3 py-1 text-white border border-stone-800 rounded-md focus:outline-none focus:ring-1 focus:ring-white/80'
							/>
						</div>

						<Link href='/'>
							<button
								style={{ cursor: 'pointer' }}
								className='w-full bg-white text-black font-semibold py-0.5 rounded-md hover:bg-stone-300 transition-colors mb-4'
							>
								Продолжить
							</button>
						</Link>

						<p className='text-center text-sm text-stone-400'>
							Ещё нет аккаунта?{' '}
							<span className='text-white hover:text-gray-400 transition-colors'>
								<Link href='/auth/register'>Регистрация</Link>
							</span>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
}
