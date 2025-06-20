import Link from 'next/link';
import { Menu } from './Menu';
import { MenuRight } from './MenuRight';
import { ROUTES, STYLES } from '@/utils';

export default function Header() {
	return (
		<header
			className='border-b border-white/10 px-6 py-4 flex items-center justify-between font-semibold'
			style={{ fontSize: 16 }}
		>
			<Link href={ROUTES.HOME} className={STYLES.HeaderLink.LINK_MENU}>
				<h4 className='text-sm font-bold'>YTWEET</h4>
			</Link>

			<Menu />

			<MenuRight />
		</header>
	);
}
