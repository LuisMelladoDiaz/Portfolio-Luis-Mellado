import type { Metadata } from 'next';
import { Press_Start_2P } from 'next/font/google';
import './globals.css';
import ClientLayout from '@/components/ClientLayout';

const pressStart2P = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pixel',
});

export const metadata: Metadata = {
  title: 'Luis Mellado | Game Dev Portfolio',
  description: 'Game Developer and Software Engineer Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={pressStart2P.variable}>
      <body className="flex flex-col min-h-screen bg-game-primary text-white">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
} 