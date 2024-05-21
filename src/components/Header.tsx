import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { createClient } from "@/utils/supabase/server";
import ControlButtons from "./ControlButtons";
import AuthButtons from "./AuthButtons";
import UserSection from "./UserSection";
import { useUserServer } from "@/hooks/useUserServer";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

export default async function Header({ children, className }: HeaderProps) {
  const { user } = await useUserServer();

  return (
    <header
      className={twMerge(
        `
      h-fit
      bg-background
      p-2
      md:p-6
    `,
        className
      )}
    >
      <div className="w-full mb-4 flex items-center justify-between">
        <ControlButtons />
        <div className="flex items-center justify-center h-20 md:hidden gap-x-2">
          <div className="flex items-center justify-center">
            <Image
              src="/images/mine-beats-logo.png"
              alt="logo"
              width={100}
              height={100}
              className="w-[70px] h-auto min-w-[60px]"
              priority
            />
          </div>
          <h1 className="text-sm font-bold text-primary">Mine Beats</h1>
        </div>
        <div className="flex justify-between items-center md:gap-x-4 gap-x-1">
          {user ? <UserSection /> : <AuthButtons />}
        </div>
      </div>
      <>{children}</>
    </header>
  );
}
