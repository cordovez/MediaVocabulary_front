import reformatDatetime from "@/lib/reformatDatetime";
import Link from "next/link";
export default async function Article({ children, article, source }) {
  return (
    <div className="card w-80 bg-white shadow-xl">
      <div className="card-body text-primary-content">
        <p className="text-xs">{reformatDatetime(article.date_of_pub)}</p>
        <Link href={`${source}/${article._id}`}>
          <h2 className="card-title m-0 hover:text-secondary">
            {article.article_title}
          </h2>
        </Link>
        <p>{article.summary}</p>
        <p className="italic">{article.author}</p>
      </div>
      {children}
    </div>
    // <div className="card w-80 bg-white shadow-xl">
    //   <div className="card-body text-primary-content">
    //     <p className="text-xs">Jul 27, 2023</p>
    //     <Link href={`${source}/${article._id}`}>
    //       <h2 className="card-title m-0 hover:text-secondary">
    //         Don’t Milson’s Point that thing at me
    //       </h2>
    //     </Link>
    //     <p>
    //       How a New York City art form found its way to Australia and evolved
    //       into one of our most significant cultural forces.
    //     </p>
    //     <p className="italic">Bella Ann Sanchez</p>
    //   </div>
    //   {children}
    // </div>
    // <div className="card w-80 bg-secondary shadow-xl">
    //   <div className="card-body">
    //     <p className="text-xs">{reformatDatetime(article.date_of_pub)}</p>
    //     <h2 className="card-title m-0">{article.article_title}</h2>
    //     <p>{article.summary}</p>
    //     <p>{article.author}</p>
    //   </div>
    //   {children}
    // </div>
  );
}
