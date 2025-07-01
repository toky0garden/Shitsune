'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ToastShow } from '@/components/ui/toast-container';
import { Input } from '@/components/ui/input';
import { postDisplayName } from '@/utils/api/request/user/settings/postDisplayName';
import { useParams } from 'next/navigation';
import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { toast } from 'react-toastify';

export function ChangeDisplayName() {
  const username = useParams().username as string;
  const [displayName, setDisplayName] = useState('');

  const onChangeDisplayName = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setDisplayName(e.target.value),
    [],
  );

  const handleChangeDisplayName = async (e: FormEvent) => {
    e.preventDefault();

    await postDisplayName({
      params: { username: username, display_name: displayName },
    });
    setDisplayName('');
    toast.success('Вы успешно изменили отображаемое имя');
  };

  const handleResetDisplayName = async (e: FormEvent) => {
    e.preventDefault();

    await postDisplayName({
      params: { username: username, display_name: '' },
    });
    toast.success('Вы успешно сбросили отображаемое имя');
  };

  return (
    <Card className='w-full  max-w-4xl border-stone-800'>
      <ToastShow />
      <CardHeader>
        <CardTitle className='text-m'>Отображаемое имя</CardTitle>
        <CardDescription className='text-gray-300'>
          Введите свое полное имя или имя для отображения, которое вы хотели бы
          использовать
        </CardDescription>
      </CardHeader>
      <form className='space-y-4'>
        <div className='space-y-2 ml-5'>
          <Input
            maxLength={20}
            style={{ width: 250 }}
            value={displayName}
            onChange={onChangeDisplayName}
            required
            className='border-stone-800'
          />
        </div>
        <div className='border-b border-stone-800'></div>
        <div className='flex justify-between items-center ml-5'>
          <p className='text-sm text-gray-300'>
            Пожалуйста используйте не более 24 символа
          </p>
          <div className='flex items-center'>
            <Button
              type='submit'
              style={{
                color: 'black',
                cursor: 'pointer',
              }}
              onClick={handleResetDisplayName}
              className='mr-5 bg-white hover:bg-stone-200 rounded-lg  transition-colors'
            >
              Сбросить
            </Button>

            <Button
              type='submit'
              style={{
                color: 'black',
                cursor: 'pointer',
              }}
              onClick={handleChangeDisplayName}
              disabled={!displayName}
              className='mr-5 bg-white hover:bg-stone-200 rounded-lg  transition-colors'
            >
              Сохранить
            </Button>
          </div>
        </div>
      </form>
    </Card>
  );
}
