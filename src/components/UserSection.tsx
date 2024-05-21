import { handleLogout } from "@/app/actions";
import LogOutButton from "./LogOutButton";
import { useUserServer } from "@/hooks/useUserServer";


export default async function UserSection() {
  const { user } = await useUserServer();

  return (
    <div className="flex justify-between items-center md:gap-x-4 gap-x-1">
      <form action={handleLogout}>
        <LogOutButton user={user} />
      </form>
    </div>
  );
}
