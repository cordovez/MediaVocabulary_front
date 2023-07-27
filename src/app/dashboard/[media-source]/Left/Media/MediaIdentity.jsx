"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function MediaIdentity() {
  const pathname = usePathname();
  const source = pathname.split("/")[2];
  let label;
  switch (source) {
    case "Select%20Media%20Source":
      label = "Please Select a valid source";
      break;
    case "guardian":
      label = "The Guardian";
      break;
    case "independent":
      label = "Independent";
      break;

    case "smh":
      label = "The Sydney Morning Herald";
      break;

    case "latimes":
      label = "The L.A. Times";
      break;
  }
  return (
    <div className="flex justify-center prose-sm pb-10">
      <h1>{label}</h1>
    </div>
  );
}
