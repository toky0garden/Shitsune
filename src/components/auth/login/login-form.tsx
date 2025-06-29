'use client';

import { useAuth } from '@/app/(contexts)/auth/login-context';
import { Input } from '../Input';
import { ToastShow } from '@/components/ui/toast-container';

export function LoginForm() {
  const { loginData, handleLoginChange, handleLoginSubmit } = useAuth();

  return (
    <form onSubmit={handleLoginSubmit} className='space-y-4'>
      <ToastShow />
      <div className='mb-4'>
        <Input
          name='username'
          type='text'
          value={loginData.username}
          onChange={handleLoginChange}
          placeholder='Имя пользователя или почта'
        />
      </div>

      <div className='mb-4'>
        <Input
          name='password'
          type='password'
          value={loginData.password}
          onChange={handleLoginChange}
          placeholder='Пароль'
        />
      </div>

      <button
        style={{ cursor: 'pointer', fontSize: 16 }}
        className='w-full bg-white text-black py-1 rounded-md hover:bg-stone-300 transition-colors mb-4'
      >
        Продолжить
      </button>
    </form>
  );
}
