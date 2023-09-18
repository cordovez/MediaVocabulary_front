// "use client";

const dataURL = process.env.NEXT_PUBLIC_BASE_URL; //for fetching

export default async function getVocab(source, id) {
  const res = await fetch(`${dataURL}article/${source}/${id}`, {
    next: { revalidate: 180 },
  });
  const data = await res.json();
  // console.log(data);
  // if (!res.ok) throw new Error("Failed to fetch vocabulary data");
  return data;
}
