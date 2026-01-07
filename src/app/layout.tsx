import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Yuval Ishay",
  description: "I'm a graphic designer, specializes in designing stunning, easy to use user interfaces, and in crafting unique, clean and modern logos.",
  keywords: ["graphic design", "logo design", "logo", "design", "fiverr", "fiverr graphic design", "ui", "ux", "ux designer", "visual communication designer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/rny1uhx.css" />
      </head>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
