import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Oscar Wihlborg Ergun's portfolio",
  description:
    "Modern portfolio app with next14, tailwindcss and framer-motion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-screen h-screen bg-[#141925] text-white">
        <div className="h-36 bg-[#252D40]">

          <Navbar />
        </div>
        <div className="h-[calc(100vh-144px)]">
          {children}
        </div>
        </div>
      </body>
    </html>
  );
}
