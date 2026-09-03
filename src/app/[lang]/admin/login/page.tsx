import { hasLocale } from "../../dictionaries";
import { notFound } from "next/navigation";
import { AdminLoginForm } from "@/components/admin-login-form";

export default async function AdminLoginPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <div className="mx-auto flex max-w-sm flex-col justify-center px-5 py-24 sm:px-8">
      <span className="font-mono text-[11px] uppercase tracking-wider text-ember-strong">
        Admin
      </span>
      <h1 className="mt-2 font-display text-2xl font-semibold">Mwezi Academy — Back-office</h1>
      <div className="mt-8">
        <AdminLoginForm lang={lang} />
      </div>
    </div>
  );
}
