import { VercelEnvDebug } from "@/components/vercel-env-debug";
import { baseUrl } from "@/lib/url";

export default async function TenantPage({
  params,
}: {
  params: Promise<{ tenant: string }>;
}) {
  const { tenant } = await params;

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start">
        <a
          href={baseUrl}
          className="text-sm text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 mb-6 flex items-center gap-1"
        >
          ← Back to homepage
        </a>
        <h1 className="text-3xl font-bold mb-4">
          Tenant:{" "}
          <span className="capitalize">{tenant}</span>
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-8">
          Welcome to the {tenant} tenant dashboard.
        </p>
        <VercelEnvDebug />
      </main>
    </div>
  );
}
