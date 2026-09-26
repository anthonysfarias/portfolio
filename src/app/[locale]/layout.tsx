import type { Metadata, Viewport } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import "../globals.css";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { MotionProvider } from "@/components/ui/MotionProvider";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { profile } from "@/data/profile";
import { htmlLang, isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { I18nProvider } from "@/i18n/useDictionary";

/** Display and text face. Variable, so the poster-sized weights come for free. */
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

/** Technical metadata only: labels, years, numerals, captions. */
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

/** Only /pt and /en exist; anything else is a 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: "#f4f1ea",
  colorScheme: "light",
  viewportFit: "cover",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const dict = getDictionary(locale);

  return {
    metadataBase: new URL(profile.siteUrl),
    title: dict.meta.title,
    description: dict.meta.description,
    applicationName: profile.name,
    authors: [{ name: profile.name, url: profile.sourceUrl }],
    creator: profile.name,
    keywords: [
      profile.name,
      "portfolio",
      "full stack developer",
      "React",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "São Paulo",
    ],
    alternates: {
      canonical: `/${locale}`,
      languages: {
        "pt-BR": "/pt",
        en: "/en",
        "x-default": "/pt",
      },
    },
    openGraph: {
      type: "website",
      url: `/${locale}`,
      siteName: profile.name,
      title: dict.meta.title,
      description: dict.meta.description,
      locale: htmlLang[locale].replace("-", "_"),
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const typedLocale: Locale = locale;
  const dict = getDictionary(typedLocale);

  return (
    <html lang={htmlLang[typedLocale]} className={`${archivo.variable} ${jetbrainsMono.variable}`}>
      <body className="relative min-h-screen antialiased">
        <I18nProvider locale={typedLocale} dict={dict}>
          <MotionProvider>
            <ScrollProgress />
            <a
              href="#home"
              className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-60 focus:bg-ink focus:px-4 focus:py-2 focus:font-mono focus:text-meta focus:uppercase focus:text-paper"
            >
              {dict.nav.skipToContent}
            </a>
            <Navbar />
            <main id="main">{children}</main>
            <Footer />
          </MotionProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
