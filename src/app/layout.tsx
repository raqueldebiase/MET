import { ReactNode } from 'react';
import './globals.css';
import { Header } from './components/organisms/Header';
import { Footer } from './components/organisms/Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="pt-BR">
      <head>
        <title>Virtual Exposition MET</title>
        <meta name="description" content="Explore a Exposição Virtual interativa" />
      </head>
      <body className="relative">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
