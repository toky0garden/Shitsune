import React from 'react';
import { RegisterProvider } from '../(contexts)/auth/register-context';
import { AuthProvider } from '../(contexts)/auth/login-context';

interface ProviderProps {
  children: React.ReactNode;
}

export default function Provider({ children }: ProviderProps) {
  return (
    <AuthProvider>
      <RegisterProvider>{children}</RegisterProvider>
    </AuthProvider>
  );
}
