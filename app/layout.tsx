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

const mightMakesRight = localFont({
  src: "../public/fonts/MightMakesRightBB.woff2",
  variable: "--font-might",
});

const akiraExpanded = localFont({
  src: "../public/fonts/AkiraExpanded.ttf",
  variable: "--font-akira",
});

const lumadFree = localFont({
  src: "../public/fonts/LumadFree.ttf",
  variable: "--font-lumad",
});

const quantaGrotesk = localFont({
  src: "../public/fonts/QuantaGroteskPro.woff2",
  variable: "--font-quanta",
});

const quantaGroteskBlackItalic = localFont({
  src: "../public/fonts/QuantaGroteskProBlackIta.woff2",
  variable: "--font-quanta-italic",
});

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
        url: "/images/IGNIZ.png",
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
    images: ["/images/IGNIZ.png"],
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${blackHanSans.variable} ${dmSans.variable} ${mightMakesRight.variable} ${akiraExpanded.variable} ${lumadFree.variable} ${quantaGrotesk.variable} ${quantaGroteskBlackItalic.variable} antialiased`}
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
