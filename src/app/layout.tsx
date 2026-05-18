import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { CustomCursor } from "@/components/providers/CustomCursor";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://ambar.cafe";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ámbar — Specialty Coffee · Madrid",
    template: "%s · Ámbar",
  },
  description:
    "Cafetería de especialidad en el centro de Madrid. Café tostado en pequeños lotes, recetas precisas y un espacio diseñado para la pausa lenta.",
  keywords: [
    "cafetería especialidad madrid",
    "specialty coffee",
    "café tostado artesanal",
    "cafetería de diseño",
    "cold brew madrid",
    "ámbar café",
  ],
  authors: [{ name: "Ámbar Specialty Coffee" }],
  creator: "Ámbar",
  publisher: "Ámbar Specialty Coffee",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteUrl,
    siteName: "Ámbar Specialty Coffee",
    title: "Ámbar — Specialty Coffee · Madrid",
    description:
      "Café tostado en pequeños lotes, recetas precisas y un espacio diseñado para la pausa lenta. Madrid, desde 2014.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Ámbar — Specialty Coffee · Madrid",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ámbar — Specialty Coffee · Madrid",
    description:
      "Cafetería de especialidad en el centro de Madrid. Slow coffee, modern ritual.",
    images: [
      "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "food & beverage",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F4EFE6" },
    { media: "(prefers-color-scheme: dark)",  color: "#1C140D" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: "Ámbar Specialty Coffee",
  image: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1200&q=80",
  url: siteUrl,
  telephone: "+34 91 524 88 17",
  priceRange: "€€",
  servesCuisine: ["Specialty Coffee", "Bakery", "Desserts"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Calle de la Reina 17",
    addressLocality: "Madrid",
    postalCode: "28004",
    addressCountry: "ES",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.4168,
    longitude: -3.7038,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      opens: "07:30",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:30",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "09:00",
      closes: "18:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${inter.variable} ${mono.variable} antialiased`}
    >
      <body className="min-h-dvh bg-bone-100 text-espresso-900 font-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScrollProvider>
          {children}
          <CustomCursor />
          <div className="grain-overlay" aria-hidden />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
