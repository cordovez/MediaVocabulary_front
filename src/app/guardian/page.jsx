import Link from "next/link";
import getArticles from "@/lib/getArticles";

export default async function TheGuardian() {
  const articles = await getArticles("guardian");
  console.log("hello");

  const content = (
    <div className="prose">
      <div>
        <h1>Title</h1>
      </div>
      <div>
        {articles.map((article, i) => {
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
