"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";

import Table from "./components/ArticlesTable";
import PartsOfSpeech from "./components/PartsOfSpeech";

export default function MediaSource() {
  return (
    <div className="flex flex-col items-center">
      <PartsOfSpeech />
      <Table />
    </div>
  );
}
