

import { Suspense } from "react";
import "./globals.css"; // or your global CSS
import Loading from "./components/Loading";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Terry Kwok",
  description: "Portfolio Website of Terry Kwok",
};

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}