'use client';

import { ROUTES, STYLES } from '@/utils';
import { Info, Library, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export function Menu() {
	return (
		<nav className='hidden md:flex items-center space-x-6'>
			<Link href={ROUTES.TWEETS} className={STYLES.HeaderLink.LINK_MENU}>
				<Library size={20} />
				Твиты
			</Link>
			<Link href={ROUTES.CHAT} className={STYLES.HeaderLink.LINK_MENU}>
				<MessageCircle />
				Чат
			</Link>
			<Link href={ROUTES.FAQ} className={STYLES.HeaderLink.LINK_MENU}>
				<Info size={20} />
				FAQ
			</Link>
		</nav>
	);
}
