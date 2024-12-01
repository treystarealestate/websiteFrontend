export async function getDeveloperDetails(slug: string) {
  const response = await fetch(
    `${process.env.API_HOST}developers/${slug}/detail`,
    {
      cache: "force-cache",
      next: { tags: [`developers:${slug}`, "developers:*"] },
    }
  );

  if (!response.ok) return undefined;

  return response.json();
}

export async function getAllDevelopers(form = null) {
  let url = `${process.env.API_HOST}developers?`;
  const response = await fetch(url, {
    cache: "force-cache",
    next: { tags: ["developers"] },
  });

  if (!response.ok) return undefined;

  return response.json();
}
