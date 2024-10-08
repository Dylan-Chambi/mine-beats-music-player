import type { Metadata } from "next";
import Sidebar from "@/components/Sidebar";
import { retroFont } from "./fonts";

import "./globals.css";
import { UserProvider } from "@/app/providers/UserProvider";
import { AuthModalProvider } from "@/app/providers/AuthModalProvider";
import LoginModal from "@/components/LoginModal";
import { Toaster } from "react-hot-toast";
import Player from "@/components/Player";

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
          <AuthModalProvider>
            <LoginModal />
            <Toaster />
            <Sidebar>{children}</Sidebar>
            <Player />
          </AuthModalProvider>
        </UserProvider>
      </body>
    </html>
  );
}
