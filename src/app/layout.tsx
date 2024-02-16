import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/shared/navbar/Navbar";

export const metadata: Metadata = {
  title: "WaveChat",
  description: "This is an Social Media Website",
};

export default function RootLayout({
  children,
  sidebar,
}: Readonly<{
  children: React.ReactNode;
  sidebar: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <Navbar />
        <div className="w-[90%] grid grid-cols-9 gap-3 max-w-[1512px] mx-auto">
          <div className="col-span-2 relative">{sidebar}</div>
          <div className="col-span-7">{children}</div>
        </div>
      </body>
    </html>
  );
}
