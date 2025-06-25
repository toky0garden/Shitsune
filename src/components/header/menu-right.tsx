'use client';
import { UserIcon } from 'lucide-react';
import Link from 'next/link';
import { useUserInfo } from '@/hooks/useUserInfo/useUserInfo';
import { UserDropdown } from './user-dropdown';
import { ROUTES, STYLES } from '@/constants';
import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/button';
export function MenuRight() {
	const { isAuth } = useUserInfo();

	return (
		<div className='flex items-center space-x-4'>
			{isAuth ? (
				<UserDropdown />
			) : (
				<Link
					href={ROUTES.LOGIN}
					prefetch
					className={`${cn(buttonVariants({ variant: 'ghost', size: 'icon' }))}${STYLES.HeaderLink.LINK_MENU} py-2 px-2`}
				>
					<UserIcon className='size-4' />
				</Link>
			)}
		</div>
	);
}
