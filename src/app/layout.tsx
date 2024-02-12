import type { Metadata } from "next";
import "./globals.css";

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
      <body className="bg-dark-gray">
        {children}
        <button className="py-2 px-4 bg-[#3366FF] text-white rounded-sm mt-5 ml-5">
          Home
        </button>
      </body>
    </html>
  );
}
