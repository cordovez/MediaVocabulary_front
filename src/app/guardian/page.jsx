import Link from "next/link";
import getArticles from "@/lib/getArticles";
import getVocab from "@/lib/getArticleVocab";
import { use } from "react";

export default function TheGuardian() {
  const DataPromise = getVocab("smh", "64c268d947b6b5f5a5a938a8");

  const stats = use(DataPromise);

  return <div>{JSON.stringify(stats)}</div>;
}
