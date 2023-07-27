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
    async function getAllText() {
      try {
        const res = await fetch(`${dataURL}aggregated_content/${source}`);
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setText(data);

        // setText(response.json());
      } catch (error) {
        console.log(error);
      }
    }
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
    getAllText();
  }, [dataURL, source]);
  //   console.log(articles);
  if (!loading) {
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Summary</th>
              <th>Published on</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article) => {
              return (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  key={article._id}
                >
                  <th className="px-6 py-4 ">
                    <a
                      href={article.url}
                      target="_blank"
                      className="font-medium   hover:underline"
                    >
                      {article.article_title}
                    </a>
                  </th>
                  <td className="px-6 py-4">{article.author}</td>
                  <td className="px-6 py-4">{article.summary}</td>
                  <td className="px-6 py-4">
                    {formatDate(article.date_of_pub)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}
