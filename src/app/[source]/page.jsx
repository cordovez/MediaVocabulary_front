import react from "react";
import { use } from "react";
import getArticles from "@/lib/getArticles";
import getVocab from "@/lib/getArticleVocab";

export default function Media({ params }) {
  let source = params.source;
  const dataPromise = getArticles(source);
  const articlesData = use(dataPromise);

  let articleAnalysis = [];
  let articlesVocabulary = [];

  if (articlesData) {
    for (let i = 0; i < articlesData.length; i++) {
      const article = articlesData[i];
      const dataPromise = getVocab(source, article._id);
      const vocabulary = use(dataPromise);

      articleAnalysis.push({
        title: article.article_title,
        date: article.date_of_pub,
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
  console.log(articleAnalysis[0]);
  return (
    <div>
      <h1>{source}</h1>
      <div>
        {articlesData.map((item) => {
          return (
            <div key={item._id}>
              <h2>{item.article_title}</h2>
              <p>{item.date_of_pub.split("T")[0]}</p>
              <p>{item._id}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
