
"use client";

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/ui/PageHeader';
import { ShieldCheck, Globe, Anchor } from 'lucide-react';
import { motion } from 'framer-motion';
import { IMAGES } from '@/lib/constants';

const Reveal = ({ children }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-paper font-sans selection:bg-cobalt selection:text-white">
      <Header />
      <main className="flex-grow">
        
        <PageHeader 
            title="Built on Precision"
            subtitle="Dual hubs in Doha and Dubai delivering world-class engineering precision. We are the region's premier partner for structural steel and advanced drainage systems."
            badge="Est. 2004"
            image={IMAGES.headers.about}
            breadcrumbs={[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' }
            ]}
        />

        {/* SPLIT HISTORY */}
        <section className="py-0">
           <div className="grid grid-cols-1 lg:grid-cols-2">
               <div className="bg-white p-16 lg:p-24 flex flex-col justify-center order-2 lg:order-1 relative overflow-hidden">
                   {/* Texture */}
                   <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                   
                   <div className="relative z-10">
                       <Reveal>
                           <h2 className="text-4xl font-display font-bold text-ink mb-8">The MAG Story</h2>
                           <p className="text-lg text-ink font-medium leading-relaxed mb-6">
                               From a single trading desk to a dual-hub industrial powerhouse.
                           </p>
                           <p className="text-tech-500 leading-relaxed mb-8">
                               We started in 2004 with a simple mission: provide the GCC with reliable drainage solutions. Today, MAG Group International operates fully owned manufacturing plants in Doha and Dubai, controlling every step of the fabrication process.
                           </p>
                           <div className="grid grid-cols-2 gap-8 border-t border-tech-100 pt-8">
                               <div>
                                   <span className="block text-4xl font-display font-bold text-cobalt mb-1">2004</span>
                                   <span className="text-xs font-bold uppercase tracking-wider text-tech-400">Founded Qatar</span>
                               </div>
                               <div>
                                   <span className="block text-4xl font-display font-bold text-cobalt mb-1">2012</span>
                                   <span className="text-xs font-bold uppercase tracking-wider text-tech-400">Expansion UAE</span>
                               </div>
                           </div>
                       </Reveal>
                   </div>
               </div>
               <div className="bg-tech-200 min-h-[500px] relative order-1 lg:order-2">
                   <img src={IMAGES.misc.history} className="absolute inset-0 w-full h-full object-cover" />
               </div>
           </div>
        </section>

        {/* HUBS SHOWCASE - Cards over Map */}
        <section className="py-32 bg-tech-50 relative overflow-hidden">
           {/* Texture */}
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-50" />

           <div className="container mx-auto px-6 relative z-10">
              <Reveal>
                  <div className="text-center mb-20">
                     <h2 className="text-4xl md:text-6xl font-display font-bold text-ink mb-6">Manufacturing Hubs</h2>
                     <p className="text-tech-500 max-w-2xl mx-auto">Strategic fabrication facilities serving the entire MENA region.</p>
                  </div>
              </Reveal>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {/* Qatar */}
                 <Reveal>
                     <div className="group bg-white p-10 rounded-[3rem] border border-tech-200 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                        <div className="flex justify-between items-start mb-12">
                           <div className="h-16 w-16 bg-cobalt rounded-2xl flex items-center justify-center text-white shadow-lg shadow-cobalt/20">
                             <Anchor size={32} />
                           </div>
                           <span className="px-4 py-1 bg-tech-50 rounded-full text-xs font-bold text-cobalt uppercase">Doha HQ</span>
                        </div>
                        <h3 className="text-4xl font-display font-bold text-ink mb-6">MAG General Trading</h3>
                        <p className="text-tech-500 font-medium mb-10 leading-relaxed">
                           Focusing on heavy casting, municipal drainage networks, and large-scale structural steel for stadium infrastructure.
                        </p>
                        <div className="w-full h-48 rounded-3xl overflow-hidden relative">
                             <img src={IMAGES.misc.qatar_office} className="w-full h-full object-cover" />
                        </div>
                     </div>
                 </Reveal>

                 {/* UAE */}
                 <Reveal>
                     <div className="group bg-white p-10 rounded-[3rem] border border-tech-200 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                        <div className="flex justify-between items-start mb-12">
                           <div className="h-16 w-16 bg-cobalt rounded-2xl flex items-center justify-center text-white shadow-lg shadow-cobalt/20">
                             <Globe size={32} />
                           </div>
                           <span className="px-4 py-1 bg-tech-50 rounded-full text-xs font-bold text-cobalt uppercase">Dubai HQ</span>
                        </div>
                        <h3 className="text-4xl font-display font-bold text-ink mb-6">DMAG Trading</h3>
                        <p className="text-tech-500 font-medium mb-10 leading-relaxed">
                           Specializing in architectural steel, logistics warehouse systems, and export-grade stainless steel drainage.
                        </p>
                        <div className="w-full h-48 rounded-3xl overflow-hidden relative">
                             <img src={IMAGES.misc.uae_office} className="w-full h-full object-cover" />
                        </div>
                     </div>
                 </Reveal>
              </div>
           </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
