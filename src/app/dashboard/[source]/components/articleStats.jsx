import { use } from "react";
import getVocab from "@/lib/getArticleVocab";

export default function Stats({ source, id }) {
  const dataPromise = getVocab(source, id);
  const stats = use(dataPromise);

  return (
    <div className=" card  bg-neutral text-base-content rounded-t-none  ">
      <div className="card-body py-2">
        <p className="text-xs">
          <span className="font-bold">sentences:</span>{" "}
          {stats.sentences.total_sentences},{" "}
          <span className="font-bold">phrasal verbs:</span>{" "}
          {stats.phrasal_verbs.length},{" "}
          <span className="font-bold">adverbs:</span> {stats.pos.adverb_count},{" "}
          <span className="font-bold">adjectives:</span>{" "}
          {stats.pos.adjective_count}, <span className="font-bold">verbs:</span>{" "}
          {stats.pos.verb_count},{" "}
        </p>
      </div>
    </div>
  );
}
