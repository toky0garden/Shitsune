'use client';
import { UserIcon } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useAtom } from 'jotai';
import { userAuth } from '@/lib/user-atom';
import { UserDropdown } from './user-dropdown';
import { ROUTES } from '@/app/(constants)/routes';
import { buttonVariants } from '@/components/ui/button';
import { STYLES } from '@/app/(constants)';
export function MenuRight() {
  const [isAuth] = useAtom(userAuth);

  return (
    <div className='flex items-center space-x-4 outline-none'>
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
