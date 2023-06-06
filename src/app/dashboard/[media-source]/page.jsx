import MediaIdentity from "./Left/Media/MediaIdentity";
import Left from "./Left/Left";
import Right from "./Right/Right";

export default function MediaSource() {
  return (
    <div style={{ display: "flex", padding: "3rem" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <MediaIdentity />
        <div style={{ display: "flex" }}>
          <Left />
          <Right />
        </div>
      </div>
    </div>
  );
}
