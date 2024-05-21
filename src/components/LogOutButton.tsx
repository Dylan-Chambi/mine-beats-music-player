"use client";

import { AuthUser } from "@supabase/supabase-js";
import Button from "./Button";
import Image from "next/image";
import { createClient } from "@/utils/supabase/client";

interface LogOutButtonProps {
  user: AuthUser | null;
}

export default function LogOutButton({ user }: LogOutButtonProps) {
  const supabase = createClient();

  const handleLogout = () => {
    supabase.auth.signOut();
  };

  return (
    <Button
      type="submit"
      onClick={handleLogout}
      className="inline-flex items-center bg-transparent text-primary font-medium text-xs border border-primary hover:text-secondary hover:border-secondary hover:font-semibold transition duration-300 ease-in-out"
    >
      {user?.user_metadata.avatar_url ? (
        <Image
          src={user?.user_metadata.avatar_url}
          alt="avatar"
          width={30}
          height={30}
          className="rounded-full"
        />
      ) : null}
      Log out
    </Button>
  );
}
