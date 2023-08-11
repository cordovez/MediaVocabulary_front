import Article from "./components/articleCard";
import Stats from "./components/articleStats";
import getArticles from "@/lib/getArticles";
import { Suspense, use } from "react";

export default function MediaSource({ params }) {
  const source = params.source;

  const dataPromise = getArticles(source);
  const articlesData = use(dataPromise);

  const skeleton = (
    <div className=" card bg-white text-black rounded-none">
      <div className="card-body">
        <h2>Stats</h2>
        <p>sentences: ... Loading ...</p>
        <p>phrasal verbs: ... Loading ... </p>
        <p>adverbs: ... Loading ... </p>
        <p>adjectives: ... Loading ...</p>
        <p>verbs: ... Loading ... </p>
      </div>
    </div>
  );
  const articleSkeleton = (
    <div className="card w-80 bg-secondary shadow-xl">
      <div className="card-body">
        <h1> ... Loading ...</h1>
      </div>
    </div>
  );

  const pageTitle =
    source == "guardian"
      ? "The Guardian"
      : source == "independent"
      ? "The Independent"
      : source == "latimes"
      ? "L.A. Times"
      : source == "smh"
      ? "The Sydney Morning Herald"
      : "";

  return (
    <div className="prose flex content-center ">
      <h1>{pageTitle}</h1>
      <div className="flex flex-wrap gap-3">
        {articlesData.map((article) => {
          return (
            <div key={article._id} className="">
              <Suspense fallback={articleSkeleton}>
                <Article article={article}>
                  <Suspense fallback={skeleton}>
                    <Stats source={source} id={article._id} />
                  </Suspense>
                </Article>
              </Suspense>
            </div>
          );
        })}
      </div>
    </div>
  );
}
