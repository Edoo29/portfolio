import type { Metadata } from "next";
import "./globals.css";
import { roboto } from "./fonts";
import CustomCursor from "./_components/custom-cursor";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Welcome to my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-cursor-color="var(--purple)">
      <body className={`${roboto.className} antialiased`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
