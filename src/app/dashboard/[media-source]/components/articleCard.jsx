"useClient";
import getArticles from "@/lib/getArticles";
import getVocab from "@/lib/getArticleVocab";
import reformatDatetime from "@/lib/reformatDatetime";

export default async function Article({ children, article }) {
  return (
    <div className="card w-80 bg-secondary shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{article.article_title}</h2>
        <p>{article.summary}</p>
        <p>{article.author}</p>
        <p>{reformatDatetime(article.date_of_pub)}</p>
      </div>
      {children}
    </div>
  );
}
