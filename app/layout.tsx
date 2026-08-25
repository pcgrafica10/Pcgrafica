import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PC Gráfica | Diseño y gráfica automotriz',
  description: 'Diseño, ploteo y personalización vehicular con terminación profesional.',
  openGraph: {
    title: 'PC Gráfica | Tu vehículo. Tu identidad.',
    description: 'Diseño, ploteo y personalización vehicular con terminación profesional.',
    images: ['/hero.webp'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
