import { Geist, Geist_Mono, DM_Sans, Black_Han_Sans } from "next/font/google";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import localFont from 'next/font/local'
import Footer from "@/components/Footer";
import SmoothScrollWrapper from "@/components/SmoothScrollWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const blackHanSans = Black_Han_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-blackHanSans"
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: '--font-dmSans'
})

export const metadata: Metadata = {
  title: "IGNIZ 26 - SSET's Flagship Technical Fest",
  description: "IGNIZ 26 is the flagship technical fest of SSET, featuring a wide range of technical events, workshops, and competitions.",
  icons: {
    icon: "/svg/title.svg",
  },
  keywords: [
    "Igniz 26",
    "SSET",
    "SCMS School of Engineering and Technology",
    "Technical Fest",
    "Tech Fest",
    "Kerala",
    "Workshops",
    "Competitions",
    "Hackathons",
    "Cultural Events",
    "College Fest",
  ],
  openGraph: {
    title: "IGNIZ 26 - SSET's Flagship Technical Fest",
    description: "IGNIZ 26 is the flagship technical fest of SSET, featuring a wide range of technical events, workshops, and competitions.",
    siteName: "IGNIZ 26",
    images: [
      {
        url: "/images/IGNIZ1.png",
        width: 800,
        height: 600,
        alt: "Igniz 26 Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IGNIZ 26 - SSET's Flagship Technical Fest",
    description: "IGNIZ 26 is the flagship technical fest of SSET, featuring a wide range of technical events, workshops, and competitions.",
    images: ["/images/IGNIZ1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://db.onlinewebfonts.com/c/f9ced2222639ca75db5574cba95a22eb?family=Might+Makes+Right+BB"
        />
        <link
          rel="stylesheet"
          href="https://fonts.cdnfonts.com/css/akira-expanded"
        />
        <link
          rel="stylesheet"
          href="https://db.onlinewebfonts.com/c/16d5b3ff3b7d315066ef040db2c92106?family=Lumad+Free"
        />
        <link
          rel="stylesheet"
          href="https://db.onlinewebfonts.com/c/88ab5e9510bcfe27031d652730e5952f?family=Quanta+Grotesk+Pro"
        />
        <link
          rel="stylesheet"
          href="https://db.onlinewebfonts.com/c/0527d4e74f677604a98934e82e1c522e?family=Quanta+Grotesk+Pro+Black+Ita"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${blackHanSans.variable} ${dmSans.variable} antialiased`}
        suppressHydrationWarning
      >
        <SmoothScrollWrapper>
          {children}
          <Footer />
        </SmoothScrollWrapper>
      </body>
    </html>
  );
}
