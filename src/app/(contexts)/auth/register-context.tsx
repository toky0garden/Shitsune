// contexts/RegisterContext.tsx
'use client';
import { createContext, useContext, useState, ReactNode } from 'react';
import { toast } from 'react-toastify';
import { postRegister } from '@/utils';
import { ErrorsMsgHandling, ValidateInputsForRegister } from '@/generated';
import { useRefreshUser } from '@/hooks';
import { RegisterData } from '@/types/register.types';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/app/(constants)/routes';

type RegisterContextType = {
  registerData: RegisterData;
  handleRegisterChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRegisterSubmit: (e: React.FormEvent) => Promise<void>;
};

const RegisterContext = createContext<RegisterContextType | undefined>(
  undefined,
);

export const RegisterProvider = ({ children }: { children: ReactNode }) => {
  const [registerData, setRegisterData] = useState<RegisterData>({
    username: '',
    email: '',
    password: '',
  });

  const router = useRouter();
  const { refreshUser } = useRefreshUser();

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validation = ValidateInputsForRegister(registerData);

    if (validation.isValid) {
      await postRegister({
        params: registerData,
      }).catch((err) => ErrorsMsgHandling(err));
      await refreshUser();
      await router.push(ROUTES.PROFILE(registerData.username));
    } else {
      toast.error(validation.error);
    }
  };

  return (
    <RegisterContext.Provider
      value={{ registerData, handleRegisterChange, handleRegisterSubmit }}
    >
      {children}
    </RegisterContext.Provider>
  );
};

export const useRegister = () => {
  const context = useContext(RegisterContext);
  if (!context)
    throw new Error('useRegister must be used within RegisterProvider');
  return context;
};
