import SourceList from "./SourceList/SourceList";
import UserStats from "./UserStats/UserStats";
import Instructions from "./Instructions/Instructions";
import FlashCards from "@/app/FlashCards/FlashCards";

export default function Right() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginLeft: "1rem" }}
    >
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <SourceList />
          <UserStats />
        </div>
        <Instructions />
      </div>
      <FlashCards />
    </div>
  );
}
