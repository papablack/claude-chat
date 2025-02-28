import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ClaudeWeaver",
  description: "Claude chat with set of AI tools."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "h-full flex flex-col")}>
        <header>
          <Navigation />
        </header>
        <main className="container max-w-1xl mx-auto p-4 flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
