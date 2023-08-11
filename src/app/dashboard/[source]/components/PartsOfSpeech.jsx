// import { usePathname } from "next/navigation";
// import { FetchPartsOfSpeech } from "@/app/custom_functions/fetchPartsOfSpeech";
import POSTable from "./POSTable";

const dataURL = process.env.NEXT_PUBLIC_BASE_URL; //for fetching

const fetchPOS = async (source) => {
  const res = await fetch(`${dataURL}aggregated_analysis/${source}`);
  return res.json();
};

export default async function PartsOfSpeech({ source }) {
  const data = await fetchPOS("guardian");
  const verb_list = [];
  const adjectives_list = await data.pos.adjectives;
  // for (let i = 0; i < data.pos.verbs.length; i++) {
  //   verb_list.push(data.pos.verbs[i].verb);
  // }

  // const adjective_list = await posData.pos.adjectives;
  // const adverb_list = posData.pos.adverbs;
  // const phrasal_verbs_list = posData.phrasal_verbs;

  console.log(adjectives_list);
  // useEffect(() => {
  //   fetchPartsOfSpeech(source);
  // }, [source]);
  // console.log(pos);
  // if (pos) {
  //   const verb_list = [];
  //   const adjective_list = pos.pos.adjectives;
  //   const adverb_list = pos.pos.adverbs;
  //   const phrasal_verbs = pos.phrasal_verbs;

  //   for (let i = 0; i < pos.pos.verbs.length; i++) {
  //     const verb_pair = pos.pos.verbs[i];
  //     verb_list.push(verb_pair.verb);
  //   }
  return (
    <div className="flex mt-10 mb-5 bg-neutral ">
      {adjectives_list.map((adj) => {
        <p>{adj}</p>;
      })}
      {/* <POSTable
        count={posData.pos.verb_count}
        list={verb_list}
        label={"Verbs"}
        part_of_speech={"verb"}
      /> */}
      {/* <POSTable
        count={adjective_list.length}
        list={adjective_list}
        label={"Adjectives"}
        part_of_speech={"adjective"}
      />
      <POSTable
        count={adverb_list.length}
        list={adverb_list}
        label={"Adverbs"}
        part_of_speech={"adverb"}
      />
      <POSTable
        count={phrasal_verbs_list.length}
        list={phrasal_verbs_list}
        label={"Phrasal Verbs"}
        part_of_speech={"phrasal_verbs"}
      /> */}
    </div>
  );
}
