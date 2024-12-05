export async function getHomeData() {
    const response = await fetch(`${process.env.API_HOST}homeData`);
  
    if (!response.ok) return undefined;
  
    return response.json();
  }