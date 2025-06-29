// contexts/AuthContext.tsx
'use client';
import { createContext, useContext, useState, ReactNode } from 'react';
import { LoginData } from '@/types/login.types';
import { getLogin } from '@/utils';
import { ErrorsMsgHandling, ValidateInputsForLogin } from '@/generated';
import { useRefreshUser } from '@/hooks';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { ROUTES } from '@/app/(constants)/routes';

type AuthContextType = {
  loginData: LoginData;
  handleLoginChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleLoginSubmit: (e: React.FormEvent) => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [loginData, setLoginData] = useState<LoginData>({
    username: '',
    password: '',
  });

  const router = useRouter();
  const { refreshUser } = useRefreshUser();

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const valid = ValidateInputsForLogin(loginData);

    if (valid.isValid) {
      await getLogin({ params: loginData }).catch((err) =>
        ErrorsMsgHandling(err),
      );
      await refreshUser();
      await router.push(ROUTES.PROFILE(loginData.username));
    } else {
      toast.error(valid.error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        loginData,
        handleLoginChange,
        handleLoginSubmit,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
