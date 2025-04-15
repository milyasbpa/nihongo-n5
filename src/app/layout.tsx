import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";
import { ReactQueryProvider } from "@/core/utils/react_query";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bas Nihongo",
  description: "Generated for Bas Learn Japanese",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/general/bas.svg" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className={`${fredoka.variable} antialiased`}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
