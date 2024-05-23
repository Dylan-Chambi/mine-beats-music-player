import Button from "./Button";
import { createClient } from "@/utils/supabase/client";

interface LogOutButtonProps {
  children?: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export default function LogOutButton({ children, className, ...props }: LogOutButtonProps) {
  const supabase = createClient();

  const handleLogout = () => {
    supabase.auth.signOut();
  };

  return (
    <Button
      type="submit"
      onClick={handleLogout}
      className={className}
      {...props}
    >
      {children}
    </Button>
  );
}
