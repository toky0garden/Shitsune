import { AspectRatio } from '../ui/aspect-ratio';
import Image from 'next/image';
import { GetUser } from '@/types/user.interfaces';
import { API_URL } from '@/app/(constants)';

export function UserBanner({ user }: GetUser) {
  return (
    <div className='relative w-full overflow-hidden bg-secondary md:rounded-b-md'>
      <AspectRatio ratio={16 / 5}>
        <Image
          src={`${API_URL}${user.banner_url}`}
          alt={`Баннер пользователя ${user.username}`}
          fill
          priority
          quality={90}
          className='object-cover object-center w-full h-full text-center'
        />
      </AspectRatio>
    </div>
  );
}
