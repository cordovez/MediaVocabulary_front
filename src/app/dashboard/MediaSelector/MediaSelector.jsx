"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function MediaSelector() {
  const router = useRouter();
  const [selectValue, setSelectValue] = useState("");

  const onChange = (event) => {
    const value = event.target.value;
    setSelectValue(value);
    router.push(`/dashboard/${value}`);
  };
  return (
    <div className="pl-12">
      <select
        onChange={onChange}
        className="select select-primary w-full max-w-xs"
      >
        <option defaultValue>Select Media Source</option>
        <option value="Guardian">The Guardian: Opinions</option>
        <option value="NYT">The New York Times</option>
        <option value="SMH">Sydney Morning Herald</option>
        <option value="WP">The Washington Post</option>
      </select>
    </div>
  );
}
