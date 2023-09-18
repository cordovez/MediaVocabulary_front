import react from "react";
import { use } from "react";
import getArticles from "@/lib/getArticles";
import getVocab from "@/lib/getArticleVocab";
import Link from "next/link";

export default function Media({ params }) {
  let source = params.source;
  const dataPromise = getArticles(source);
  const articlesData = use(dataPromise);

  let articleAnalysis = [];

  if (articlesData) {
    for (let i = 0; i < articlesData.length; i++) {
      const article = articlesData[i];
      const dataPromise = getVocab(source, article._id);
      const vocabulary = use(dataPromise);

      articleAnalysis.push({
        title: article.article_title,
        author: article.author,
        date: article.date_of_pub,
        url: article.url,
        id: article._id,
        vocabulary: {
          adverbs: vocabulary.pos.adverb_count,
          adjectives: vocabulary.pos.adjective_count,
          verbs: vocabulary.pos.adjective_count,
          phrasal_verbs: vocabulary.phrasal_verbs.length,
          sentences: vocabulary.sentences.total_sentences,
        },
      });
    }
  }
  return (
    <div>
      <h1>{source}</h1>
      <div className="flex flex-wrap gap-2">
        {articleAnalysis.map((item) => {
          return (
            <Link href={`${source}/${item.id}`} key={item.id}>
              <div className="flex flex-col bg-white p-2 text-black  w-1/2 rounded-md ">
                <h2>{item.title}</h2>
                <p>{item.date.split("T")[0]}</p>
                <hr />
                <small>total sentences: {item.vocabulary.phrasal_verbs}</small>
                <small>phrasal verbs: {item.vocabulary.phrasal_verbs}</small>
                <small>verbs: {item.vocabulary.verbs}</small>
                <small>adjectives: {item.vocabulary.adjectives}</small>
                <small>adverbs: {item.vocabulary.adverbs}</small>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
