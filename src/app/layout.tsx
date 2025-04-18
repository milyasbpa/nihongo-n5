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
        <link
          rel="icon"
          type="image/png"
          href="/icons/logo/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/icons/logo/favicon.svg" />
        <link rel="shortcut icon" href="/icons/logo/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/logo/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Bas JLPT" />
        <link rel="manifest" href="/icons/logo/site.webmanifest" />
      </head>

      <body className={`${fredoka.variable} antialiased`}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
