import { use } from "react";

import getVocab from "@/lib/getArticleVocab";
import WordList from "@/app/components/WordList";

export default function Article({ params }) {
  const source = params.source;
  const id = params.id;
  const dataPromise = getVocab(source, id);
  const vocabulary = use(dataPromise);

  const verbs = vocabulary.pos.verbs;
  const adverbs = vocabulary.pos.adverbs;
  const adjectives = vocabulary.pos.adjectives;
  const phrasalVerbs = vocabulary.phrasal_verbs;

  if (vocabulary);
  return (
    <div>
      <WordList list={verbs} title={"Verbs"} />
      <WordList list={adjectives} title={"Adjectives"} />
      <WordList list={adverbs} title={"Adverbs"} />
      <WordList list={phrasalVerbs} title={"Phrasal Verbs"} />
    </div>
  );
}
