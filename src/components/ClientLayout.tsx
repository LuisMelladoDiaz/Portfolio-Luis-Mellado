'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/context/LanguageContext';
import LanguageSwitch from '@/components/LanguageSwitch';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
      <Navbar />
      <div className="flex-grow flex justify-center w-full">
        <div className="w-[60%] max-w-5xl px-4 py-20">
          {children}
        </div>
      </div>
      <Footer />
      <div className="fixed bottom-4 right-4">
        <LanguageSwitch />
      </div>
    </LanguageProvider>
  );
} 