const dataURL = process.env.NEXT_PUBLIC_SPIDER_URL; //for fetching
export default async function updateArticles(source) {
  const res = await fetch(`${dataURL}run_spider/${source}`, {
    next: { revalidate: 3600 },
  });

  const data = await res.json();

  if (!data.message) throw new Error("Failed to fetch articles data");
  return true;
}
