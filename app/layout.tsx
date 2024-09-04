import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Providers } from "./providers";
import NavbarComponent from './components/Navbar';
import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import Footer from './components/Footer';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata = {
  title: 'Welcome | Okto Docs',
  icons: {
    icon: '/logo/okto-icon.png',
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body>
        <RootProvider theme={{
          enabled: true,
        }}>
          <NavbarComponent/>
          <Providers>
            <main className="flex-grow overflow-hidden">

              {children}
            </main>
          </Providers>
          <Footer />
        </RootProvider>
      </body>
    </html>
  );
}