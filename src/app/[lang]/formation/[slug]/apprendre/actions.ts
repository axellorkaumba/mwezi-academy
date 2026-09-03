"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { and, eq } from "drizzle-orm";
import { getDb } from "@/db";
import { lessonProgress } from "@/db/schema";
import { COOKIE_NAME, verifyStudentSessionToken } from "@/lib/student-auth";

export async function toggleModuleComplete(
  lang: string,
  courseSlug: string,
  moduleIndex: number
) {
  const token = (await cookies()).get(COOKIE_NAME)?.value;
  const studentId = await verifyStudentSessionToken(token);
  if (!studentId) throw new Error("Not authenticated");

  const db = getDb();
  const existing = await db
    .select()
    .from(lessonProgress)
    .where(
      and(
        eq(lessonProgress.studentId, studentId),
        eq(lessonProgress.courseSlug, courseSlug),
        eq(lessonProgress.moduleIndex, moduleIndex)
      )
    );

  if (existing.length > 0) {
    await db.delete(lessonProgress).where(eq(lessonProgress.id, existing[0].id));
  } else {
    await db.insert(lessonProgress).values({ studentId, courseSlug, moduleIndex });
  }

  revalidatePath(`/${lang}/formation/${courseSlug}/apprendre`);
}
