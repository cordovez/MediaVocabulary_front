import Histogram from "../Left/Histogram/Histogram";
import SourceList from "./SourceList/SourceList";
import Table from "./SourceList/Table";

export default function Right({ source, onGetAnalysis }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Histogram />
      <Table source={source} />
    </div>
  );
}
