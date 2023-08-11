// "use client";
import Article from "./components/articleCard";
import Stats from "./components/articleStats";
import getArticles from "@/lib/getArticles";
import { use } from "react";

export default function MediaSource({ params }) {
  const source = params.source;

  const dataPromise = getArticles(source);
  const articlesData = use(dataPromise);
  return (
    <div flex>
      {articlesData.map((article) => {
        return (
          <div key={article._id} className="mb-10 ">
            <Article article={article}>
              <Stats source={source} id={article._id} />
            </Article>
          </div>
        );
      })}
    </div>
  );
}
