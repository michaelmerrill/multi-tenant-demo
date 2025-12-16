export const baseUrl = process.env.NEXT_PUBLIC_ROOT_DOMAIN
  ? `https://${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`
  : process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL}`
    : process.env.NEXT_PUBLIC_VERCEL_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : "http://localhost:3000";

export const protocol = baseUrl.startsWith("https://") ? "https" : "http";

export const rootDomain = baseUrl
  .replace("https://", "")
  .replace("http://", "");

export function getSubdomainSeparator() {
  return process.env.NEXT_PUBLIC_VERCEL_ENV === "preview" ? "---" : ".";
}

export function getSubdomainUrl(subdomain: string) {
  const separator = getSubdomainSeparator();
  return `${protocol}://${subdomain}${separator}${rootDomain}`;
}

