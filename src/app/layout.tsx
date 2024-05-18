import type { Metadata } from "next";
import { figtree } from "./fonts";
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
      <body className={`${figtree.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
