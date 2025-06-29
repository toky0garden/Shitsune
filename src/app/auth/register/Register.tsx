'use client';

import { ROUTES } from '@/app/(constants)/routes';
import { AuthLayout } from '@/components/auth/auth-layout';
import { RegisterForm } from '@/components/auth/register/register-form';
import Link from 'next/link';

export function Register() {
  return (
    <AuthLayout>
      <div className='flex justify-center gap-2 md:justify-end'>
        <Link href={ROUTES.LOGIN} style={{ fontSize: 14 }}>
          Войти в аккаунт
        </Link>
      </div>
      <div className='flex flex-1 items-center justify-center'>
        <div className='w-full max-w-xs'>
          <h2 className='text-2xl font-semibold mb-2 text-white text-center'>
            Регистрация
          </h2>
          <p className='text-gray-400 text-center text-sm mb-6'>
            Введите имя пользователя и почту, а также пароль
          </p>
          <RegisterForm />
        </div>
      </div>
    </AuthLayout>
  );
}
