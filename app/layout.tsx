import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Every Dimension — Fractional CMO for Web3 and SaaS',
  description:
    'Senior GTM leadership for Web3 and B2B SaaS companies. Fractional CMO with a proven track record across LayerZero, Polyhedra, Tria, and People Data Labs.',
  metadataBase: new URL('https://everydimension.xyz'),
  openGraph: {
    title: 'Every Dimension — Fractional CMO for Web3 and SaaS',
    description:
      'Senior GTM leadership for Web3 and B2B SaaS companies. Fractional CMO with a proven track record across LayerZero, Polyhedra, Tria, and People Data Labs.',
    url: 'https://everydimension.xyz',
    siteName: 'Every Dimension',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Every Dimension — Fractional CMO for Web3 and SaaS',
    description:
      'Senior GTM leadership for Web3 and B2B SaaS companies. Fractional CMO with a proven track record across LayerZero, Polyhedra, Tria, and People Data Labs.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
