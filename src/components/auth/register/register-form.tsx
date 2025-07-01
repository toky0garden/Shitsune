'use client';

import { postRegister } from '@/utils';
import { ErrorsMsgHandling } from '@/generated';
import { useRefreshUser } from '@/hooks';
import { ROUTES } from '@/app/(constants)/routes';
import { zodResolver } from '@hookform/resolvers/zod';
import { ToastShow } from '@/components/ui/toast-container';
import { useForm } from 'react-hook-form';

import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';

const formSchema = z.object({
  username: z
    .string()
    .min(4, 'Введите имя пользователя')
    .max(24, 'Имя пользователя слишком длинное'),
  password: z
    .string()
    .min(6, 'Пароль должен содержать от 6 символов')
    .max(24, 'Пароль слишком длинный'),
  email: z.string().email('Неправильная почта').min(1, 'Введите почту'),
});

export function RegisterForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
      email: '',
    },
  });

  const router = useRouter();
  const { refreshUser } = useRefreshUser();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await postRegister({
        params: values,
      });
      await refreshUser();
      router.push(ROUTES.LOGIN);
    } catch (err) {
      ErrorsMsgHandling(err);
    }
  };

  return (
    <Form {...form}>
      <ToastShow />
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
        <div className='mb-4'>
          <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder='Имя пользователя' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className='mb-4'>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder='Почта' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className='mb-4'>
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder='Пароль' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <button
          style={{ cursor: 'pointer', fontSize: 16 }}
          className='w-full bg-white text-black py-1 rounded-md hover:bg-stone-300 transition-colors mb-4'
        >
          Создать аккаунт
        </button>
      </form>
    </Form>
  );
}
