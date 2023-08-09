// "use client";
import { usePathname } from "next/navigation";

import ArticlesTable from "./components/ArticlesTable";
import PartsOfSpeech from "./components/PartsOfSpeech";
import getArticles from "@/lib/getArticles";

export default async function MediaSource() {
  const articles = await getArticles("guardian");

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
  // const pathname = usePathname();
  // const source = pathname.split("/")[2];
  // function mediaName() {
  //   switch (source) {
  //     case "latimes":
  //       return "Los Angeles Times";
  //       break;
  //     case "guardian":
  //       return "The Guardian";
  //       break;
  //     case "independent":
  //       return "The Independent";
  //       break;
  //     case "smh":
  //       return "The Sydney Morning Herald";
  //       break;
  //   }
  // }
  // return (
  //   <div className="flex flex-col items-center">
  //     <h1 className="prose">{mediaName()}</h1>
  //     <PartsOfSpeech source={source} />
  //     {/* <ArticlesTable /> */}
  //   </div>
  // );
}
