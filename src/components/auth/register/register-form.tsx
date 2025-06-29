'use client';

import { useRegister } from '@/app/(contexts)/auth/register-context';
import { Input } from '../Input';
import { ToastShow } from '@/components/ui/toast-container';

export function RegisterForm() {
  const { registerData, handleRegisterChange, handleRegisterSubmit } =
    useRegister();

  return (
    <form onSubmit={handleRegisterSubmit} className='space-y-4'>
      <ToastShow />
      <div className='mb-4'>
        <Input
          name='username'
          type='text'
          value={registerData.username}
          onChange={handleRegisterChange}
          placeholder='Имя пользователя'
        />
      </div>

      <div className='mb-4'>
        <Input
          name='email'
          type='email'
          value={registerData.email}
          onChange={handleRegisterChange}
          placeholder='Почта'
        />
      </div>

      <div className='mb-4'>
        <Input
          name='password'
          type='password'
          value={registerData.password}
          onChange={handleRegisterChange}
          placeholder='Пароль'
        />
      </div>

      <button
        style={{ cursor: 'pointer', fontSize: 16 }}
        className='w-full bg-white text-black py-1 rounded-md hover:bg-stone-300 transition-colors mb-4'
      >
        Создать аккаунт
      </button>
    </form>
  );
}
