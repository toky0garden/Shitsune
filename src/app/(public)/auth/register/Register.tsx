'use client';

import Link from 'next/link';

export function Register() {
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
								placeholder='inadzuma'
								className='w-full px-3 py-1 text-white border border-stone-800 rounded-md focus:outline-none focus:ring-1 focus:ring-white/80'
							/>
						</div>

						<div className='mb-4'>
							<div className='mb-2'>
								<span className='text-white text-sm font-semibold'>Почта</span>
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
								Создать аккаунт
							</button>
						</Link>

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
