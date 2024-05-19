import Link from "next/link";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface SidebarItemProps {
  icon: IconType,
  label: string,
  active?: boolean,
  href: string,
}

export default function SidebarItem({ icon: Icon, label, active, href }: SidebarItemProps) {
  return(
    <Link 
      href={href}
      className={twMerge(`
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
        active && "text-primary"
      )}
    >
      <Icon className="w-6 h-6" />
      <span>{label}</span>
      <div className={twMerge(`
        relative
        w-1
        ml-auto
        rounded-full
        transition
        duration-1000
        ease-in-out
        overflow-hidden
      `,
        active ? "h-8 bg-primary" : "h-0 bg-transparent"
      )}
/>
    </Link>
  );
};
