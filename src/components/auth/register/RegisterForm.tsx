import Link from 'next/link';
import { Input } from '../Input';
import { RegisterData } from '@/types/register.types';

export function RegisterForm({
	formData,
	handleChangeValue,
	handleRegisterUser
}: {
	formData: RegisterData;
	handleChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleRegisterUser: (e: React.FormEvent) => void;
}) {
	return (
		<form className='space-y-4'>
			<div className='mb-4'>
				<div className='mb-1'>
					<span className='text-white text-sm font-semibold'>Имя пользователя</span>
				</div>
				<Input
					name='login'
					type='text'
					value={formData.login}
					onChange={handleChangeValue}
					placeholder='inadzuma'
				/>
			</div>

			<div className='mb-4'>
				<div className='mb-1'>
					<span className='text-white text-sm font-semibold'>Почта</span>
				</div>
				<Input
					name='email'
					type='email'
					value={formData.email}
					onChange={handleChangeValue}
					placeholder='desp@ayano.mc'
				/>
			</div>

			<div className='mb-4'>
				<div className='mb-1'>
					<span className='text-white text-sm font-semibold'>Пароль</span>
				</div>
				<Input
					name='password'
					type='password'
					value={formData.password}
					onChange={handleChangeValue}
					placeholder='Введите пароль'
				/>
			</div>

			<button
				style={{ cursor: 'pointer', fontSize: 16 }}
				onClick={handleRegisterUser}
				className='w-full bg-white text-black py-0.5 rounded-md hover:bg-stone-300 transition-colors mb-4'
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
	);
}
