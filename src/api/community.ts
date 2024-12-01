export async function getCommunityDetailsBySlug(slug: string) {
  const response = await fetch(
    `${process.env.API_HOST}communities/${slug}/detail`,
    {
      next: { tags: [`communities:${slug}`, "communities:*"] },
    }
  );

  if (!response.ok) return undefined;

  return response.json();
}



export async function getCommunityOption(slug: string) {
  const response = await fetch(
    `${process.env.API_HOST}communnityOptions`,
    {
      cache: "force-cache",
    }
  );

  if (!response.ok) return undefined;

  return response.json();
}
