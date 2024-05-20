import Image from "next/image";
import Button from "./Button";
import { createClient } from "@/utils/supabase/server";
import { handleLogout } from "@/app/actions";


export default async function UserSection() {
  const supabase = createClient();
  const { data : { user } } = await supabase.auth.getUser();

  return (
    <div className="flex justify-between items-center md:gap-x-4 gap-x-1">
      <form action={handleLogout}>
        <Button
          type="submit"
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
      </form>
    </div>
  );
}
