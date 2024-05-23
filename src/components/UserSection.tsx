"use client";

import { signOut } from "@/app/actions";
import { AuthUser } from "@supabase/supabase-js";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useFormStatus } from "react-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import LogOutButton from "./LogOutButton";

interface UserSectionProps {
  user: AuthUser;
}

export default function UserSection({ user }: UserSectionProps) {
  const { pending } = useFormStatus();
  const [shhowMenu, setShowMenu] = useState(false);

  return (
    <div className="relative ml-3">
      <div>
        <button
          onClick={() => setShowMenu(!shhowMenu)}
          type="button"
          className="flex items-center justify-center bg-backgroundSidebar rounded-3xl shadow-sm p-2 border-2 gap-x-2 border-gray-700 focus:outline-none focus:ring-2 focus:border-transparent"
          id="user-menu-button"
          aria-expanded="false"
          aria-haspopup="true"
          disabled={pending}
        >
          <Image
            className="h-8 w-8 rounded-full"
            width={100}
            height={100}
            src={user.user_metadata.avatar_url}
            alt=""
          />
          <p className="text-xs font-medium text-onBackground hidden md:block">
            {user.user_metadata.full_name}
          </p>
          {shhowMenu ? (
            <IoIosArrowUp size={20} />
          ) : (
            <IoIosArrowDown size={20} />
          )}
        </button>
        {shhowMenu && (
          <div
            className="absolute right-0 mt-2 w-50 md:w-full bg-backgroundSidebar rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu-button"
          >
            <div className="flex flex-col gap-y-1 px-4 py-2" role="none">
              <span className="text-xs text-onBackground">Signed in as</span>
              <span className="text-[0.55em] font-medium text-onBackground truncate">
                {user.email}
              </span>
            </div>
            <hr className="border-t border-gray-700 my-2" />
            <div className="pb-2" role="none">
              <Link
                href="/profile"
                className="inline-flex items-center w-full px-4 py-2 gap-x-4 text-onBackground hover:bg-primary hover:text-background"
                role="menuitem"
              >
                <IoPerson size={20} className="text-onBackground" />
                <span className="text-xs text-onBackground">Profile</span>
              </Link>
              <hr className="border-t border-gray-700 my-2" />
              <form action={signOut} role="none">
                <LogOutButton
                  className="inline-flex items-center w-full px-4 py-2 gap-x-4 bg-transparent rounded-none text-onBackground hover:bg-primary hover:text-background hover:opacity-100"
                  role="menuitem"
                  disabled={pending}
                >
                  <LuLogOut size={20} className="text-red-500" />
                  <span className="text-xs text-onBackground">Sign Out</span>
                </LogOutButton>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
