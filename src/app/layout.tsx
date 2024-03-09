import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/shared/navbar/Navbar";
import { Poppins } from "next/font/google";
import StoreProvider from "@/provider/StoreProvider/StoreProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

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
    <html lang="en" className="light" data-theme="light">
      <body className={`dark:bg-dark-primary ${poppins.className}`}>
        <StoreProvider>
          <Navbar />
          <div className=" w-[90%] grid grid-cols-1 lg:grid-cols-9 gap-3 max-w-[1512px] mx-auto ">
            <div className="lg:col-span-2 relative h-auto ">{sidebar}</div>
            <div className="w-full lg:ml-5 md:w-[80%] lg:w-full mx-auto lg:col-span-7">
              {children}
            </div>
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
