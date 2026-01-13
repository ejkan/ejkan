import './globals.css';
import type { Metadata } from 'next';
import { Inter, Lato, Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const lato = Lato({ weight: ['400', '700', '900'], subsets: ['latin'], variable: '--font-lato' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'ejkan_',
  description: 'Crafting digital experiences with a touch of delightful.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${lato.variable} ${playfair.variable} font-sans`}>{children}</body>
    </html>
  );
}
