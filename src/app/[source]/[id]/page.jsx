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
  const adjective = vocabulary.pos.adjectives;
  const phrasalVerbs = vocabulary.phrasal_verbs;

  // function returnItems(list) {
  //   for (let i = 0; i < list.length; i++) {
  //     let items = [];
  //     items.push(<li key={i}> {element} </li>);
  //     return items;
  //   }
  // }

  if (vocabulary);
  return (
    <div>
      <WordList list={verbs} color={"blue"} />
    </div>
  );
}
