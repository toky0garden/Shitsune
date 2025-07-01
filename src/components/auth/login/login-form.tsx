'use client';
import { ToastShow } from '@/components/ui/toast-container';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRefreshUser } from '@/hooks';
import { postLogin } from '@/utils';
import { ErrorsMsgHandling } from '@/generated';
import { ROUTES } from '@/app/(constants)';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const formSchema = z.object({
  username: z
    .string()
    .min(4, 'Введите имя пользователя')
    .max(24, 'Имя пользователя слишком длинное'),
  password: z
    .string()
    .min(6, 'Пароль должен содержать от 6 символов')
    .max(24, 'Пароль слишком длинный'),
});

export function LoginForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const router = useRouter();
  const { refreshUser } = useRefreshUser();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await postLogin({
        params: values,
      });
      await refreshUser();
      router.push(ROUTES.PROFILE(values.username));
    } catch (err) {
      ErrorsMsgHandling(err);
    }
  };

  return (
    <Form {...form}>
      
      <form className='space-y-4' onSubmit={form.handleSubmit(onSubmit)}>
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
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type='password' placeholder='Пароль' {...field} />
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
          Продолжить
        </button>
      </form>
    </Form>
  );
}
