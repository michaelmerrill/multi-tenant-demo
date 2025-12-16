import { VercelEnvDebug } from "@/components/vercel-env-debug";
import { getSubdomainUrl } from "@/lib/url";

const TENANTS = ["acme", "stark", "wayne"] as const;

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-3xl font-bold mb-6">Multi-Tenant Platform</h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-8">
          This platform hosts three tenants, each with their own subdomain:
        </p>
        <ul className="space-y-4 w-full">
          {TENANTS.map((tenant) => (
            <li key={tenant}>
              <a
                href={getSubdomainUrl(tenant)}
                className="flex items-center gap-3 p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
              >
                <span className="text-2xl">
                  {tenant === "acme" && "🏭"}
                  {tenant === "stark" && "⚡"}
                  {tenant === "wayne" && "🦇"}
                </span>
                <div>
                  <span className="font-semibold capitalize">{tenant}</span>
                  <span className="text-zinc-500 dark:text-zinc-500 ml-2 text-sm">
                    {getSubdomainUrl(tenant)}
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
        <VercelEnvDebug />
      </main>
    </div>
  );
}
