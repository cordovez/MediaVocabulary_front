import reformatDatetime from "@/lib/reformatDatetime";
export default async function Article({ children, article }) {
  return (
    <div className="card w-80 bg-secondary shadow-xl">
      <div className="card-body">
        <p className="text-xs">{reformatDatetime(article.date_of_pub)}</p>
        <h2 className="card-title m-0">{article.article_title}</h2>
        <p>{article.summary}</p>
        <p>{article.author}</p>
      </div>
      {children}
    </div>
  );
}
