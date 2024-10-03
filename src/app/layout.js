import { Inter } from "next/font/google";
import "./globals.css";

import AnimationTransitionProvider from "./components/AnimationTransitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Oscar Wihlborg Ergun's portfolio",
  description:
    "Modern portfolio app with next14, tailwindcss and framer-motion",
};

export default function RootLayout({ children  }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnimationTransitionProvider >{children}</AnimationTransitionProvider>
      </body>
    </html>
  );
}
