"use server";

import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";
import { getDb } from "@/db";
import { students } from "@/db/schema";
import { COOKIE_NAME, createStudentSessionToken } from "@/lib/student-auth";
import type { StudentLoginState } from "@/lib/student-login";

export async function login(
  _prevState: StudentLoginState,
  formData: FormData
): Promise<StudentLoginState> {
  const lang = String(formData.get("lang") || "fr");
  const email = String(formData.get("email") || "").trim();
  const password = String(formData.get("password") || "");

  const [student] = await getDb().select().from(students).where(eq(students.email, email));

  // Always run a bcrypt compare, even for an unknown email, so response
  // timing doesn't reveal whether an account exists.
  const DUMMY_HASH = "$2a$10$CwTycUXWue0Thq9StjUM0uJ8T.aRc.2wS9M8ZJv9L1YHnLh1nZ4Se";
  const valid = await bcrypt.compare(password, student?.passwordHash ?? DUMMY_HASH);

  if (!student || !valid) {
    return { status: "error" };
  }

  const token = await createStudentSessionToken(student.id);
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });

  redirect(`/${lang}/compte`);
}
