import { hasLocale } from "../dictionaries";
import { notFound } from "next/navigation";
import { desc } from "drizzle-orm";
import { getDb } from "@/db";
import { enrollments, enterpriseLeads, universityLeads } from "@/db/schema";
import { AdminDashboard } from "@/components/admin-dashboard";

export const dynamic = "force-dynamic";

export default async function AdminPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const db = getDb();
  const [enrollmentRows, enterpriseRows, universityRows] = await Promise.all([
    db.select().from(enrollments).orderBy(desc(enrollments.createdAt)),
    db.select().from(enterpriseLeads).orderBy(desc(enterpriseLeads.createdAt)),
    db.select().from(universityLeads).orderBy(desc(universityLeads.createdAt)),
  ]);

  return (
    <AdminDashboard
      lang={lang}
      enrollments={enrollmentRows}
      enterpriseLeads={enterpriseRows.map((r) => ({
        id: r.id,
        contactName: r.contactName,
        email: r.email,
        objective: r.objective,
        status: r.status,
        createdAt: r.createdAt,
        primaryLabel: r.company,
        secondaryLabel: r.teamSize,
      }))}
      universityLeads={universityRows.map((r) => ({
        id: r.id,
        contactName: r.contactName,
        email: r.email,
        objective: r.objective,
        status: r.status,
        createdAt: r.createdAt,
        primaryLabel: r.university,
        secondaryLabel: r.studentCount,
      }))}
    />
  );
}
