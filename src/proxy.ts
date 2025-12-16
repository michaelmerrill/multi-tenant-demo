import { type NextRequest, NextResponse } from "next/server";
import { getSubdomain } from "tldts";

const VALID_TENANTS = new Set(["acme", "bob", "test"]);

function getTenant(request: NextRequest): string | null {
  const hostname = request.headers.get("host") || request.nextUrl.hostname;
  const hostWithoutPort = hostname.split(":")[0];

  // Handle localhost
  if (hostWithoutPort.endsWith(".localhost")) {
    return hostWithoutPort.slice(0, -".localhost".length);
  }
  if (hostWithoutPort === "localhost" || hostWithoutPort === "127.0.0.1") {
    return null;
  }

  // Use tldts for preview and production domains
  const subdomain = getSubdomain(hostname);
  if (subdomain) {
    const [tenant] = subdomain.split("---");
    return tenant;
  }
  return null;
}

export function proxy(request: NextRequest) {
  const tenant = getTenant(request);

   // Only rewrite for valid tenants
  if (!tenant || !VALID_TENANTS.has(tenant)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  const pathname = url.pathname;

  // Skip if already has tenant prefix
  if (pathname.startsWith(`/t/${tenant}`)) {
    return NextResponse.next();
  }

  // Rewrite to tenant-prefixed path
  url.pathname = `/t/${tenant}${pathname}`;
  return NextResponse.rewrite(url);
}
 
export const config = {
  matcher: '/((?!api|_next/static|_next/image|.*\\.png$).*)',
}

