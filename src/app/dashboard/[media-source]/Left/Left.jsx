import Histogram from "./Histogram/Histogram";
import Words from "./Words/Words";

export default function Left({ results }) {
  return (
    <div>
      <Histogram results={results} />
      {/* <Words results={results} /> */}
    </div>
  );
}
