import { VercelEnvDebug } from "@/components/vercel-env-debug";

export default async function TenantPage({
  params,
}: {
  params: Promise<{ tenant: string }>;
}) {
  const { tenant } = await params;

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>Tenant: {tenant}</h1>
        <VercelEnvDebug />
      </main>
    </div>
  );
}
