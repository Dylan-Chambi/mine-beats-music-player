import type { Metadata } from "next";
import Sidebar from "@/components/Sidebar";
import { retroFont } from "./fonts";

import "./globals.css";
import { UserProvider } from "./providers/UserProvider";


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
        <UserProvider>
          <Sidebar>
            {children}
          </Sidebar>
        </UserProvider>
      </body>
    </html>
  );
}
