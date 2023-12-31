import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { MSWComponent } from './_component/MSWComponent';

type Props = {
  children: React.ReactNode;
};

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <MSWComponent />
      <body className={inter.className}>{children}</body>
    </html>
  );
}

// page 컴포넌트는 {children} 안으로 들어간다.
