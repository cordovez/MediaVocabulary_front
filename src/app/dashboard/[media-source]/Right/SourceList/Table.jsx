import { useEffect, useState } from "react";

export default function Table({ source }) {
  const dataURL = process.env.NEXT_PUBLIC_BASE_URL;

  const [text, setText] = useState();
  const [articles, setArticles] = useState();
  const [loading, setLoading] = useState(true);

  const formatDate = (datetimeString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    const dateObject = new Date(datetimeString);
    return dateObject.toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    setLoading(true);

    async function getArticlesInfo() {
      try {
        const res = await fetch(`${dataURL}${source}`);
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setArticles(data);
        setLoading(false);

        // setText(response.json());
      } catch (error) {
        console.log(error);
      }
    }
    getArticlesInfo();
  }, [dataURL, source]);
  //   console.log(articles);
  if (!loading) {
    return (
      <div className="overflow-x-auto ">
        <table className="table table-xs">
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Author</th>
              {/* <th>Summary</th> */}
              <th>Published on</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article, i) => {
              return (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 "
                  key={article._id}
                >
                  <th>{i + 1}</th>
                  <td className="px-6 py-4  ">
                    <a
                      href={article.url}
                      target="_blank"
                      className="font-medium hover:underline "
                    >
                      {article.article_title}
                    </a>
                  </td>
                  <td className="px-6 py-4">{article.author}</td>
                  {/* <td className="px-6 py-4">{article.summary}</td> */}
                  <td className="px-6 py-4">
                    {formatDate(article.date_of_pub)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
