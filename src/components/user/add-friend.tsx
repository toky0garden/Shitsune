'use client';

import { userAtom } from '@/lib/user-atom';
import { useAtom } from 'jotai';
import { Button } from '../ui/button';
import { GetUser } from '@/types/user.interfaces';
import { postFriendAdd } from '@/utils/api/request/user/postFriendAdd';
import { ToastShow } from '../ui/toast-container';
import { toast } from 'react-toastify';
import { useBoolean } from '@/hooks';
import { useEffect } from 'react';

export function AddFriend({ user }: GetUser) {
  const [currentUser] = useAtom(userAtom);
  const [isSubscribed, setIsSubscribed] = useBoolean();

  // useEffect(() => {
  //   const fetchSubscriptionStatus = async () => {
  //     if (!currentUser) return;

  //     await postFriendAdd({
  //       params: {
  //         username: currentUser.username,
  //         friends: { username: user.username },
  //       },
  //     });
  //     // setIsSubscribed(isSub);
  //   };

  //   fetchSubscriptionStatus();
  // }, [currentUser, user.username]);

  if (!currentUser || currentUser.username === user.username) {
    return null;
  }

  const handleAddFriend = async () => {
    await postFriendAdd({
      params: {
        username: currentUser.username,
        subs: { username: user.username },
      },
    });

    // const isSub = await setIsSubscribed(isSub);
    toast.success(`Вы успешно подписались на ${user.username}`);
  };

  return (
    <>
      <ToastShow />
      <Button
        className='border border-stone-800 ml-2 py-3 hover:bg-stone-900/70'
        onClick={handleAddFriend}
        style={{ cursor: isSubscribed ? 'default' : 'pointer' }}
        disabled={isSubscribed}
      >
        {isSubscribed ? 'Вы подписаны' : 'Подписаться'}
      </Button>
    </>
  );
}
