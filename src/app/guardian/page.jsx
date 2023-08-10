import Link from "next/link";
import getArticles from "@/lib/getArticles";
import getVocab from "@/lib/getArticleVocab";

export default async function TheGuardian() {
  // const articlesData = await getArticles("smh");
  // const vocabularyData = await getVocab("latimes", "64d36dc81ff01b9ffd94fa7f");

  // const [articles, vocabulary] = await Promise.all([
  //   articlesData,
  // vocabularyData,
  // ]);

  const content = (
    <div className="prose">
      <div>
        <h1>Title</h1>
      </div>
      <div>
        {articlesData.map((article, i) => {
          return (
            <div key={article._id} className=" mt-8">
              <h1>{i + 1}</h1>
              <p>title: {article.article_title}</p>
              <p>summary: {article.summary}</p>
              <p>author: {article.author}</p>
              <p>date of publication: {article.date_of_pub}</p>
            </div>
          );
        })}
      </div>
    </div>
  );

  return content;
}
