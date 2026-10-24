import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adarsh Kumar — Full Stack Developer",
  description:
    "Adarsh Kumar is a full stack developer building thoughtful digital products with React, Next.js, NestJS and modern web technologies.",
  metadataBase: new URL("https://my-portfolio-alpha-ten-29.vercel.app"),
  openGraph: {
    title: "Adarsh Kumar — Full Stack Developer",
    description: "Thoughtful digital products, built with purpose.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
