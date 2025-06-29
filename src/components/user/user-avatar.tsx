import { roleMapping } from '@/app/(constants)/mapping';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Typography } from '../ui/typography';
import { GetUser } from '@/types/user.interfaces';
import { API_URL } from '@/app/(constants)';

export function UserAvatar({ user }: GetUser) {
  return (
    <div className='mt-[-65px] flex items-end px-4  md:px-6'>
      <div className='flex w-full flex-col items-center justify-between gap-2 text-center md:flex-row md:items-end md:gap-3 md:text-start'>
        <div className='flex flex-col items-center gap-2 text-center md:flex-row md:items-end md:gap-3 md:text-start'>
          <Avatar className='size-32 border-[3.5px] border-black' rounded='xl'>
            <AvatarImage
              alt={`Аватар пользователя ${user.username}`}
              className='object-cover object-center'
              src={`${API_URL}${user.avatar_url}`}
            />
            <AvatarFallback className='text-5xl'>
              {user.username.slice(0, 1).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className='flex flex-col items-center gap-0.5 md:items-start'>
            <Typography h3 className='flex flex-wrap items-center gap-2'>
              {user.display_name ? user.display_name : user.username}
            </Typography>
            <Typography className='text-sm opacity-80'>
              {roleMapping[user.role]}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
