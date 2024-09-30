import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter ,IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ibm-plex-serif'
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "clearCash",
  description: "ClearCash is a simple and accessible banking platform designed to meet the financial needs of everyone.",
  icons: 
  {
    icon:'/icons/logo.svg'
    }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ibmPlexSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
