import bcrypt from "bcryptjs";
import { getDb } from "@/db";
import { students } from "@/db/schema";

export async function upsertStudent(input: {
  email: string;
  password: string;
  fullName: string;
  phone: string;
  country: string;
}) {
  const passwordHash = await bcrypt.hash(input.password, 10);

  const [student] = await getDb()
    .insert(students)
    .values({
      email: input.email,
      passwordHash,
      fullName: input.fullName,
      phone: input.phone,
      country: input.country,
    })
    .onConflictDoUpdate({
      target: students.email,
      // Deliberately not touching passwordHash here: a repeat enrollment
      // shouldn't silently overwrite an existing account's password.
      set: {
        fullName: input.fullName,
        phone: input.phone,
        country: input.country,
      },
    })
    .returning({ id: students.id });

  return student.id;
}
