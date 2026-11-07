const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefixes a file in /public with the base path. Next.js does not do this for plain img and a tags. */
export function asset(path: string): string {
  return `${basePath}${path}`;
}
