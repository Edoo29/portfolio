import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jebrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Edo | Portfolio",
  description: "Edo's personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jebrainsMono.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
