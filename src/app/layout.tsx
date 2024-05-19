import type { Metadata } from "next";
import Sidebar from "@/components/Sidebar";
import { retroFont } from "./fonts";

import "./globals.css";


export const metadata: Metadata = {
  title: "Mine Beats",
  description: "A simple and beautiful music player for the web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${retroFont.className} antialiased`}>
        <Sidebar>
          {children}
        </Sidebar>
      </body>
    </html>
  );
}
