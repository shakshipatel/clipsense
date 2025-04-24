// "use client"
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { ToastContainer } from "react-toastify";

import StoreProvider from "./StoreProvider";

import "./globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "YT Transcriber",
  description: "Generate scripts from youtube videos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
      {/* <body> */}
        <ToastContainer />
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
