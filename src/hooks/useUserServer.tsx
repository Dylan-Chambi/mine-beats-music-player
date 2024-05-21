"use server";

import { Subscription, UserDetails } from "@/types/types";
import { createClient } from "@/utils/supabase/server";
import { AuthUser } from "@supabase/supabase-js";

type useUserServerReturn = {
  accessToken: string | null;
  user: AuthUser | null;
  userDetail: UserDetails | null;
  subscription: Subscription | null;
};



export async function useUserServer(): Promise<useUserServerReturn> {
  const supabase = createClient();

  const user = (await supabase.auth.getUser()).data.user as AuthUser;
  const accessToken = (await supabase.auth.getSession()).data.session?.access_token || null;
  const userDetail = await supabase.from("users").select("*").single() as unknown as UserDetails;
  const subscription = await supabase.from("subscriptions").select("*, prices(*, products(*))").in("status", ["trialing", "active"]).maybeSingle() as unknown as Subscription;

  const value = {
    accessToken,
    user,
    userDetail,
    subscription,
  };

  return value;
}