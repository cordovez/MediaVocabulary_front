"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function MediaSelector() {
  const router = useRouter();
  const [selectValue, setSelectValue] = useState("");

  const onChange = (event) => {
    const value = event.target.value;
    event.preventDefault();
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
        <option value="guardian" key="guardian">
          The Guardian
        </option>
        <option value="latimes" key="latimes">
          The L.A. Times
        </option>
        <option value="independent" key="independent">
          The Independent
        </option>
        <option value="smh" key="smh">
          The Sydney Morning Herald
        </option>
      </select>
    </div>
  );
}
