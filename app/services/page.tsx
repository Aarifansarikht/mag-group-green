
"use client";

import React, { use } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/Primitives';
import { 
  Construction, 
  Warehouse, 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  Hammer,
  Factory
} from 'lucide-react';
import Link from 'next/link';
import { IMAGES } from '@/lib/constants';

const ServiceCategory = ({ title, desc, items, image, reverse }: any) => (
  <div className={`flex flex-col lg:flex-row gap-12 items-center py-20 border-b border-tech-200 last:border-0 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
      {/* Image Side */}
      <div className="w-full lg:w-1/2">
         <div className="relative h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden shadow-2xl shadow-ink/10 group">
            <img src={image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={title} />
            <div className="absolute inset-0 bg-cobalt/10 group-hover:bg-transparent transition-colors" />
         </div>
      </div>

      {/* Content Side */}
      <div className="w-full lg:w-1/2 px-4 md:px-8">
         <h3 className="font-display text-3xl md:text-4xl font-bold text-ink mb-6">{title}</h3>
         <p className="text-tech-500 text-lg mb-8 leading-relaxed">{desc}</p>
         
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {items.map((item: string, i: number) => (
                <div key={i} className="flex items-start gap-3">
                   <CheckCircle2 className="w-5 h-5 text-cobalt shrink-0 mt-0.5" />
                   <span className="text-sm font-bold text-ink uppercase tracking-wide">{item}</span>
                </div>
            ))}
         </div>

         <Link href="/contact">
            <Button size="lg" className="rounded-full px-10 bg-ink text-white hover:bg-cobalt shadow-lg">
               Consult Engineering
            </Button>
         </Link>
      </div>
  </div>
);

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-paper font-sans selection:bg-cobalt selection:text-white">
      <Header />
      
      <main className="flex-grow pt-20">
        {/* HERO */}
        <section className="py-24 md:py-32 bg-brand-950 text-white relative overflow-hidden">
           <div 
             className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-20 mix-blend-multiply" 
             style={{ backgroundImage: `url(${IMAGES.steel.beams_hero})` }}
           />
           <div className="container mx-auto px-6 relative z-10 text-center">
              <span className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 font-mono text-xs font-bold text-white uppercase tracking-widest mb-6">
                Fabrication Division
              </span>
              <h1 className="font-display text-5xl md:text-7xl font-bold uppercase italic mb-6 leading-none">
                Steel <span className="text-cobalt">Fabrication</span>
              </h1>
              <p className="text-stone-300 max-w-2xl mx-auto font-medium text-lg md:text-xl leading-relaxed">
                 From heavy structural frameworks to architectural steel details. Manufactured in our ISO-certified facilities in Doha and Dubai.
              </p>
           </div>
        </section>

        <section className="relative overflow-hidden">
           {/* Texture */}
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

           <div className="container mx-auto px-6 relative z-10">
               {/* 1. Structural Systems */}
               <ServiceCategory 
                  title="Structural Systems"
                  desc="We engineer and fabricate the primary skeletons for industrial and commercial buildings. Our heavy steel capabilities allow for large clear spans and high-load capacities."
                  image={IMAGES.steel.structure}
                  items={[
                    "Steel Structure Systems",
                    "Light Steel Systems",
                    "Prefabricated Building Systems",
                    "Industrial Facilities"
                  ]}
               />

               {/* 2. Warehousing & Logistics */}
               <ServiceCategory 
                  title="Warehousing & Logistics"
                  desc="Turnkey solutions for the logistics sector. We provide rapid-deployment structures and specialized storage environments."
                  image={IMAGES.steel.mezzanine}
                  reverse
                  items={[
                     "Logistics Warehouses",
                     "Tarpaulin-Covered Systems",
                     "Steel Mezzanines",
                     "Suspended Floors"
                  ]}
               />

               {/* 3. Infrastructure & Leisure */}
               <ServiceCategory 
                  title="Infrastructure & Leisure"
                  desc="Iconic steelworks for public spaces. Our engineering team handles complex geometries for bridges and stadium canopies."
                  image={IMAGES.misc.bridge}
                  items={[
                     "Steel Bridges",
                     "Stadiums",
                     "Retractable Glass Roofs",
                     "Villas"
                  ]}
               />

               {/* 4. Security & Safety */}
               <ServiceCategory 
                  title="Security & Safety Steel"
                  desc="Precision-manufactured barriers and closures for critical infrastructure protection."
                  image={IMAGES.services.security}
                  reverse
                  items={[
                     "Steel Transformer Doors",
                     "Steel Energy Doors",
                     "Steel Shutter Systems",
                     "Protective Railings"
                  ]}
               />
           </div>
        </section>

        {/* FACILITY STATS */}
        <section className="py-24 bg-ink text-white mt-12 relative overflow-hidden">
          {/* Dark Texture */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          
          <div className="container mx-auto px-6 text-center max-w-6xl relative z-10">
            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase mb-16">Production Capacity</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { label: "Workshop Area", value: "25,000 SQM", icon: Factory },
                { label: "Annual Output", value: "12,000 TONS", icon: Construction },
                { label: "Workforce", value: "350+ STAFF", icon: Hammer }
              ].map((stat, i) => (
                <div key={i} className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-sm relative group hover:bg-white/10 transition-colors">
                   <div className="mb-6 flex justify-center">
                     <stat.icon className="w-12 h-12 text-cobalt" />
                   </div>
                   <p className="text-4xl md:text-5xl font-display font-bold text-white mb-4 leading-none">{stat.value}</p>
                   <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
