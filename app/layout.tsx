import "./globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";

const manrope = Manrope({ weight: ["800"], subsets: ["latin-ext"] });

export const metadata: Metadata = {
  title: "Advice Generator",
  description: "Frontend mentor app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
