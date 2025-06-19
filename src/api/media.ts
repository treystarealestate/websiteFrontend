export async function getMediaBySlug(slug: string) {
    const response = await fetch(`${process.env.API_HOST}medias/${slug}/detail`, {
    cache: 'no-store', // disables static caching
  });

    if (!response.ok) return undefined;

    return response.json();
}


export async function getAllMedia(page: number = 1, limit: number = 12) {
    try {
      const response = await fetch(
        `${process.env.API_HOST}medias?page=${page}&limit=${limit}`
      );
      
      if (!response.ok) {
        console.error("Failed to fetch media");
        return undefined;
      }
      
      return response.json();
    } catch (error) {
      console.error("Error fetching media:", error);
      return undefined;
    }
  }
  
