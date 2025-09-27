import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Salim Aissaoui - Computer Engineering Student",
    template: "%s | Salim Aissaoui"
  },
  description: "Computer Engineering student at University of Ottawa specializing in software development, network automation, and machine learning.",
  keywords: ["Computer Engineering", "Software Development", "Network Automation", "Machine Learning", "AI", "Full Stack"],
  authors: [{ name: "Salim Aissaoui", url: "https://github.com/salimaissaoui" }],
  creator: "Salim Aissaoui",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://salimaissaoui.com",
    title: "Salim Aissaoui - Computer Engineering Student",
    description: "Computer Engineering student at University of Ottawa specializing in software development, network automation, and machine learning.",
    siteName: "Salim Aissaoui Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salim Aissaoui - Computer Engineering Student",
    description: "Computer Engineering student at University of Ottawa specializing in software development, network automation, and machine learning.",
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
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          defaultTheme="system"
          storageKey="portfolio-theme"
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}