"use client";
import Article from "./components/articleCard";
import Stats from "./components/articleStats";
import getArticles from "@/lib/getArticles";
import WhichMedia from "@/lib/whichMedia";
import { use } from "react";

export default function MediaSource() {
  const dataPromise = getArticles(WhichMedia());
  const source = WhichMedia();
  const articlesData = use(dataPromise);
  return (
    <div>
      {articlesData.map((article) => {
        // const article_info = {
        //   title: article.article_title,
        //   summary: article.summary,
        //   author: article.author,
        //   published: article.date_of_pub,
        // };

        return (
          <Article key={article._id} article={article}>
            <Stats source={source} id={article._id} />
          </Article>
        );
      })}
      ;
    </div>
  );
}
