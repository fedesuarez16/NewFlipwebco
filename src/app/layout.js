// RootLayout.js

import './globals.css'
import { Inter } from 'next/font/google'
import { NextSeo } from 'next-seo'; // Import NextSeo
import Header from '../components/Header';
import Head from 'next/head'; // Import Head from next/head


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Flipwebco - Desarrollo Software',
  description: 'Somos la convergencia entre el diseño, la tecnologia y la innovacion',
  type: 'website', // Specify the type of content (website, article, etc.)
  locale: 'es_ES', // Specify the locale (language and country)
  url: 'https://www.flipwebco.com/', // Specify the canonical URL of the page
  site_name: 'Flipwebco', // Specify the name of the website
  images: [
    {
      width: 1200, // Width of the image
      height: 630, // Height of the image
      alt: 'Flipwebco', // Alt text for the image
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
   
      
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
