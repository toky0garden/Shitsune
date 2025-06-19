import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
	return (
		<header className='border-b border-black/20 px-6 py-4 flex items-center justify-between bg-white'>
			<Link href='/' className='flex items-center gap-3'>
				<Image src='y-logo.svg' alt='Y Logo' width={55} height={55} priority />
			</Link>

			<nav className='flex gap-6'>
				<Link href='/'>Главная</Link>
				<Link href='/'>Explorer</Link>
				<Link href='/login'>Авторизация</Link>
			</nav>
		</header>
	);
}
