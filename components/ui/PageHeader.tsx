
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  badge?: string;
  image: string;
  breadcrumbs: { label: string; href: string }[];
  dark?: boolean;
}

export default function PageHeader({ 
  title, 
  subtitle, 
  badge, 
  image, 
  breadcrumbs,
  dark = true
}: PageHeaderProps) {
  return (
    <section className={cn(
      "relative pt-32 pb-16 md:pt-48 md:pb-32 px-4 overflow-hidden min-h-[40vh] md:min-h-[50vh] flex flex-col justify-center",
      dark ? "bg-ink text-white" : "bg-paper text-ink"
    )}>
      {/* Background Image & Texture */}
      <div className="absolute inset-0 z-0">
         <img 
            src={image} 
            className={cn(
              "w-full h-full object-cover transition-transform duration-[20s] ease-linear scale-100 hover:scale-110",
              dark ? "opacity-30" : "opacity-10"
            )} 
            alt="Hero Background" 
         />
         <div className={cn(
           "absolute inset-0",
           dark 
             ? "bg-gradient-to-t from-ink via-ink/60 to-ink/40 mix-blend-multiply" 
             : "bg-gradient-to-t from-paper via-transparent to-paper/80"
         )} />
         <div className="absolute inset-0 bg-gradient-to-r from-cobalt/20 to-transparent mix-blend-overlay" />
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-5xl">
         {/* Breadcrumbs */}
         <motion.div 
           initial={{ opacity: 0, y: -10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.1 }}
           className="flex flex-wrap items-center justify-center gap-1.5 md:gap-2 mb-6 md:mb-8 text-[10px] md:text-xs font-mono font-bold uppercase tracking-widest opacity-60"
         >
            {breadcrumbs.map((crumb, i) => (
              <React.Fragment key={i}>
                <Link href={crumb.href} className="hover:text-emerald-400 transition-colors">
                  {crumb.label}
                </Link>
                {i < breadcrumbs.length - 1 && <ChevronRight size={10} className="md:w-3 md:h-3" />}
              </React.Fragment>
            ))}
         </motion.div>

         <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8 }}
         >
            {badge && (
              <span className={cn(
                "inline-block px-3 py-1 rounded-full border font-mono text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 md:mb-6 backdrop-blur-sm shadow-lg",
                dark ? "bg-white/10 border-white/20 text-emerald-300" : "bg-cobalt/10 border-cobalt/20 text-cobalt"
              )}>
                  {badge}
              </span>
            )}
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-display font-bold uppercase mb-4 md:mb-6 leading-[0.9] tracking-tighter drop-shadow-2xl">
                {title.split(' ').map((word, i) => (
                  <span key={i} className={i % 2 !== 0 ? "text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400" : ""}>{word} </span>
                ))}
            </h1>
            <p className={cn(
              "text-base md:text-xl max-w-2xl mx-auto font-medium leading-relaxed",
              dark ? "text-slate-300" : "text-tech-500"
            )}>
              {subtitle}
            </p>
         </motion.div>
      </div>
    </section>
  );
}
