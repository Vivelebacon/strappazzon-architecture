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

export const metadata: Metadata = {
  title: "Alan Strappazzon | Architecte HES & Direction de travaux Genève",
  description: "Découvrez les réalisations d'Alan Strappazzon Architecture : villas d'architecte contemporaines, rénovations thermiques haute performance, aménagements de boutiques de luxe (Prada, Versace) et de bureaux d'exception à Genève.",
  keywords: "Alan Strappazzon, Architecte Genève, Architecture HES, direction de travaux, rénovation énergétique, villa contemporaine, Prada Genève, Versace Genève, Minergie, KSarchitecture",
  authors: [{ name: "Alan Strappazzon" }],
  openGraph: {
    title: "Alan Strappazzon | Architecte HES & Direction de travaux Genève",
    description: "Villas contemporaines, rénovations thermiques haute performance et aménagement de prestige à Genève.",
    url: "https://www.strappazzon-architecture.ch",
    siteName: "Alan Strappazzon Architecture",
    locale: "fr_CH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alan Strappazzon | Architecte HES Genève",
    description: "Villas contemporaines, rénovations thermiques haute performance et aménagement de prestige à Genève.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100" suppressHydrationWarning>{children}</body>
    </html>
  );
}
