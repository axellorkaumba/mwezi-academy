"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { COOKIE_NAME, createSessionToken } from "@/lib/admin-auth";
import type { AdminLoginState } from "@/lib/admin-login";

export async function login(
  _prevState: AdminLoginState,
  formData: FormData
): Promise<AdminLoginState> {
  const lang = String(formData.get("lang") || "fr");
  const password = String(formData.get("password") || "");

  if (!process.env.ADMIN_PASSWORD || password !== process.env.ADMIN_PASSWORD) {
    return { status: "error" };
  }

  const token = await createSessionToken();
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 12,
  });

  redirect(`/${lang}/admin`);
}
