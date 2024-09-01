"use client";

import Button from "@/components/Button";
import { useAuthModal } from "@/app/providers/AuthModalProvider";

export default function AuthButtons() {
  const { openAuthModal } = useAuthModal();

  return (
    <div className="flex justify-between items-center md:gap-x-4 gap-x-1">
      <div>
        <Button
          className="
          bg-transparent
          text-primary
          font-medium
          text-xs
          border
          border-primary
          hover:text-secondary
          hover:border-secondary
          hover:font-semibold
          transition
          duration-300
          ease-in-out
        "
        >
          Sign up
        </Button>
      </div>
      <div>
        <Button
          onClick={() => openAuthModal()}
          className="
          bg-primary
          px-6
          py-3
          font-medium
          text-xs
          text-white
          hover:bg-secondary
          hover:opacity-100
          transition
          duration-300
          ease-in-out
        "
        >
          Log in
        </Button>
      </div>
    </div>
  );
}
