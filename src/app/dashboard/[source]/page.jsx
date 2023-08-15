import Article from "./components/articleCard";
import Stats from "./components/articleStats";
import getArticles from "@/lib/getArticles";
import { Suspense, use } from "react";
import UpdateArticles from "./components/updateButton";
import StatsSkeleton from "./components/statsSkeleton";
import ArticleSkeleton from "./components/ArticleSkeleton";
export default function MediaSource({ params }) {
  const source = params.source;

  const dataPromise = getArticles(source);
  const articlesData = use(dataPromise);

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
    <div className=" flex flex-col items-center  ">
      <h1 className="text-4xl font-extrabold mb-4 p-2 ">{pageTitle}</h1>
      <UpdateArticles />
      <div className="flex flex-wrap justify-center gap-2 ">
        {articlesData.map((article) => {
          return (
            <div key={article._id} className="">
              <Suspense fallback={<ArticleSkeleton />}>
                <Article article={article} source={source}>
                  <Suspense fallback={<StatsSkeleton />}>
                    <Stats source={source} id={article._id} />
                  </Suspense>
                </Article>
              </Suspense>
            </div>
          );
        })}
      </div>
    </div>
    // <div>
    //   <h1 className="prose">{pageTitle}</h1>
    //   <div className="flex flex-row flex-wrap gap-3 w-full">
    //     {articlesData.map((article) => {
    //       return (
    //         <div key={article._id} className="">
    //           <Suspense fallback={articleSkeleton}>
    //             <Article article={article}>
    //               <Suspense fallback={skeleton}>
    //                 <Stats source={source} id={article._id} />
    //               </Suspense>
    //             </Article>
    //           </Suspense>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
  );
}
