
"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Primitives';
import { AlertTriangle, Home } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-paper font-sans">
      <Header />
      
      <main className="flex-grow flex items-center justify-center relative overflow-hidden">
        {/* Technical Grid Background */}
        <div className="absolute inset-0 bg-tech-grid opacity-50" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-paper" />

        <div className="text-center relative z-10 px-6 max-w-2xl">
           <div className="inline-flex items-center justify-center p-6 bg-red-50 rounded-full mb-8 animate-pulse-slow">
              <AlertTriangle className="w-12 h-12 text-red-500" />
           </div>
           
           <h1 className="text-[150px] md:text-[200px] font-display font-black text-ink leading-none opacity-5 select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              404
           </h1>
           
           <h2 className="text-4xl md:text-6xl font-display font-bold text-ink mb-6 relative">
              Structural Failure.
           </h2>
           
           <p className="text-xl text-tech-500 mb-10 leading-relaxed">
              The page you are looking for has been moved, deleted, or never existed. 
              Our engineers have been notified of this anomaly.
           </p>
           
           <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/">
                 <Button className="h-14 px-8 bg-ink text-white hover:bg-cobalt shadow-xl rounded-full">
                    <Home className="mr-2 w-4 h-4" /> Return to Base
                 </Button>
              </Link>
              <Link href="/contact">
                 <Button variant="outline" className="h-14 px-8 border-tech-300 rounded-full">
                    Report Issue
                 </Button>
              </Link>
           </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
