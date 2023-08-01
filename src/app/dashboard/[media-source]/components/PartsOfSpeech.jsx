import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { usePartsOfSpeech } from "@/app/custom_functions/usePartsOfSpeech";
import POSTable from "./POSTable";

export default function PartsOfSpeech() {
  const pathname = usePathname();
  const source = pathname.split("/")[2];

  const { pos, loading, fetchPartsOfSpeech } = usePartsOfSpeech();

  useEffect(() => {
    fetchPartsOfSpeech(source);
  }, [source]);

  if (!loading) {
    const verb_list = [];
    const adjective_list = pos.pos.adjectives;
    const adverb_list = pos.pos.adverbs;
    const phrasal_verbs = pos.phrasal_verbs;

    for (let i = 0; i < pos.pos.verbs.length; i++) {
      const verb_pair = pos.pos.verbs[i];
      verb_list.push(verb_pair.verb);
    }

    return (
      <div className="flex mt-10 mb-5 bg-neutral ">
        <POSTable
          count={pos.pos.verb_count}
          list={verb_list}
          label={"Verb"}
          part_of_speech={"verb"}
        />
        <POSTable
          count={pos.pos.adjective_count}
          list={adjective_list}
          label={"Adjective"}
          part_of_speech={"adjective"}
        />
        <POSTable
          count={pos.pos.adverb_count}
          list={adverb_list}
          label={"Adverb"}
          part_of_speech={"adverb"}
        />
        <POSTable
          count={phrasal_verbs.length}
          list={phrasal_verbs}
          label={"Phrasal Verbs"}
          part_of_speech={"phrasal_verbs"}
        />
      </div>
    );
  }
}
