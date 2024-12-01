export async function getTeams() {
  const response = await fetch(`${process.env.API_HOST}agents`, {
    cache: "force-cache",
    next: { tags: ["agents"] },
  });

  if (!response.ok) return undefined;

  return response.json();
}
