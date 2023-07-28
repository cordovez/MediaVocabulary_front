import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Histogram({ results }) {
  const pathname = usePathname();
  const dataURL = process.env.NEXT_PUBLIC_BASE_URL;
  const source = pathname.split("/")[2];

  const [text, setText] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function getAllText() {
      try {
        const res = await fetch(`${dataURL}aggregated_content/${source}`);
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setText(data);

        // setText(response.json());
      } catch (error) {
        console.log(error);
      }
    }
  }, [dataURL, source]);

  if (!results) {
    return (
      <div className="bg-base-200 mb-12 p-12 max-w-lg">
        <p>No data</p>
      </div>
    );
  }
  // console.log(results);
  const sentences = results.sentences;
  const verb_count = results.pos.verb_count;
  const adverb_count = results.pos.adverb_count;
  const adjective_count = results.pos.adjective_count;
  // console.log(
  //   sentences.total_sentences,
  //   verb_count,
  //   adverb_count,
  //   adjective_count
  // );
  if (!loading) {
    return (
      <>
        <div
          className="bg-base-200 mb-12 p-12 max-w-lg"
          // style={{
          //   backgroundColor: "blue",
          //   marginBottom: "2rem",
          //   padding: "6rem",
          // }}
        >
          <div className="prose">
            <h1>Histogram</h1>
            {/* <pre>{JSON.stringify(results)}</pre> */}
            <p>
              There are {sentences.total_sentences} sentences in this article
            </p>
            <p>{adjective_count} adjectives</p>
            <p>{adverb_count} adverbs</p>
            <p>{verb_count} verbs</p>
            <h3>And here are the potential phrasal verbs:</h3>
            <ul className="list-disc">
              {results.phrasal_verbs.map((phrase) => (
                <li key={phrase}>{phrase}</li>
              ))}{" "}
            </ul>
          </div>
        </div>
      </>
    );
  }
}
