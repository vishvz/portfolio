import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
    default: "Vishvajeetsinh Zala | Backend / Full-Stack Software Engineer",
    template: "%s | Vishvajeetsinh Zala",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  description:
    "Vishvajeetsinh Zala - Backend-focused software engineer building reliable systems for healthcare, IoT, and enterprise applications. Experienced in Node.js, NestJS, microservices, MongoDB, and PostgreSQL.",
  keywords: [
    "Vishvajeetsinh Zala",
    "Vishvajeet Zala",
    "Vishvajeet",
    "vishvz",
    "Backend Engineer",
    "Full-Stack Developer",
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
    title: "Vishvajeetsinh Zala | Backend / Full-Stack Software Engineer",
    description:
      "Vishvajeetsinh Zala - Backend-focused software engineer building reliable systems for healthcare, IoT, and enterprise applications.",
    siteName: "Vishvajeetsinh Zala Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vishvajeet - Backend / Full-Stack Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishvajeetsinh Zala | Backend / Full-Stack Software Engineer",
    description:
      "Vishvajeetsinh Zala - Backend-focused software engineer building reliable systems for healthcare, IoT, and enterprise applications.",
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
      </body>
    </html>
  );
}
