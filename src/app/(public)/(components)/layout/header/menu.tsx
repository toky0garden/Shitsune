'use client';

import { ROUTES } from '@/app/(constants)/routes';
import { STYLES } from '@/app/(constants)/styles';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { HelpCircleIcon, Library, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export function Menu() {
  return (
    <nav
      className='hidden md:flex items-center space-x-6 font-semibold'
      style={{ fontSize: 14 }}
    >
      <Link
        href={ROUTES.TWEETS}
        className={`${cn(buttonVariants({ variant: 'ghost' }))} ${STYLES.HeaderLink.LINK_MENU}`}
      >
        <Library className='size-4' />
        Твит
      </Link>
      <Link
        href={ROUTES.CHAT}
        className={`${cn(buttonVariants({ variant: 'ghost' }))} ${STYLES.HeaderLink.LINK_MENU}`}
      >
        <MessageCircle className='size-4' />
        Чат
      </Link>
      <Link
        href={ROUTES.FAQ}
        className={`${cn(buttonVariants({ variant: 'ghost' }))} ${STYLES.HeaderLink.LINK_MENU}`}
      >
        <HelpCircleIcon className='size-4' />
        FAQ
      </Link>
    </nav>
  );
}
