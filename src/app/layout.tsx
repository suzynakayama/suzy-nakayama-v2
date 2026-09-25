import type { Metadata } from 'next';
import {
  Anton,
  Bagel_Fat_One,
  Caveat,
  JetBrains_Mono,
  Space_Grotesk,
} from 'next/font/google';
import '../../styles/globals.css';
import { ThemeProvider } from '../../components/ThemeProvider';
import ScrollToTop from '../../components/ScrollToTop';
import Script from 'next/script';

const bagel = Bagel_Fat_One({
  variable: '--ff-bagel',
  subsets: ['latin'],
  weight: '400',
});

const anton = Anton({
  variable: '--ff-anton',
  subsets: ['latin'],
  weight: '400',
});

const grotesk = Space_Grotesk({
  variable: '--ff-grotesk',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const mono = JetBrains_Mono({
  variable: '--ff-mono',
  subsets: ['latin'],
  weight: ['400', '600'],
});

const caveat = Caveat({
  variable: '--ff-caveat',
  subsets: ['latin'],
  weight: ['700'],
});

export const metadata: Metadata = {
  title: 'Suzy Nakayama - Software Engineer',
  description:
    'Portfolio of Suzy Nakayama, a Software Engineer specializing in Full-Stack Development',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html
      lang='en'
      className={`${bagel.variable} ${anton.variable} ${grotesk.variable} ${mono.variable} ${caveat.variable} dark min-h-fit scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-8QRY07PWNT`}
          strategy='afterInteractive'
        />
        <Script id='google-analytics' strategy='afterInteractive'>
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8QRY07PWNT');
            `}
        </Script>
      </head>
      <body className='font-body bg-ink text-mist antialiased'>
        <ThemeProvider>
          {children}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
