import SourceList from "./SourceList/SourceList";
import Table from "./SourceList/Table";
import UserStats from "./UserStats/UserStats";
import FlashCards from "@/app/FlashCards/FlashCards";

export default function Right({ source, onGetAnalysis }) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginLeft: "1rem" }}
    >
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Table source={source} />
          <SourceList source={source} onGetAnalysis={onGetAnalysis} />
          <UserStats />
        </div>
      </div>
      <FlashCards />
    </div>
  );
}
