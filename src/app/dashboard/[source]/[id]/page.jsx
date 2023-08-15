export default function Article({ params }) {
  const articleID = params.id;
  const source = params.source;
  return (
    <div>
      This article: {source} , {articleID}
    </div>
  );
}
