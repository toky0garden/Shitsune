import { seo } from "@/constants";
import "../assets/styles/globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const geistSans = localFont({
  src: [
    {
      path: "../assets/fonts/geist-sans/Geist-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../assets/fonts/geist-sans/Geist-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../assets/fonts/geist-sans/Geist-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/geist-sans/Geist-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/geist-sans/Geist-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/geist-sans/Geist-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/geist-sans/Geist-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/geist-sans/Geist-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../assets/fonts/geist-sans/Geist-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-geist-sans",
  display: "swap",
  preload: true,
});

const geistMono = localFont({
  src: [
    {
      path: "../assets/fonts/geist-mono/GeistMono-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../assets/fonts/geist-mono/GeistMono-UltraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../assets/fonts/geist-mono/GeistMono-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/geist-mono/GeistMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/geist-mono/GeistMono-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/geist-mono/GeistMono-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/geist-mono/GeistMono-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/geist-mono/GeistMono-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../assets/fonts/geist-mono/GeistMono-UltraBlack.woff2",
      weight: "950",
      style: "normal",
    },
  ],
  variable: "--font-geist-mono",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.svg",
  },
  title: {
    absolute: seo.name,
    template: `%s - ${seo.shortName}`,
  },
  description: seo.description,
  keywords: [...seo.keywords],
  metadataBase: new URL(seo.url),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
