import { use } from "react";
import getVocab from "@/lib/getArticleVocab";

export default function Stats({ source, id }) {
  const dataPromise = getVocab(source, id);
  const stats = use(dataPromise);

  return (
    <div className=" card  bg-neutral-content text-base-content ">
      <div className="card-body">
        <h2 className="m-0">Stats</h2>
        <p className="text-xs m-0">
          <span className="font-bold">sentences:</span>{" "}
          {stats.sentences.total_sentences}
        </p>
        <p className="text-xs m-0">
          <span className="font-bold">phrasal verbs:</span>{" "}
          {stats.phrasal_verbs.length}
        </p>
        <p className="text-xs m-0">
          <span className="font-bold">adverbs:</span> {stats.pos.adverb_count}
        </p>
        <p className="text-xs m-0">
          <span className="font-bold">adjectives:</span>{" "}
          {stats.pos.adjective_count}
        </p>
        <p className="text-xs m-0">
          <span className="font-bold">verbs:</span> {stats.pos.verb_count}
        </p>
      </div>
    </div>
  );
}
