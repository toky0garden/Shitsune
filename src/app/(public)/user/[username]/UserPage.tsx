"use client";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Typography } from "@/components/ui/typography";
import { API_URL } from "@/constants";
import { roleMapping } from "@/constants/mapping";
import { userAtom, userLoadingAtom } from "@/lib/user-atom";
import { useAtom } from "jotai";
import Image from "next/image";

export function UserPage() {
  const [user] = useAtom(userAtom);
  const [isLoading] = useAtom(userLoadingAtom);

  if (isLoading)
    return (
      <h1 className="text-2xl text-center font-bold text-white">LOADING</h1>
    );

  return (
    <div className="w-full">
      <div className="mx-auto box-border block min-h-full w-full">
        <div className="relative w-full overflow-hidden bg-secondary md:rounded-b-md">
          <AspectRatio ratio={16 / 6}>
            <Image
              src={`${API_URL}${user?.banner_url}`}
              alt={`Баннер пользователя ${user?.username}`}
              fill
              className="size-full object-cover object-center text-center"
            />
          </AspectRatio>
        </div>
        <div className="mt-[-65px] flex items-end px-4  md:px-6">
          <div className="flex w-full flex-col items-center justify-between gap-2 text-center md:flex-row md:items-end md:gap-3 md:text-start">
            <div className="flex flex-col items-center gap-2 text-center md:flex-row md:items-end md:gap-3 md:text-start">
              <Avatar
                className="size-32 border-[3.5px] border-black"
                rounded="xl"
              >
                <AvatarImage
                  alt={`Аватар пользователя ${user?.username}`}
                  className="object-cover object-center"
                  src={`${API_URL}${user?.avatar_url}`}
                />
                <AvatarFallback className="text-5xl">
                  {user?.username.slice(0, 1).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-center gap-0.5 md:items-start">
                <Typography h3 className="flex flex-wrap items-center gap-2">
                  {user?.username}
                </Typography>
                <Typography className="text-sm opacity-80">
                  {roleMapping[user?.role]}
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2 flex flex-col gap-2 px-4 pb-4 pt-2 md:px-6">
          <Typography h4 as="h3">
            О себе
          </Typography>
          <p className="text-sm opacity-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            itaque repellat accusantium tempore consectetur numquam!
          </p>
        </div>
      </div>
    </div>
  );
}
