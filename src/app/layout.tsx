import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/next"
import AnimationProvider from "@/components/utils/AnimationProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://yuvalishay.com"), // Replace with your actual domain
  title: "Yuval Ishay",
  description: "I'm a graphic designer, specializes in designing stunning, easy to use user interfaces, and in crafting unique, clean and modern logos.",
  keywords: ["graphic design", "logo design", "logo", "design", "fiverr", "fiverr graphic design", "ui", "ux", "ux designer", "visual communication designer"],
  openGraph: {
    title: "Yuval Ishay",
    description: "I'm a graphic designer, specializes in designing stunning, easy to use user interfaces, and in crafting unique, clean and modern logos.",
    url: "https://yuvalishay.com",
    siteName: "Yuval Ishay",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yuval Ishay",
    description: "I'm a graphic designer, specializes in designing stunning, easy to use user interfaces, and in crafting unique, clean and modern logos.",
  },
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
        <script src="https://mcp.figma.com/mcp/html-to-design/capture.js" async />
      </head>
      <body className="antialiased">
        <AnimationProvider>
          <Header />
          <main className="min-h-screen">
            {children}
            <Analytics />
          </main>
          <Footer />
        </AnimationProvider>
      </body>
    </html>
  );
}
