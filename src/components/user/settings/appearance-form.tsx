"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { AvatarUpload } from "./avatar-upload";
import { BannerUpload } from "./banner-upload";

export function AppearanceForm() {
  return (
    <div className="flex flex-col items-center gap-8 justify-center">
      {/* CHANGE PROFILE NAME */}
      <Card className="w-full  max-w-4xl border-stone-800">
        <CardHeader>
          <CardTitle className="text-m">Отображаемое имя</CardTitle>
          <CardDescription className="text-gray-300">
            Введите свое полное имя или имя для отображения, которое вы хотели
            бы использовать
          </CardDescription>
        </CardHeader>
        <form className="space-y-4">
          <div className="space-y-2 ml-5">
            <Input
              maxLength={24}
              style={{ width: 250 }}
              required
              className="border-stone-800"
            />
          </div>
          <div className="border-b border-stone-800"></div>
          <div className="flex justify-between items-center ml-5">
            <p className="text-sm text-gray-300">
              Пожалуйста используйте не более 24 символа
            </p>
            <Button
              type="submit"
              style={{
                color: "black",
                cursor: "pointer",
              }}
              className="mr-5 bg-white hover:bg-stone-200 rounded-lg  transition-colors"
            >
              Сохранить
            </Button>
          </div>
        </form>
      </Card>

      {/* CHANGE AVATAR */}
      <AvatarUpload />

      {/* CHANGE BANNER */}
      <BannerUpload />
    </div>
  );
}
