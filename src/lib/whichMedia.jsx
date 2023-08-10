import { usePathname } from "next/navigation";
export default function WhichMedia() {
  const pathname = usePathname();
  const source = pathname.split("/")[2];
  return source;
}
