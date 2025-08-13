import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import '../../styles/globals.css';
import { ThemeProvider } from '../../components/ThemeProvider';

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
      className={`${inter.variable} ${poppins.variable} min-h-fit`}
      suppressHydrationWarning
    >
      <body className='font-body transition-colors'>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
