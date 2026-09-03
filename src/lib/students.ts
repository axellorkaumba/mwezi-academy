import { getDb } from "@/db";
import { students } from "@/db/schema";
import { normalizePhone } from "@/lib/phone";

export async function upsertStudent(input: {
  phone: string;
  fullName: string;
  email: string;
  country: string;
}) {
  const phone = normalizePhone(input.phone);

  const [student] = await getDb()
    .insert(students)
    .values({
      phone,
      fullName: input.fullName,
      email: input.email,
      country: input.country,
    })
    .onConflictDoUpdate({
      target: students.phone,
      set: {
        fullName: input.fullName,
        email: input.email,
        country: input.country,
      },
    })
    .returning({ id: students.id });

  return student.id;
}
