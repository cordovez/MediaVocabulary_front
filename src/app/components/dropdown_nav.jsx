"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const buttonStyle = "btn btn-outline btn-secondary btn-xs ";
const buttonStyleActive = "btn btn-secondary btn-xs ";

export default function DropdownNav() {
  const pathname = usePathname();
  const navLinks = [
    { name: "The Guardian", href: "/dashboard/guardian" },
    { name: "The Independent", href: "/dashboard/independent" },
    { name: "Los Angeles Times", href: "/dashboard/latimes" },
    { name: "The Sydney Morning Herald", href: "/dashboard/smh" },
  ];
  return (
    <nav
      role="navigation"
      aria-label="media selector"
      tabIndex={0}
      className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
    >
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            href={link.href}
            key={link.name}
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow hover:bg-base-100 rounded-box w-52"
          >
            <p className="p-2">{link.name}</p>
          </Link>
        );
      })}
    </nav>
  );
}
// export default function DropdownNav() {
//   const pathname = usePathname();

//   const navLinks = [
//     { name: "The Guardian", href: "/dashboard/guardian" },
//     { name: "The Independent", href: "/dashboard/independent" },
//     { name: "Los Angeles Times", href: "/dashboard/latimes" },
//     { name: "The Sydney Morning Herald", href: "/dashboard/smh" },
//   ];

//   return (
//     <>
//       <nav role="navigation" aria-label="media selector">
//         {navLinks.map((link) => {
//           // const isActive = pathname === link.href;
//           return (
//             <Link
//               href={link.href}
//               key={link.name}
//               tabIndex={0}
//               className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow hover:bg-base-100 rounded-box w-52"
//             >
//               <p className="p-2">{link.name}</p>
//             </Link>
//           );
//         })}
//       </nav>
//     </>
//   );
// }
