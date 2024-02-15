import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/shared/navbar/Navbar";

export const metadata: Metadata = {
  title: "WaveChat",
  description: "This is an Social Media Website",
};

export default function RootLayout({
  children,
  feed,
  rightFeed,
}: Readonly<{
  children: React.ReactNode;
  feed: React.ReactNode;
  rightFeed: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" bg-light-gray">
        <Navbar />
        <div className="w-[90%]  max-w-[1512px] mx-auto">
          {children}
          <section className="grid grid-cols-8 gap-3 mt-2">
            <div className="col-span-6">{feed}</div>
            <div className="col-span-2">{rightFeed}</div>
          </section>
        </div>
      </body>
    </html>
  );
}
