import type { Metadata } from 'next';
import { Sora, Figtree, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ToastProvider } from '@/components/ui/ToastProvider';

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sora',
  display: 'swap',
});

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-figtree',
  display: 'swap',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-plex-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.amnetdigital.com'),
  title: {
    default: 'Amnet Digital — From Enterprise Data to Autonomous Business Outcomes',
    template: '%s | Amnet Digital',
  },
  description:
    'Amnet Digital builds the AI enterprise: Amnet Data Foundry, Amnet Agent Foundry and AIDLC — trusted data, intelligent agents, and engineered AI delivery.',
  icons: { icon: '/assets/img/favicon.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${figtree.variable} ${plexMono.variable}`}>
      <body>
        <a className="absolute -left-[9999px]" href="#app">
          Skip to content
        </a>
        <ToastProvider>
          <Header />
          <main id="app">{children}</main>
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}
