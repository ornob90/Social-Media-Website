import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/shared/navbar/Navbar";
import { Poppins } from "next/font/google";
import StoreProvider from "@/providers/StoreProvider";
import { EdgeStoreProvider } from "@/providers/EdgeStoreProvider";
import NextAuthSessionProvider from "@/providers/NextAuthSessionProvider";
import TenStackProvider from "@/providers/TenStackProvider";

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
  trending,
}: Readonly<{
  children: React.ReactNode;
  sidebar: React.ReactNode;
  trending: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" data-theme="light">
      <body
        className={`dark:bg-dark-primary bg-[#eeeeee] ${poppins.className}`}
      >
        <TenStackProvider>
          <StoreProvider>
            <NextAuthSessionProvider>
              <EdgeStoreProvider>
                <Navbar />
                <div className=" w-[90%]  pt-[5%] grid grid-cols-1 lg:grid-cols-9 gap-x-4 max-w-[1512px] mx-auto  bg-transparent">
                  <div className="lg:col-span-2 relative h-auto ">
                    {sidebar}
                  </div>
                  <div className="w-full  md:w-[80%] lg:w-full mx-auto lg:col-span-5">
                    {children}
                  </div>
                  <div className="lg:col-span-2  ">{trending}</div>
                </div>
              </EdgeStoreProvider>
            </NextAuthSessionProvider>
          </StoreProvider>
        </TenStackProvider>
      </body>
    </html>
  );
}
