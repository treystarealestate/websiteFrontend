export async function getMetaDataByPage(page: string) {
    const metaData = await fetch(`https://treystabackend.deepakpp.live/api/meta/${page}`, {
      cache: "force-cache",
      next: { tags: ["meta", `meta:${page}`, "meta:*"] },
    })
      .then((res) => res.json())
      .catch((err) => {
        console.log("err", err);
      });
    return metaData;
  }