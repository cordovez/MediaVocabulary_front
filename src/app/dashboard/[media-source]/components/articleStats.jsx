"useClient";
import { use } from "react";
import getVocab from "@/lib/getArticleVocab";

export default function Stats({ source, id }) {
  //   const dataPromise = getVocab(source, id);

  const stats = use(getVocab(source, id));
  console.log(stats);
  return (
    <div className=" card bg-white text-black rounded-none">
      <div className="card-body">
        <h2 className="prose">Stats</h2>
        <p>sentences: {stats.sentences.total_sentences}</p>
        <p>phrasal verbs: {stats.phrasal_verbs.length}</p>
        <p>adverbs: {stats.pos.adverb_count}</p>
        <p>adjectives: {stats.pos.adjective_count}</p>
        <p>verbs: {stats.pos.verb_count}</p>
      </div>
    </div>
  );
}
