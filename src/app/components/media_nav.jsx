"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const buttonStyle = "btn btn-outline btn-secondary btn-xs ";
const buttonStyleActive = "btn btn-secondary btn-xs ";

export default function MediaNav() {
  const pathname = usePathname();

  const navLinks = [
    { name: "The Guardian", href: "/guardian" },
    { name: "The Independent", href: "/independent" },
    { name: "Los Angeles Times", href: "/latimes" },
    { name: "The Sydney Morning Herald", href: "/smh" },
  ];

  return (
    <nav
      role="navigation"
      aria-label="media selector"
      className="flex flex-col gap-1 sm:flex-row sm:gap-3 "
    >
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link href={link.href} key={link.name}>
            <button className={isActive ? buttonStyleActive : buttonStyle}>
              {link.name}
            </button>
          </Link>
        );
      })}
    </nav>
  );
}
