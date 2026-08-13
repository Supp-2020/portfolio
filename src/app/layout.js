import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://supreet-pradhan.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Supreet Pradhan | Software Developer Portfolio",
    template: "%s | Supreet Pradhan",
  },
  description:
    "Supreet Pradhan is a software developer building high-performing, user-focused web experiences with React, Next.js, TypeScript, and modern product engineering.",
  applicationName: "Supreet Pradhan Portfolio",
  authors: [{ name: "Supreet Pradhan" }],
  creator: "Supreet Pradhan",
  publisher: "Supreet Pradhan",
  keywords: [
    "Supreet Pradhan",
    "Software Developer Portfolio",
    "React Developer",
    "Next.js Developer",
    "Frontend Engineer",
    "Full Stack Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Bangalore Software Developer",
    "Web Developer India",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Supreet Pradhan | Software Developer Portfolio",
    description:
      "Explore frontend engineering work, product features, and creative UI experiences from a software developer focused on fast, polished digital products.",
    url: "/",
    siteName: "Supreet Pradhan Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/codepen-1.png",
        width: 1200,
        height: 630,
        alt: "Supreet Pradhan portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Supreet Pradhan | Software Developer Portfolio",
    description:
      "Software developer crafting modern web experiences with React, Next.js, and user-focused product engineering.",
    images: ["/images/codepen-1.png"],
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
  icons: {
    icon: "/assets/scribbles-scribbles-32.svg",
    shortcut: "/assets/scribbles-scribbles-32.svg",
    apple: "/assets/scribbles-scribbles-32.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
