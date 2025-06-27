"use client";

import { useState, useRef } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAtom } from "jotai";
import { userAtom } from "@/lib/user-atom";
import { API_URL } from "@/constants";
import { toast } from "react-toastify";
import { postAvatar } from "@/utils/api/request/user/settings/postAvatar";
import { Error } from "@/components/ui/error";
import { useRefreshUser } from "@/hooks/useRefreshUser/useRefreshUser";
import { validateAvatar } from "@/generated/validateAvatar";

export function AvatarUpload() {
  const [user] = useAtom(userAtom);
  const [preview, setPreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { refreshUser } = useRefreshUser();

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleAvatarUpload = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("username", user?.username);
    formData.append("avatar", file);

    const valid = validateAvatar(formData.get("avatar") as File);

    if (valid.isValid) {
      await postAvatar({ params: formData });
      console.log(user?.avatar_url);
      await refreshUser();
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      setFile(null);
      setPreview(null);
    } else {
      toast.error(valid.error);
    }
  };

  return (
    <Card className="w-full max-w-4xl border-stone-800 text-white">
      <Error />
      <form onSubmit={handleAvatarUpload}>
        <CardHeader className="mb-5">
          <div className="flex items-start gap-6">
            <div onClick={handleAvatarClick} className="cursor-pointer">
              <Avatar className="w-24 h-24 border-2 border-stone-800">
                <AvatarImage src={preview || `${API_URL}${user?.avatar_url}`} />
                <AvatarFallback className="text-white">Аватар</AvatarFallback>
              </Avatar>
              <Input
                type="file"
                ref={fileInputRef}
                onChange={handleAvatarChange}
                accept="image/*"
                className="hidden"
              />
            </div>

            <div className="flex-1">
              <CardTitle className="text-lg mb-2">Аватар</CardTitle>
              <CardDescription className="text-gray-300">
                Картинка вашего профиля, которую будут видеть все
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <div className="px-6 flex justify-between items-center border-t border-stone-800 pt-4">
          <p className="text-sm text-gray-300">
            Меняйте, кастомизируйте, так как вы хотите
          </p>
          <Button
            type="submit"
            variant="outline"
            disabled={!file}
            className="bg-white text-black hover:bg-stone-200"
            style={{ cursor: "pointer" }}
          >
            Применить
          </Button>
        </div>
      </form>
    </Card>
  );
}
