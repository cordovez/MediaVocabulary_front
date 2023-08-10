const dataURL = process.env.NEXT_PUBLIC_BASE_URL; //for fetching

export default async function getArticles(source) {
  const res = await fetch(`${dataURL}${source}`);

  if (!res.ok) throw new Error("Failed to fetch articles data");
  return res.json();
}
