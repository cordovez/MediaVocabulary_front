"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";

import MediaIdentity from "./Left/Media/MediaIdentity";
import Left from "./Left/Left";
import Right from "./Right/Right";

export default function MediaSource() {
  const pathname = usePathname();
  const source = pathname.split("/")[2];

  const [analysisResults, setAnalysisResults] = useState(null);

  const handleAnalysisResults = (results) => {
    setAnalysisResults(results);
  };

  return (
    <div style={{ display: "flex", padding: "3rem" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <MediaIdentity />
        <div style={{ display: "flex" }}>
          <Left results={analysisResults} />
          <Right source={source} onGetAnalysis={handleAnalysisResults} />
        </div>
      </div>
    </div>
  );
}
