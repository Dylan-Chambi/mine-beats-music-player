import { useAuthModal } from "@/app/providers/AuthModalProvider";
import { useUserClient } from "@/hooks/useUserClient";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface SidebarItemProps {
  icon: IconType;
  label: string;
  active?: boolean;
  href: string;
  needsAuth: boolean;
}

export default function SidebarItem({
  icon: Icon,
  label,
  active,
  href,
  needsAuth,
}: SidebarItemProps) {
  const router = useRouter();
  const { user } = useUserClient();
  const { openAuthModal } = useAuthModal();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (needsAuth && !user) {
      openAuthModal();
    } else {
      router.push(href);
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={twMerge(
        `
        flex
        flex-row
        h-8
        items-center
        w-full
        gap-x-4
        text-xs
        font-medium
        cursor-pointer
        hover:text-onBackgroundSidebar
        transition
        text-onBackgroundSidebar-muted
      `,
        active && "text-primary",
      )}
    >
      <Icon className="w-6 h-6" />
      <span>{label}</span>
      <div
        className={twMerge(
          `
        relative
        w-1
        ml-auto
        rounded-full
        transition
        duration-1000
        ease-in-out
        overflow-hidden
      `,
          active ? "h-8 bg-primary" : "h-0 bg-transparent",
        )}
      />
    </Link>
  );
}
