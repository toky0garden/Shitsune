import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { ToastShow } from '@/components/ui/toast-container';
import { Textarea } from '@/components/ui/textarea';
import { postAboutMe } from '@/utils/api/request/user/settings/postAboutMe';
import { useParams } from 'next/navigation';
import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { toast } from 'react-toastify';

export function ChangeAboutUser() {
  const username = useParams().username as string;
  const [displayAbout, setDisplayAbout] = useState('');

  const onChangeAboutMe = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => setDisplayAbout(e.target.value),
    [],
  );

  const handleChangeAboutMe = async (e: FormEvent) => {
    e.preventDefault();

    await postAboutMe({
      params: { username: username, about_me: displayAbout },
    });
    setDisplayAbout('');
    toast.success('Вы успешно изменили информацию о себе');
  };

  return (
    <Card className='w-full  max-w-4xl border-stone-800'>
      <ToastShow />
      <CardHeader>
        <CardTitle className='text-m'>О себе</CardTitle>
        <CardDescription className='text-gray-300'>
          Введите информацию о себе, чтобы другие пользователи смогли понять кто
          вы такой
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleChangeAboutMe} className='space-y-4'>
        <div className='space-y-2 ml-5'>
          <Textarea
            required
            minLength={3}
            maxLength={100}
            style={{ width: 400 }}
            className='border-stone-800'
            value={displayAbout}
            onChange={onChangeAboutMe}
          />
        </div>
        <div className='border-b border-stone-800'></div>
        <div className='flex justify-between items-center ml-5'>
          <p className='text-sm text-gray-300'>
            О себе не обязательно, но рекомендуется установить
          </p>
          <Button
            type='submit'
            style={{
              color: 'black',
              cursor: 'pointer',
            }}
            disabled={!displayAbout}
            className='mr-5 bg-white hover:bg-stone-200 rounded-lg  transition-colors'
          >
            Сохранить
          </Button>
        </div>
      </form>
    </Card>
  );
}
