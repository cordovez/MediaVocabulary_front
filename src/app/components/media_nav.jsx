"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const buttonStyle = "btn btn-outline btn-secondary btn-xs mx-2";
const buttonStyleActive = "btn btn-secondary btn-xs mx-2";

export default function MediaNav() {
  const pathname = usePathname();

  const navLinks = [
    { name: "The Guardian", href: "/dashboard/guardian" },
    { name: "The Independent", href: "/dashboard/independent" },
    { name: "Los Angeles Times", href: "/dashboard/latimes" },
    { name: "The Sydney Morning Herald", href: "/dashboard/smh" },
  ];

  return (
    <nav role="navigation" aria-label="media selector" className="flex">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link href={link.href} key={link.name} className="flex-none w-34">
            <button className={isActive ? buttonStyleActive : buttonStyle}>
              {link.name}
            </button>
          </Link>
        );
      })}
    </nav>
  );
}
