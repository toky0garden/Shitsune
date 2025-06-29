import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ROUTES } from '@/app/(constants)/routes';
import { STYLES } from '@/app/(constants)/styles';
import { buttonVariants } from '@/components/ui/button';
import { MenuRight } from './menu-right';
import { Menu } from './menu';
import { METADATA } from '@/app/(constants)';

export default function Header() {
  return (
    <header
      className='border-b border-white/10 px-6 py-2 flex items-center justify-between'
      style={{ fontSize: 16 }}
    >
      <Link
        href={ROUTES.HOME}
        className={`${cn(buttonVariants({ variant: 'ghost' }))} ${STYLES.HeaderLink.LINK_MENU}`}
      >
        <Image
          src={'/Subtract.svg'}
          alt={'logo'}
          width={16}
          height={16}
          priority
        />
        <h4
          className='text-sm uppercase font-semibold'
          style={{ fontSize: 13 }}
        >
          {METADATA.NAME}
        </h4>
      </Link>

      <Menu />

      <MenuRight />
    </header>
  );
}
