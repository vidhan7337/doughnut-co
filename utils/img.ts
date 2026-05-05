const bp = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function img(path: string): string {
  return `${bp}${path}`;
}
