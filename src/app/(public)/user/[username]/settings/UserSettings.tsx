"use client";

import { Typography } from "@/components/ui/typography";
import { AppearanceForm } from "@/components/user/settings/appearance-form";
import { useParams } from "next/navigation";

export function UserSettings() {
  const username = useParams().username as string;

  return (
    <div className="min-h-screen mt-10">
      <div className="flex flex-col items-center justify-center mb-10">
        <Typography className="text-3xl mb-2">Настройки @{username}</Typography>
        <Typography muted className="text-lg">
          Кастомизация внешнего вида профиля
        </Typography>
      </div>

      <AppearanceForm />
    </div>
  );
}
