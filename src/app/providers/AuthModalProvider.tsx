"use client";

import { createContext, useContext, useEffect, useState } from "react";

const AuthModalContext = createContext({
  isAuthModalOpen: false,
  openAuthModal: () => {},
  closeAuthModal: () => {},
});

interface AuthModalProviderProps {
  children: React.ReactNode;
}

export const AuthModalProvider = ({ children }: AuthModalProviderProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isAuthModalOpen, setOpenModal] = useState(false);

  const openAuthModal = () => setOpenModal(true);
  const closeAuthModal = () => setOpenModal(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <AuthModalContext.Provider
      value={{
        isAuthModalOpen,
        openAuthModal,
        closeAuthModal,
      }}
    >
      {children}
    </AuthModalContext.Provider>
  );
};

export const useAuthModal = () => {
  const context = useContext(AuthModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
