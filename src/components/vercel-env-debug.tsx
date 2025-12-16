export function VercelEnvDebug() {
  return (
    <div className="w-full rounded-lg border border-zinc-200 bg-zinc-100 mt-4 p-4 font-mono text-sm dark:border-zinc-800 dark:bg-zinc-900">
      <h2 className="mb-3 font-semibold text-zinc-900 dark:text-zinc-100">
        Vercel Environment
      </h2>
      <dl className="space-y-2">
        <div>
          <dt className="text-zinc-500">NEXT_PUBLIC_VERCEL_ENV</dt>
          <dd className="text-zinc-900 dark:text-zinc-100">
            {process.env.NEXT_PUBLIC_VERCEL_ENV ?? "undefined"}
          </dd>
        </div>
        <div>
          <dt className="text-zinc-500">NEXT_PUBLIC_VERCEL_URL</dt>
          <dd className="text-zinc-900 dark:text-zinc-100">
            {process.env.NEXT_PUBLIC_VERCEL_URL ?? "undefined"}
          </dd>
        </div>
        <div>
          <dt className="text-zinc-500">NEXT_PUBLIC_VERCEL_BRANCH_URL</dt>
          <dd className="text-zinc-900 dark:text-zinc-100">
            {process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL ?? "undefined"}
          </dd>
        </div>
      </dl>
    </div>
  );
}
