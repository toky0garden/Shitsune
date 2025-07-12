'use client';

import { userAtom } from '@/lib/user-atom';
import { useAtom } from 'jotai';
import { Button } from '../ui/button';
import { GetUser } from '@/types/user.interfaces';
import { ToastShow } from '../ui/toast-container';
import { toast } from 'react-toastify';
import { postFriendDelete } from '@/utils/api/request/user/postFriendDelete';

export function DeleteFriend({ user }: GetUser) {
  const [currentUser] = useAtom(userAtom);

  if (!currentUser || currentUser.username === user.username) {
    return null;
  }

  const handleDeleteFriend = async () => {
    await postFriendDelete({
      params: {
        username: currentUser.username,
        friends: { username: user.username },
      },
    });

    toast.success(`Вы удалили ${user.username} из друзей`);
  };

  return (
    <>
      <ToastShow />

      <Button
        className='border border-red-800  hover:bg-stone-900/70'
        onClick={handleDeleteFriend}
        style={{ cursor: 'pointer' }}
      >
        Удалить из друзей
      </Button>
    </>
  );
}
