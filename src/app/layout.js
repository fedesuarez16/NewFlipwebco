// RootLayout.js

import './globals.css'
import { Inter } from 'next/font/google'
import { NextSeo } from 'next-seo'; // Import NextSeo
import Header from '../components/Header';
import Head from 'next/head'; // Import Head from next/head


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Flipwebco',
  description: 'Diseño y desarrollo Software',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Move NextSeo component here */}
        <NextSeo
          title="Desarrollo Software - Flipwebco"
          description="Somos la reinvención"
          openGraph={{
            title: 'Desarrollo de Software ',
            description: 'Diseño y desarrollo de productos digitales para empresas',
            images: [
              {
                url: 'URL de la imagen Open Graph',
                width: 1200,
                height: 630,
                alt: 'Descripción de la imagen',
              },
            ],
            type: 'website',
            url: 'https://www.flipwebco.com/',
            site_name: 'Flipwebco',
          }}
        />
      </Head>
      
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
