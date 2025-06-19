'use client';

import { linkMenu } from '@/constantas';
import { Info, Library } from 'lucide-react';
import Link from 'next/link';

export function Menu() {
	return (
		<nav className='hidden md:flex items-center space-x-6'>
			<Link href='/tweets' className={linkMenu}>
				<Library size={20} />
				Твиты
			</Link>
			<Link href='/faq' className={linkMenu}>
				<Info size={20} />
				FAQ
			</Link>
		</nav>
	);
}
