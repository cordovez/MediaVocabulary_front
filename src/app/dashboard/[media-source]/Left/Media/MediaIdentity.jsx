"use client";
import { usePathname } from "next/navigation";

export default function MediaIdentity() {
  const pathname = usePathname();
  const source = pathname.split("/")[2];
  let label = "";
  // console.log(source);
  switch (source) {
    case "Select%20Media%20Source":
      label = "Please Select a valid source";
      break;
    case "Guardian":
      label = "The Guardian: Opinions";
      break;
    case "NYT":
      label = "The New York Times";
      break;

    case "SMH":
      label = "The Sydney Morning Herald";
      break;

    case "WP":
      label = "The Washington Post";
      break;
  }
  return (
    <div
      className="flex justify-between prose-sm"
      // style={{
      //   display: "flex",
      //   justifyContent: "space-between",
      //   marginBottom: "2rem",
      // }}
    >
      <h1>{label}</h1>
      <div>
        <p> XXXX word parsed</p>
      </div>
      <p>23 May 2023</p>
    </div>
  );
}
