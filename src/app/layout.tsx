import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/shared/navbar/Navbar";

export const metadata: Metadata = {
  title: "WaveChat",
  description: "This is an Social Media Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="max-w-[1512px] mx-auto bg-light-gray">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
