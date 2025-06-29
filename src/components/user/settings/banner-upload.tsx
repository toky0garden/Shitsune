'use client';

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useAtom } from 'jotai';
import { userAtom, userLoadingAtom } from '@/lib/user-atom';
import { toast } from 'react-toastify';
import { useRefreshUser } from '@/hooks/useRefreshUser/useRefreshUser';
import { validateBanner } from '@/generated/validateBanner';
import Image from 'next/image';
import { postBanner } from '@/utils/api/request/user/settings/postBanner';
import { API_URL } from '@/app/(constants)';
import { ToastShow } from '@/components/ui/toast-container';

export function BannerUpload() {
  const [user] = useAtom(userAtom);
  const [isLoading] = useAtom(userLoadingAtom);
  const [preview, setPreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { refreshUser } = useRefreshUser();

  if (isLoading)
    return (
      <h1 className='text-2xl text-center font-bold text-white'>LOADING</h1>
    );

  const handleBannerClick = () => {
    fileInputRef.current?.click();
  };

  const handleBannerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleBannerUpload = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('username', user?.username);
    formData.append('banner', file);

    const valid = await validateBanner(formData.get('banner') as File);

    if (valid.isValid) {
      await postBanner({ params: formData });
      await refreshUser();
      setFile(null);
      toast.success('Вы успешно изменили баннер');
    } else {
      toast.error(valid.error);
    }
  };

  return (
    <Card className='w-full max-w-4xl border-stone-800 text-white'>
      <ToastShow />
      <form onSubmit={handleBannerUpload}>
        <CardHeader className='mb-5'>
          <div className='flex-1 mb-2'>
            <CardTitle className='text-lg '>Баннер</CardTitle>
            <CardDescription className='text-gray-300'>
              Такая же картинка в вашем профиле, которую будут видеть все
            </CardDescription>
          </div>
          <div className='flex flex-col gap-6'>
            <div
              onClick={handleBannerClick}
              className='cursor-pointer relative group'
            >
              <div className='relative w-full h-48 md:h-64 rounded-md overflow-hidden'>
                <div className='w-full h-full flex items-center justify-center border border-stone-800 rounded-lg'>
                  <span className='text-gray-400'>
                    <Image
                      src={preview || `${API_URL}${user?.banner_url}`}
                      alt={`Баннер пользователя ${user?.username}`}
                      fill
                      className='object-cover text-white text-center'
                    />
                  </span>
                </div>

                <div className='absolute inset-0 bg-black flex items-center justify-center opacity-0 group-hover:opacity-40 transition-opacity'>
                  <span className='px-4 py-2 rounded-md'>
                    {preview ? 'Изменить баннер' : 'Загрузить баннер'}
                  </span>
                </div>
              </div>
              <Input
                type='file'
                ref={fileInputRef}
                onChange={handleBannerChange}
                accept='image/*'
                className='hidden'
              />
            </div>
          </div>
        </CardHeader>

        <div className='px-6 flex justify-between items-center border-t border-stone-800 pt-4'>
          <p className='text-sm text-gray-300'>
            Рекомендуемый размер баннера 1920x1080
          </p>
          <Button
            type='submit'
            variant='outline'
            disabled={!file}
            className='bg-white text-black hover:bg-stone-200 disabled:opacity-50'
            style={{ cursor: 'pointer' }}
          >
            Применить
          </Button>
        </div>
      </form>
    </Card>
  );
}
