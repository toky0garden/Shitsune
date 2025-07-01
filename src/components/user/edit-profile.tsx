'use client';

import { GetUser } from '@/types/user.interfaces';
import { Button } from '../ui/button';
import { useAtom } from 'jotai';
import { userAtom } from '@/lib/user-atom';
import Link from 'next/link';
import { ROUTES } from '@/app/(constants)';

export function EditProfile({ user }: GetUser) {
  const [currentUser] = useAtom(userAtom);
  if (!currentUser || currentUser.username !== user.username) {
    return null;
  }
  return (
    <Link href={ROUTES.SETTINGS(user.username)}>
      <Button
        className='mr-10 px-4 py-2 border border-stone-800 rounded-lg hover:bg-stone-900/70 transition-colors'
        style={{ cursor: 'pointer' }}
      >
        Редактировать профиль
      </Button>
    </Link>
  );
}
