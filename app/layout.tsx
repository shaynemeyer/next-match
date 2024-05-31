import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import TopNav from "@/components/navbar/TopNav";
import { auth } from "@/auth";

export const metadata: Metadata = {
  title: "Next Match",
  description: "A Dating App for the Next Generation",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  const userId = session?.user?.id || null;

  return (
    <html lang="en">
      <body>
        <Providers userId={userId}>
          <TopNav />
          <main className="container mx-auto">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
