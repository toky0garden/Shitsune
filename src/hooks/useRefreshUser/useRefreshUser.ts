"use client";

import { useAtom } from "jotai";
import { initializeUserAtom } from "@/lib/user-atom";

export function useRefreshUser() {
  const [, initializeUser] = useAtom(initializeUserAtom);

  const refreshUser = async () => {
    await initializeUser(true);
  };

  return { refreshUser };
}
