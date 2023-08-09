import "./globals.css";
import { Inter } from "next/font/google";
import Masthead from "./masthead/Masthead";
import MediaNav from "./components/media_nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Media Vocabulary",
  description:
    "A web app to help identify relevant vocabulary used in reputable media sources",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Masthead />
        {/* <MediaNav /> */}

        {children}
      </body>
    </html>
  );
}
