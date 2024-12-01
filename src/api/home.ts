export async function getHomeData() {
    const response = await fetch(`${process.env.API_HOST}homeData`, {
      next: { tags: ["home", "communities", "developers", "testimonials"] },
    });
  
    if (!response.ok) return undefined;
  
    return response.json();
  }