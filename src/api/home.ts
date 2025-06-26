export async function getHomeData() {
    const response = await fetch(`${process.env.API_HOST}homeData`, {
    cache: 'no-store', // disables static caching
  });
  
    if (!response.ok) return undefined;
  
    return response.json();
  }
