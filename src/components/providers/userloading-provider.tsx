"use client";

import { useAtom } from "jotai";
import { initializeUserAtom } from "@/lib/user-atom";
import { useEffect } from "react";
import { JotaiProvider } from "./jotai-provider";

function UserInitializer() {
  const [, initializeUser] = useAtom(initializeUserAtom);

  useEffect(() => {
    initializeUser();

    const handleStorageChange = () => initializeUser(true);

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [initializeUser]);

  return null;
}

export function UserProvider({ children }: { children: React.ReactNode }) {
  return (
    <JotaiProvider>
      <UserInitializer />
      {children}
    </JotaiProvider>
  );
}
