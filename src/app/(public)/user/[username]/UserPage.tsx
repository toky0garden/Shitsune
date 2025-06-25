'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Typography } from '@/components/ui/typography';
import { API_URL } from '@/constants';
import { roleMapping } from '@/constants/mapping';
import { useUserInfo } from '@/hooks/useUserInfo/useUserInfo';
import Image from 'next/image';

export function UserPage() {
	const { user, isLoading } = useUserInfo();

	if (isLoading)
		return (
			<h1 className='text-2xl text-center font-bold text-white'>LOADING</h1>
		);

	return (
		<div className='w-full'>
			<div className='mx-auto box-border block min-h-full w-full'>
				<div className='relative aspect-[12/5] w-full overflow-hidden bg-secondary md:aspect-[12/3] md:rounded-b-md'>
					<Image
						fill
						alt={`Баннер пользователя ${user?.username}`}
						className='size-full object-cover object-center'
						src='/images/banner.jpg'
					/>
				</div>
				<div className='mt-[-75px] flex items-end px-4 md:mt-[-50px] md:px-6'>
					<div className='flex w-full flex-col items-center justify-between gap-2 text-center md:flex-row md:items-end md:gap-3 md:text-start'>
						<div className='flex flex-col items-center gap-2 text-center md:flex-row md:items-end md:gap-3 md:text-start'>
							<Avatar
								className='size-32 border-[2.5px] border-background bg-muted'
								rounded='xl'
							>
								<AvatarImage
									alt={`Аватар пользователя ${user?.username}`}
									className='object-cover object-center'
									src={`${API_URL}${user?.avatar_url}`}
								/>
								<AvatarFallback className='text-5xl'>
									{user?.username.slice(0, 1).toUpperCase()}
								</AvatarFallback>
							</Avatar>
							<div className='flex flex-col items-center gap-0.5 md:items-start'>
								<Typography
									h3
									as='h1'
									className='flex flex-wrap items-center gap-2'
								>
									{user?.username}
								</Typography>
								<Typography className='text-sm opacity-80'>
									{roleMapping[user?.role]}
								</Typography>
							</div>
						</div>
					</div>
				</div>
				<div className='mt-2 flex flex-col gap-2 px-4 pb-4 pt-2 md:px-6'>
					<Typography h4 as='h3'>
						О себе
					</Typography>
					<p className='text-sm opacity-80'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
						itaque repellat accusantium tempore consectetur numquam!
					</p>
				</div>
			</div>
		</div>
	);
}
