"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function signInWithProvider(
  provider: "google" | "github" | "email",
  formData: FormData
) {
  if (provider !== "email") {
    const supabase = createClient();
    const origin = headers().get("origin");

    const res = await supabase.auth.signInWithOAuth({
      provider: provider,
      options: {
        redirectTo: `${origin}/auth/callback`,
      },
    });

    if (res.error) {
      console.error(res.error);
    } else {
      return redirect(res.data.url);
    }
  }
};

export async function handleLogout() {
  const supabase = createClient();
  
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.log(error);
  }
  revalidatePath('/');
};

