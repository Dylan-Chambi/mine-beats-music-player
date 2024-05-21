"use client";

import { MyUserContextProvider } from "@/hooks/useUserClient";

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  
  return (
    <MyUserContextProvider>
      {children}
    </MyUserContextProvider>
  );
};