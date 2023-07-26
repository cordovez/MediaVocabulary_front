import { useEffect, useState } from "react";

export default async function SourceList({ source, onGetAnalysis }) {
  const dataURL = process.env.NEXT_PUBLIC_BASE_URL;

  const [articles, setArticles] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function getData() {
      try {
        const res = await fetch(`${dataURL}${source}`);
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setArticles(data);
        setLoading(false);

        // setArticles(response.json());
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [dataURL, source]);

  const getAnalysis = async (source, articleId) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/data/article/?source=${source}&id=${articleId}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch analysis data");
      }
      const analysisData = await response.json();
      onGetAnalysis(analysisData); // Pass the analysis results to the callback function
    } catch (error) {
      console.log(error);
    }
  };

  if (!loading) {
    return (
      <div className="card w-96 bg-base-200 shadow-xl">
        <div className="card-body">
          <div className="prose ">
            <div className="flex items-center justify-between">
              <p>Last updated: </p>
              <button className="btn btn-primary">Update</button>
              <h2>Articles</h2>
              <button className="btn btn-secondary">Analyse All</button>
            </div>

            {articles.map((article) => {
              return (
                <div className="flex flex-col " key={article._id}>
                  <p>{article.article_title}</p>
                  <div className="flex items-center justify-between">
                    <button
                      className="btn btn-xs btn-secondary"
                      onClick={() => getAnalysis(source, article._id)}
                    >
                      Analyse this article
                    </button>
                    <a
                      href={article.url}
                      target="_blank"
                      className="link link-hover"
                    >
                      <button className="btn btn-xs btn-outline btn-accent">
                        See full article
                      </button>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
