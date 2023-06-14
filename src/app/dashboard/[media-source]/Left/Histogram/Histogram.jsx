export default function Histogram({ results }) {
  return (
    <>
      <div
        className="bg-base-200 mb-12 p-12 max-w-lg"
        // style={{
        //   backgroundColor: "blue",
        //   marginBottom: "2rem",
        //   padding: "6rem",
        // }}
      >
        <div className="prose">
          <h1>Histogram</h1> <div>{results}</div>
        </div>
      </div>
    </>
  );
}
