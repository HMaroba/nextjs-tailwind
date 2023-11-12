import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import HomeBar from "./pages/navigation/Top5";
import Sidebar from "./(components)/Sidebar";
import Footer from "./(components)/footer";

const inter = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Js Tailwind",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='mb-20'>
        <HomeBar />
        </div>
        {children}
        <Footer />

        {/* <div className="flex">
          <Sidebar />
          <div className="flex-1 p-2">{children}</div>
        </div> */}
      </body>
    </html>
  );
}
