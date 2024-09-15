"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { BiSearch, BiSolidPlaylist } from "react-icons/bi";
import { HiHome } from "react-icons/hi2";
import SidebarItem from "@/components/SidebarItem";
import PlayList from "@/components/PlayList";
import { IoHeart } from "react-icons/io5";
import { GiMusicSpell } from "react-icons/gi";
import Image from "next/image";
import usePlayer from "@/hooks/usePlayer";
import { twMerge } from "tailwind-merge";

interface SidebarProps {
  children: React.ReactNode;
}

export default function Sidebar({ children }: SidebarProps) {
  const pathname = usePathname();
  const player = usePlayer();

  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Home",
        active: pathname === "/",
        href: "/",
        needsAuth: false,
      },
      {
        icon: BiSearch,
        label: "Search",
        active: pathname === "/search",
        href: "/search",
        needsAuth: false,
      },
      {
        icon: BiSolidPlaylist,
        label: "Playlists",
        active: pathname === "/playlists",
        href: "/playlists",
        needsAuth: true,
      },
      {
        icon: IoHeart,
        label: "Favorites",
        active: pathname === "/favorites",
        href: "/favorites",
        needsAuth: true,
      },
      {
        icon: GiMusicSpell,
        label: "Recently Played",
        active: pathname === "/recent",
        href: "/recent",
        needsAuth: true,
      },
    ],
    [pathname],
  );

  return (
    <div
      className={twMerge(
        `
      flex
      h-full
      `,
        player.activeId && "h-[calc(100%-80px)]",
      )}
    >
      <div className="hidden md:flex flex-col gap-y-2 bg-backgroundSidebar h-full w-[300px] p-2">
        <div className="flex items-center justify-center h-20 w-full">
          <div className="flex items-center justify-center w-20 h-20">
            <Image
              src="/images/mine-beats-logo.png"
              alt="logo"
              width={100}
              height={100}
              className="h-[60px] w-auto"
              priority
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-primary mr-5">Mine Beats</h1>
            <p className="text-xs text-onBackground">
              by{" "}
              <a href="https://github.com/Dylan-Chambi" className="text-secondary">
                Dylan Chambi
              </a>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 pl-5 py-4 my-10">
          {routes.map((route) => (
            <SidebarItem key={route.label} {...route} />
          ))}
        </div>
        <PlayList />
      </div>
      {children}
    </div>
  );
}
