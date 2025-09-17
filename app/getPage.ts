import { PageResponse } from "./types";

export async function getPage(slug: string): Promise<PageResponse> {
  const res = await fetch(
    `https://abundant-birthday-b0c26c3227.strapiapp.com/api/pages?filters[slug][$eq]=${slug}&populate[sections][populate]=*`
  );

  if (!res.ok) throw new Error(`Failed: ${res.status}`);
  return res.json();
}
