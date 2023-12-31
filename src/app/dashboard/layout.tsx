import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Sidebar2 from "@/app/(components)/Sidebar2";

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
        <div>
          <Sidebar2>{children}</Sidebar2>
        </div>
      </body>
    </html>
  );
}
