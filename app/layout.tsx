import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://www.krc-facility-management.de";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "KRC Facility Management Berlin | Hausmeisterservice & Gebäudeverwaltung",
    template: "%s | KRC Facility Management Berlin",
  },
  description:
    "Ihr professioneller Hausmeisterservice in Berlin. KRC Facility Management bietet Gartenpflege, Entrümpelung, Elektrik, Gebäudereinigung und Gebäudewartung aus einer Hand.",
  keywords: [
    "Hausmeisterservice Berlin",
    "Facility Management Berlin",
    "Gebäudereinigung Berlin",
    "Gartenpflege Berlin",
    "Entrümpelung Berlin",
    "Hausmeister Berlin",
    "Gebäudewartung Berlin",
    "KRC Facility Management",
    "Hausmeisterdienst Berlin",
    "Gebäudemanagement Berlin",
  ],
  authors: [{ name: "KRC Facility Management", url: siteUrl }],
  creator: "KRC Facility Management",
  publisher: "KRC Facility Management",
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
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteUrl,
    siteName: "KRC Facility Management",
    title: "KRC Facility Management Berlin | Hausmeisterservice & Gebäudeverwaltung",
    description:
      "Professioneller Hausmeisterservice in Berlin. Gartenpflege, Entrümpelung, Elektrik, Gebäudereinigung und Gebäudewartung aus einer Hand.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "KRC Facility Management Berlin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KRC Facility Management Berlin",
    description: "Professioneller Hausmeisterservice in Berlin.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "Facility Management",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#business`,
      name: "KRC Facility Management",
      alternateName: "KRC FM",
      url: siteUrl,
      email: "krc.fm@outlook.de",
      description:
        "Professioneller Hausmeisterservice und Facility Management in Berlin. Wir bieten Gartenpflege, Entrümpelung, Elektrik, Gebäudereinigung und Gebäudewartung.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Berlin",
        addressCountry: "DE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "52.5200",
        longitude: "13.4050",
      },
      areaServed: {
        "@type": "City",
        name: "Berlin",
      },
      serviceType: [
        "Hausmeisterservice",
        "Gartenpflege",
        "Entrümpelung",
        "Elektrik",
        "Gebäudereinigung",
        "Gebäudewartung",
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "07:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "08:00",
          closes: "14:00",
        },
      ],
      priceRange: "€€",
      currenciesAccepted: "EUR",
      paymentAccepted: "Cash, Bank Transfer",
      image: `${siteUrl}/og-image.png`,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "KRC Facility Management",
      description: "Professioneller Hausmeisterservice in Berlin",
      publisher: { "@id": `${siteUrl}/#business` },
      inLanguage: "de-DE",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#16a34a" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-sans antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
