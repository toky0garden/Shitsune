"use client";
import { useUserInfo } from "@/hooks/useUserInfo/useUserInfo";
import { logout } from "@/utils/api/request/auth/logout";

export function Profile() {
  const { user, isLoading } = useUserInfo();

  if (isLoading)
    return (
      <h1 className="text-2xl text-center font-bold text-white">LOADING</h1>
    );

  return (
    <div className="flex flex-col">
      Profile for @{user?.username}
      <button onClick={() => logout()} style={{ cursor: "pointer" }}>
        Logout
      </button>
    </div>
  );
}
