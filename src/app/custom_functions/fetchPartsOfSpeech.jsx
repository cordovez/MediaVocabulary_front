// "use client";
// import { useState } from "react";

export async function FetchPartsOfSpeech(source) {
  const dataURL = process.env.NEXT_PUBLIC_BASE_URL; //for fetching
  const res = await fetch(`${dataURL}aggregated_analysis/${source}`);
  return res.json();
}

// export function usePartsOfSpeech() {
//   const dataURL = process.env.NEXT_PUBLIC_BASE_URL; //for fetching

//   // const [pos, setPOS] = useState();
//   // const [loading, setLoading] = useState(true);

//   const fetchPartsOfSpeech = async (source) => {
//     // setLoading(true);

//     try {
//       const res = await fetch(`${dataURL}aggregated_analysis/${source}`);
//       if (!res.ok) {
//         throw new Error("Failed to fetch data");
//       }
//       const pos = await res.json();
//       return pos;
//     } catch (error) {
//       console.log(error);
//       // setLoading(false);
//     }
//   };

//   // return { pos, fetchPartsOfSpeech };
// }
