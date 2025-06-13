export async function getProjectDetailsBySlug(slug: string) {
  const response = await fetch(
    `${process.env.API_HOST}projects/${slug}/detail`,
    {
      next: { tags: [`projects:${slug}`, "projects:*"] },
    }
  );

  if (!response.ok) return undefined;
  console.log(response.json());
  return response.json();
}

export async function getNearbyProjectsBySlug(slug: string) {
  const response = await fetch(
    `${process.env.API_HOST}projects/${slug}/nearByProjects`,
    {
      cache: "force-cache",
      next: { tags: [`nearby-projects:${slug}`, "nearby-projects:*"] },
    }
  );

  if (!response.ok) return undefined;

  return response.json();
}
