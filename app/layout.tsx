import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://vishvajeet.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vishvajeetsinh Zala | Full-Stack Software Engineer",
    template: "%s | Vishvajeetsinh Zala",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  description:
    "Full-stack software engineer building reliable web apps for healthcare, IoT & enterprise. MERN stack, Next.js, NestJS, PostgreSQL.",
  keywords: [
    "Vishvajeetsinh Zala",
    "Vishvajeet Zala",
    "Vishvajeet",
    "vishvz",
    "Full-Stack Developer",
    "Full-Stack Engineer",
    "MERN Stack Developer",
    "Backend Engineer",
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    "Express.js",
    "TypeScript",
    "JavaScript",
    "MongoDB",
    "PostgreSQL",
    "Redis",
    "Microservices",
    "REST API",
    "Healthcare Software",
    "IoT Systems",
    "Enterprise Applications",
    "Software Engineer India",
    "Ahmedabad Developer",
  ],
  authors: [{ name: "Vishvajeetsinh Zala", url: siteUrl }],
  creator: "Vishvajeetsinh Zala",
  publisher: "Vishvajeetsinh Zala",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Vishvajeetsinh Zala | Full-Stack Software Engineer",
    description:
      "Vishvajeetsinh Zala - Full-stack software engineer building reliable systems for healthcare, IoT, and enterprise applications.",
    siteName: "Vishvajeetsinh Zala Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vishvajeet - Full-Stack Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishvajeetsinh Zala | Full-Stack Software Engineer",
    description:
      "Vishvajeetsinh Zala - Full-stack software engineer building reliable systems for healthcare, IoT, and enterprise applications.",
    images: ["/og-image.png"],
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
  verification: {
    google: "_es7LgcHeMw7Lb56dKpLGuSPzljXX3YcJ_tgppchATE",
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
