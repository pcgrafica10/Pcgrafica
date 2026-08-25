import type { Metadata } from 'next';
import './globals.css';

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
  return <html lang="es"><body>{children}</body></html>;
}
