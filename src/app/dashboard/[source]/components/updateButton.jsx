"use client";
import { usePathname } from "next/navigation";
import updateArticles from "@/lib/updateArticles";

import { useState, useEffect, use } from "react";

export default function UpdateArticles({ params }) {
  const [lastUpdated, setLastUpdated] = useState("a week ago");
  const [today, setToday] = useState("");

  // Get the source from the path
  const path = usePathname();
  const pathParts = path.split("/");
  const lastPart = pathParts[pathParts.length - 1];

  // The backend expects "indo" for independent:
  const source = lastPart == "independent" ? "indo" : lastPart;

  useEffect(() => {
    const today = new Date();
    setToday(today.toDateString());
  }, []);

  function HandleClick() {
    if (updateArticles(source)) {
      const currentDate = new Date();
      const dateString = currentDate.toDateString();
      setToday(dateString);
      setLastUpdated(dateString);
    }

    // }
  }

  return (
    <div className="stats  shadow mb-4">
      <div className="stat">
        <div className="stat-title">Articles Updated: </div>
        <div className="stat-value">{lastUpdated}</div>
        <div className="stat-desc">can only be updated weekly</div>
        <div className="stat-actions">
          <button className="btn btn-sm btn-success" onClick={HandleClick}>
            Update
          </button>
        </div>
      </div>
    </div>
    // <div className="flex flex-col items-center mb-4 px-4">
    //   <p className="mb-2">
    //     These articles were last updated on: {date}. To update the articles,
    //     press the update button.
    //   </p>
    //   <button className="btn btn-accent w-20">Update</button>
    // </div>
  );
}
