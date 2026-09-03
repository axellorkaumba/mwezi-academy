"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { COOKIE_NAME } from "@/lib/student-auth";

export async function logout(lang: string) {
  (await cookies()).delete(COOKIE_NAME);
  redirect(`/${lang}/connexion`);
}
