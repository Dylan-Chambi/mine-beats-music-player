"use server";

import { revalidatePath } from "next/cache";

export const revalidateFavorites = async () => {
  "use server";
  revalidatePath("/favorites");
};
