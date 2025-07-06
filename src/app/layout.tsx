import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import ScrollingText from '@/components/ScrollingText'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Mythcore Studios | Karmablood & Mythcore Jr',
  description:
    'Mythcore Studios crafts karmic myths, cinematic sagas, and magical journeys. Home of Karmablood and the Mythcore Jr series.',
  keywords: [
    'Mythcore Studios',
    'Karmablood',
    'Mythcore Jr',
    'Rudraneel Pratap',
    'Fantasy Books',
    'Anime Publishing',
    'Cinematic Novels',
    'Children’s Stories',
    'Mythical Worlds',
    'Book Studio',
  ],
  creator: 'Rudraneel Pratap',
  metadataBase: new URL('https://mythcorestudios.com'),
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Mythcore Studios',
    description: 'Where myths are born. Home of Karmablood & Mythcore Jr.',
    url: 'https://mythcorestudios.com',
    siteName: 'Mythcore Studios',
    type: 'website',
    images: [
      {
        url: '/og-banner.png',
        width: 1200,
        height: 630,
        alt: 'Mythcore Studios – Karmablood & Mythcore Jr',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mythcore Studios',
    description:
      'Where myths awaken. Karmablood. Mythcore Jr. Stories that never die.',
    creator: '@mythcorestudios',
    images: ['/og-banner.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* SEO & PWA Enhancements */}
        <link rel="canonical" href="https://mythcorestudios.com" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0f0f0f" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />

        {/* JSON-LD: Founder Schema for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Mythcore Studios',
              url: 'https://mythcorestudios.com',
              logo: 'https://mythcorestudios.com/apple-touch-icon.png',
              sameAs: [
                'https://instagram.com/mythcorestudios',
                'https://twitter.com/mythcorestudios',
              ],
              founder: {
                '@type': 'Person',
                name: 'Rudraneel Pratap',
                url: 'https://mythcorestudios.com',
                sameAs: [
                  'https://instagram.com/mythcorestudios',
                  'https://twitter.com/mythcorestudios',
                ],
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950 text-white overflow-x-hidden max-w-screen`}
      >
        <Navbar />
        <ScrollingText />
        {children}
      </body>
    </html>
  )
}
