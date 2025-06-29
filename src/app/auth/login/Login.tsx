'use client';

import { ROUTES } from '@/app/(constants)/routes';
import { AuthLayout } from '@/components/auth/auth-layout';
import { LoginForm } from '@/components/auth/login/login-form';
import Link from 'next/link';

export function Login() {
  return (
    <AuthLayout>
      <div className='flex justify-center gap-2 md:justify-end'>
        <Link href={ROUTES.REGISTER} style={{ fontSize: 14 }}>
          Создать аккаунт
        </Link>
      </div>
      <div className='flex flex-1 items-center justify-center'>
        <div className='w-full max-w-xs'>
          <h2 className='text-2xl font-semibold mb-2 text-white text-center'>
            Войти в аккаунт
          </h2>
          <p className='text-gray-400 text-center text-sm mb-6'>
            Введите имя пользователя или почту и пароль
          </p>
          <LoginForm />
        </div>
      </div>
    </AuthLayout>
  );
}
