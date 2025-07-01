'use client';

import { LogOutIcon, SettingsIcon } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { logout } from '@/utils/api/request/auth/logout/logout';
import { cn } from '@/lib/utils';
import { userAtom } from '@/lib/user-atom';
import { useAtom } from 'jotai';
import { useRefreshUser } from '@/hooks/useRefreshUser/useRefreshUser';
import Link from 'next/link';
import { useBoolean } from '@/hooks';
import { useCallback } from 'react';
import { API_URL } from '@/app/(constants)';
import { roleMapping } from '@/app/(constants)/mapping';
import { ROUTES } from '@/app/(constants)/routes';

export function UserDropdown() {
  const [user] = useAtom(userAtom);
  const [isOpen, setIsOpen] = useBoolean();
  const { refreshUser } = useRefreshUser();

  const handleLogout = async () => {
    await logout();
    await refreshUser();
  };

  const openOrclose = useCallback(() => setIsOpen(false), []);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger className='flex' asChild>
        <Button aria-label='Открыть пользовательское меню' size='icon'>
          <Avatar
            className={`${cn(buttonVariants({ variant: 'ghost', size: 'icon' }))} size-9 rounded-3xl`}
            style={{ cursor: 'pointer' }}
          >
            <AvatarImage
              alt='Аватар пользователя'
              className='object-cover object-center'
              src={`${API_URL}${user?.avatar_url}`}
            />
            <AvatarFallback>
              {user?.username.slice(0, 1).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align='end'
        className='w-56 border-2 border-stone-800'
        style={{ background: '#09090b' }}
      >
        <DropdownMenuItem>
          <Link
            href={ROUTES.PROFILE(user?.username)}
            onClick={openOrclose}
            className='flex items-center'
          >
            <Avatar className='mr-2.5 size-10' rounded='full'>
              <AvatarImage
                alt='Аватар пользователя'
                className='object-cover object-center'
                src={`${API_URL}${user?.avatar_url}`}
              />
              <AvatarFallback>
                {user?.username.slice(0, 1).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className='flex flex-col'>
              <span style={{ fontSize: 17 }}>{user?.username}</span>
              <span className='text-sm text-gray-400'>
                {roleMapping[user?.role]}
              </span>
            </div>
          </Link>
        </DropdownMenuItem>
        <div className='border-b border-stone-800 mb-2'></div>
        <DropdownMenuItem
          className='cursor-pointer text-red-500 flex items-center'
          onClick={handleLogout}
        >
          <LogOutIcon className='mr-2 size-4' />
          <p className='text-sm'>Выйти</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
