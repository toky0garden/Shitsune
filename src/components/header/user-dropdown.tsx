'use client';

import { LogOutIcon, SettingsIcon } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button, buttonVariants } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLinkItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { logout } from '@/utils/api/request/auth/logout';
import { useUserInfo } from '@/hooks/useUserInfo/useUserInfo';
import { API_URL, ROUTES } from '@/constants';
import { roleMapping } from '@/constants/mapping';
import { cn } from '@/lib/utils';

export function UserDropdown() {
	const { user } = useUserInfo();

	const handleLogout = () => {
		logout();
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button aria-label='Открыть пользовательское меню' size='icon'>
					<Avatar
						// ЗАТЕСТИТЬ CLASSNAME
						className={`${cn(buttonVariants({ variant: 'ghost', size: 'icon' }))}size-9`}
						rounded='full'
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
				<DropdownMenuLinkItem
					href={ROUTES.PROFILE(user?.username)}
					className='p-2'
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
						<span className='text-lg'>{user?.username}</span>
						<span className='text-sm text-gray-400'>
							{roleMapping[user?.role]}
						</span>
					</div>
				</DropdownMenuLinkItem>
				<div className='border-b border-stone-800 mb-2'></div>
				<DropdownMenuLinkItem href='/account/settings' className='mb-2'>
					<SettingsIcon className='mr-2 size-4' />
					<p className='font-semibold'>Настройки</p>
				</DropdownMenuLinkItem>
				<DropdownMenuItem
					className='cursor-pointer text-red-500'
					onClick={handleLogout}
				>
					<LogOutIcon className='mr-2 size-4' />
					<p className='font-semibold'>Выйти</p>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
