import "./globals.css";
import { Inter } from "next/font/google";
import Masthead from "./masthead/Masthead";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: { template: "%s | Au Courant", default: "Au Courant" },
  description:
    "An AI-free web app to help identify relevant vocabulary used in reputable media sources",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Masthead />

        {children}
      </body>
    </html>
  );
}
