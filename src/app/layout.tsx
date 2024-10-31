import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const consolaSans = localFont({
  src: "./fonts/consola.ttf",
  variable: "--font-consola-sans",
  weight: "100 900",
});
const consolaBold = localFont({
  src: "./fonts/consolab.ttf",
  variable: "--font-consola-bold",
  weight: "100 900",
});
const consolaItalic = localFont({
  src: "./fonts/consolai.ttf",
  variable: "--font-consola-italic",
  weight: "100 900",
});
const consolaZ = localFont({
  src: "./fonts/consolaz.ttf",
  variable: "--font-consola-z",
  weight: "100 900",
});

const courier = localFont({
  src: "./fonts/cour.ttf",
  variable: "--font-courier",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Nano Billionaires",
  description: "Nano Billionaires app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${courier.variable} ${consolaBold.variable} ${consolaItalic.variable} ${consolaSans.variable} ${consolaZ.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
