"use client";

import { GetUser } from "@/types/user.interface";
import { getUser } from "@/utils/api/request/user/getUser";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export const useUserInfo = () => {
  const { username } = useParams<{ username: string }>();
  const [user, setUser] = useState<GetUser | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const getUserInfo = async () => {
    setIsLoading(true);
    const data = await getUser({ params: { username: username } });
    setUser(data.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getUserInfo();
  }, [username]);

  return { user, isLoading, refretch: getUserInfo };
};
