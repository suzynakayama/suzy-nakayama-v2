import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import '../../styles/globals.css';
import { ThemeProvider } from '../../components/ThemeProvider';
import Script from 'next/script';

const inter = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '500'],
});

const poppins = Poppins({
  variable: '--font-head',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
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
      className={`${inter.variable} ${poppins.variable} min-h-fit scroll-smooth`}
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
      <body className='font-body transition-colors'>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
