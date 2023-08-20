import './globals.css'
import Footer from './components/footer'
import type { Metadata } from 'next'
import { Hanken_Grotesk } from 'next/font/google'

const hankenGrotesk = Hanken_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Audiofeud | The sound of the bay',
  description: 'Lorem ipsum dolor sit amet',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="<generated>" />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" />
      </head>
      <body className={hankenGrotesk.className}>
        <div className="relative overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  )
}
