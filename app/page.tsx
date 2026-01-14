
"use client";

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BannerSlider from '@/components/ui/BannerSlider';
import { Button } from '@/components/ui/Primitives';
import { motion } from 'framer-motion';
import { 
  Droplets, 
  Layers,
  ArrowRight,
  Construction,
  Anchor,
  CheckCircle2,
  ArrowUpRight,
  Factory,
  Award,
  Settings,
} from 'lucide-react';
import Link from 'next/link';
import { IMAGES } from '@/lib/constants';

// Scroll Animation Wrapper
const SectionReveal = ({ children, className }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-5%" }}
    transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

const ProductCard = ({ title, subtitle, image, link, index }: { title: string, subtitle: string, image: string, link: string, index: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group relative h-[400px] md:h-[500px] bg-white rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-cobalt/10 transition-all duration-500 border border-slate-100 hover:border-cobalt/20"
  >
      <div className="h-[60%] overflow-hidden relative">
         <img src={image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={title} />
         <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
      </div>
      
      <div className="h-[40%] p-6 md:p-8 flex flex-col justify-between relative bg-white group-hover:bg-slate-50/50 transition-colors">
         {/* Floating Icon */}
         <div className="absolute -top-6 md:-top-8 right-6 md:right-8 h-12 w-12 md:h-16 md:w-16 bg-gradient-to-br from-cobalt to-teal-800 text-white rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg shadow-cobalt/30 group-hover:-translate-y-2 transition-transform duration-300">
            <ArrowUpRight size={24} className="md:w-7 md:h-7" />
         </div>

         <div>
            <div className="flex items-center gap-3 mb-2 md:mb-3">
               <div className="h-[2px] w-6 bg-gradient-to-r from-cobalt to-emerald-400" />
               <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-400">Product Line</span>
            </div>
            <h3 className="text-xl md:text-2xl font-display font-bold text-slate-900 leading-none mb-2 md:mb-3 group-hover:text-cobalt transition-colors">{title}</h3>
            <p className="text-slate-500 text-xs md:text-sm line-clamp-2">{subtitle}</p>
         </div>
         
         <div className="flex items-center justify-between border-t border-slate-100 pt-4 md:pt-6 mt-2">
            <span className="text-[10px] md:text-xs font-bold uppercase text-slate-900 group-hover:text-cobalt transition-colors">View Specifications</span>
            <ArrowRight size={14} className="text-slate-300 group-hover:text-cobalt transform group-hover:translate-x-2 transition-all" />
         </div>
      </div>
  </motion.div>
);

const ServiceCard = ({ title, subtitle, specs, image, link, index }: { title: string, subtitle: string, specs: string[], image: string, link: string, index: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.15 }}
    viewport={{ once: true }}
    className="group relative h-[450px] md:h-[600px] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl shadow-black/50"
  >
      {/* Background Image with Zoom Effect */}
      <div className="absolute inset-0">
         <img src={image} className="w-full h-full object-cover opacity-70 group-hover:opacity-40 transition-all duration-700 group-hover:scale-110" alt={title} />
         <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent" />
         {/* Blueprint Overlay on Hover */}
         <div className="absolute inset-0 bg-[url('/images/patterns/graphy.png')] opacity-0 group-hover:opacity-20 transition-opacity duration-500 mix-blend-overlay" />
      </div>

      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end z-10">
         {/* Top Border Accent */}
         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cobalt to-emerald-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
         
         <div className="transform translate-y-4 md:translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
            {/* Tech Specs Reveal */}
            <div className="mb-4 md:mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 flex flex-wrap gap-2">
                {specs.map((s, i) => (
                    <span key={i} className="px-2 py-1 border border-cobalt/50 bg-cobalt/10 text-emerald-300 text-[9px] md:text-[10px] font-mono font-bold uppercase tracking-wider rounded backdrop-blur-md">
                        {s}
                    </span>
                ))}
            </div>

            <h3 className="text-2xl md:text-4xl font-display font-bold text-white mb-2 md:mb-3 leading-none group-hover:text-emerald-400 transition-colors">{title}</h3>
            <div className="h-0.5 w-12 bg-gradient-to-r from-cobalt to-emerald-400 mb-3 md:mb-4 group-hover:w-full transition-all duration-500" />
            <p className="text-slate-300 text-xs md:text-base mb-6 md:mb-8 line-clamp-2">{subtitle}</p>
            
            <Link href={link} className="inline-flex items-center justify-between w-full p-3 md:p-4 rounded-xl bg-white/5 border border-white/10 group-hover:bg-cobalt group-hover:border-cobalt transition-all group-hover:shadow-[0_0_20px_rgba(13,148,136,0.4)] backdrop-blur-sm">
               <span className="text-white font-bold uppercase text-[10px] md:text-xs tracking-widest">View System Details</span>
               <ArrowRight size={14} className="text-white transform group-hover:translate-x-2 transition-transform" />
            </Link>
         </div>
      </div>
  </motion.div>
);

const ProjectThumb = ({ title, location, image }: { title: string, location: string, image: string }) => (
    <div className="group relative aspect-[4/5] rounded-[1.5rem] md:rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
        <img src={image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={title} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
        <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
            <div className="h-1 w-8 bg-gradient-to-r from-cobalt to-emerald-400 mb-3 md:mb-4 group-hover:w-16 transition-all duration-300" />
            <h4 className="text-white font-display font-bold text-xl md:text-2xl leading-tight mb-1 md:mb-2">{title}</h4>
            <p className="text-slate-300 text-[10px] md:text-xs font-mono uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-cobalt"></span> {location}
            </p>
        </div>
    </div>
);

export default function PrecisionLanding() {
  return (
    <div className="flex min-h-screen flex-col bg-paper font-sans selection:bg-cobalt/30 selection:text-cobalt-900">
      <Header />
      
      <main className="flex-grow">
        {/* HERO */}
        <BannerSlider />

        {/* 1. CORPORATE INTRO */}
        <section className="py-16 md:py-32 px-4 relative overflow-hidden bg-gradient-to-b from-white to-slate-50">
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
           
           <div className="container mx-auto max-w-7xl relative z-10">
              <SectionReveal className="flex flex-col lg:flex-row items-end gap-10 lg:gap-16 mb-16 md:mb-24">
                  <div className="lg:w-3/5">
                      <div className="flex items-center gap-4 mb-4 md:mb-6">
                        <div className="h-[2px] w-8 md:w-12 bg-gradient-to-r from-cobalt to-emerald-400"></div>
                        <span className="text-cobalt font-mono text-[10px] md:text-xs font-bold uppercase tracking-widest">
                          Engineering Excellence Since 2004
                        </span>
                      </div>
                      <h2 className="font-display text-4xl sm:text-5xl md:text-8xl font-bold text-ink leading-[0.9] tracking-tight">
                        The Invisible <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cobalt via-teal-700 to-emerald-500">Framework.</span>
                      </h2>
                  </div>
                  <div className="lg:w-2/5 pb-0 md:pb-4">
                      <p className="text-base md:text-xl text-slate-600 leading-relaxed font-medium mb-8 md:mb-10 border-l-2 border-slate-200 pl-4 md:pl-6">
                        MAG Group engineers the essential skeletal and circulatory systems of the modern city. From unseen drainage networks to the steel bones of skyscrapers.
                      </p>
                      <div className="flex gap-4 pl-4 md:pl-6">
                         <div className="flex -space-x-3 md:-space-x-4">
                            {[1,2,3].map(i => (
                                <div key={i} className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden shadow-sm">
                                  <img src={`https://randomuser.me/api/portraits/men/${i*10}.jpg`} alt="Engineer" />
                                </div>
                            ))}
                         </div>
                         <div className="flex flex-col justify-center">
                            <span className="font-bold text-ink text-sm md:text-base">350+ Experts</span>
                            <span className="text-[10px] md:text-xs text-slate-500">Across 2 Countries</span>
                         </div>
                      </div>
                  </div>
              </SectionReveal>

              <SectionReveal className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  {[
                    { label: "Annual Output", val: "35k", unit: "Tons", icon: Layers },
                    { label: "Safety Rating", val: "100", unit: "%", icon: CheckCircle2 },
                    { label: "Certified", val: "ISO", unit: "9001", icon: Anchor },
                    { label: "Experience", val: "20+", unit: "Years", icon: Construction },
                  ].map((stat, i) => (
                    <div key={i} className="group bg-white p-5 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-slate-100 hover:border-cobalt/30 transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-cobalt/5 relative overflow-hidden">
                       <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                          <stat.icon className="w-12 h-12 md:w-16 md:h-16 text-cobalt" />
                       </div>
                       <div className="relative z-10">
                           <div className="mb-2 md:mb-4 text-slate-400 group-hover:text-cobalt transition-colors">
                              <stat.icon className="w-5 h-5 md:w-7 md:h-7" />
                           </div>
                           <p className="text-3xl md:text-5xl font-display font-bold text-ink mb-1 md:mb-2">
                             {stat.val}<span className="text-sm md:text-lg text-cobalt ml-1">{stat.unit}</span>
                           </p>
                           <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-500">{stat.label}</p>
                       </div>
                    </div>
                  ))}
              </SectionReveal>
           </div>
        </section>

        {/* 2. DIVISION 01: DRAINAGE PRODUCTS */}
        <section className="py-16 md:py-28 bg-slate-50 relative overflow-hidden">
           {/* Unique Texture: Radial Dots */}
           <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
           <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent" />
           <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#1e293b] to-transparent" />

           <div className="container mx-auto px-4 md:px-6 relative z-10">
              <SectionReveal className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
                   <div className="inline-flex items-center gap-2 bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-md shadow-slate-200/50 mb-6 md:mb-8 border border-slate-100">
                      <Droplets className="text-cobalt w-3 h-3 md:w-4 md:h-4" />
                      <span className="text-slate-500 font-mono text-[10px] md:text-xs font-bold uppercase tracking-widest">Division 01</span>
                   </div>
                   <h2 className="font-display text-4xl md:text-6xl font-bold text-slate-900 mb-4 md:mb-6">Drainage Products</h2>
                   <p className="text-slate-500 text-base md:text-lg leading-relaxed">
                     Precision engineered EN124 drainage systems designed for longevity. Our systems manage the flow of water in the region's most demanding environments.
                   </p>
              </SectionReveal>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                 <ProductCard 
                    index={0}
                    title="Linear Channels" 
                    subtitle="Minimalist stainless steel shower channels and slot drains that disappear into the floor finish."
                    image={IMAGES.products.floor_drain}
                    link="/products/shower-drains"
                 />
                 <ProductCard 
                    index={1}
                    title="Infrastructure Castings" 
                    subtitle="Heavy-duty ductile iron manhole covers for highways, ports, and municipal roads (D400-F900)."
                    image={IMAGES.products.manhole}
                    link="/products/manhole-covers"
                 />
                 <ProductCard 
                    index={2}
                    title="Hygienic Systems" 
                    subtitle="SS316 slot channels with odor-seal traps for commercial kitchens and food processing facilities."
                    image={IMAGES.products.kitchen}
                    link="/products/kitchen-channels"
                 />
                 <ProductCard 
                    index={3}
                    title="Roof & Balcony" 
                    subtitle="High-flow aluminum and cast iron rainwater outlets and scupper drains."
                    image={IMAGES.products.scupper}
                    link="/products/rainwater-outlets"
                 />
                 <ProductCard 
                    index={4}
                    title="Parking Drains" 
                    subtitle="Robust floor drains with sediment buckets designed for multi-story car parks."
                    image={IMAGES.products.parking}
                    link="/products/parking-drains"
                 />
                 <ProductCard 
                    index={5}
                    title="Gully Gratings" 
                    subtitle="Ductile iron hinged gratings for roadside stormwater capture."
                    image={IMAGES.products.grating}
                    link="/products/gully-gratings"
                 />
              </div>
              
              <div className="mt-12 md:mt-16 text-center">
                 <Link href="/products">
                    <Button variant="outline" className="rounded-full bg-white border-slate-200 text-slate-900 hover:border-cobalt hover:bg-cobalt hover:text-white px-8 md:px-10 h-12 md:h-14 text-xs md:text-sm shadow-xl shadow-slate-200 transition-all hover:scale-105">
                        View Full Catalog
                    </Button>
                 </Link>
              </div>
           </div>
        </section>

        {/* 3. DIVISION 02: STRUCTURAL STEEL */}
        <section className="py-16 md:py-28 bg-[#0F172A] relative overflow-hidden">
           {/* Industrial Blueprint Background */}
           <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(13,148,136,0.08),transparent_70%)]" />
           
           <div className="container mx-auto px-4 md:px-6 relative z-10">
              <SectionReveal className="flex flex-col md:flex-row justify-between items-end gap-6 md:gap-8 mb-12 md:mb-20 pb-8 border-b border-white/10">
                 <div className="max-w-2xl">
                   <div className="flex items-center gap-3 mb-4 md:mb-6">
                      <div className="px-3 py-1 bg-gradient-to-r from-cobalt to-teal-700 text-white rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(13,148,136,0.5)]">
                        Division 02
                      </div>
                      <span className="text-slate-400 font-mono text-[10px] md:text-xs uppercase tracking-widest border border-slate-700 px-3 py-1 rounded-full bg-slate-800/50">ISO 3834-2 Certified</span>
                   </div>
                   <h2 className="font-display text-4xl md:text-7xl font-bold text-white mb-4 md:mb-6">Structural Steel</h2>
                   <p className="text-slate-300 text-base md:text-lg leading-relaxed pl-4 md:pl-6 border-l-4 border-cobalt">
                     We operate one of the region's largest dual-hub fabrication networks. Our facilities in Qatar and UAE are equipped with automated CNC beam lines, blasting chambers, and painting booths.
                   </p>
                 </div>
                 
                 {/* Stats Box */}
                 <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] backdrop-blur-md hover:bg-white/10 transition-colors w-full md:w-auto">
                    <div className="flex items-baseline gap-2">
                        <span className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-cobalt to-emerald-400">35k</span>
                        <span className="text-xs md:text-sm font-bold text-white uppercase">Tons / Year</span>
                    </div>
                    <p className="text-[10px] md:text-xs text-slate-400 mt-2 uppercase tracking-wider">Total Production Capacity</p>
                 </div>
              </SectionReveal>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 <ServiceCard 
                    index={0}
                    title="Heavy Structures" 
                    subtitle="Primary skeletons for industrial and commercial buildings. Large clear spans and high-load capacities."
                    image={IMAGES.steel.beams_hero}
                    specs={["ASTM A572", "CNC Drilling", "Sub-Arc Welding"]}
                    link="/products/structural-beams"
                 />
                 <ServiceCard 
                    index={1}
                    title="Logistics & Storage" 
                    subtitle="Turnkey mezzanine floors and logistics storage systems designed for rapid deployment."
                    image={IMAGES.steel.mezzanine}
                    specs={["1000kg/m² Load", "Modular Design", "Fast Assembly"]}
                    link="/products/mezzanines"
                 />
                 <ServiceCard 
                    index={2}
                    title="Specialized Systems" 
                    subtitle="Complex geometries for stadium canopies, bridges, and architectural landmarks."
                    image={IMAGES.steel.stadium}
                    specs={["3D Modeling", "Tension Rods", "Complex Nodes"]}
                    link="/products/stadiums"
                 />
              </div>
              
              <div className="mt-12 md:mt-16 text-center">
                 <Link href="/services">
                    <Button variant="outline" className="border-slate-600 text-white hover:bg-white hover:text-black hover:border-white h-12 md:h-14 px-10 md:px-12 rounded-full backdrop-blur-sm bg-white/5 text-xs md:text-sm">
                       View Capabilities Matrix
                    </Button>
                 </Link>
              </div>
           </div>
        </section>

        {/* 4. NEW: MORE THAN A SUPPLIER - REDESIGNED */}
        <section className="py-16 md:py-28 bg-white relative overflow-hidden">
           {/* Texture: Subtle Grid */}
           <div className="absolute inset-0 bg-[linear-gradient(#e4e4e7_1px,transparent_1px),linear-gradient(to_right,#e4e4e7_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />

           <div className="container mx-auto px-4 md:px-6 relative z-10">
              
              {/* USP Content Block */}
              <SectionReveal className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center mb-16 md:mb-24">
                  <div className="order-2 lg:order-1 relative">
                      <div className="relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl shadow-teal-200 border-4 border-white h-[300px] md:h-auto">
                          <img src={IMAGES.misc.factory} alt="Factory Floor" className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-tr from-cobalt/30 to-transparent mix-blend-overlay" />
                      </div>
                      {/* Floating Badge */}
                      <div className="absolute -bottom-6 -right-4 md:-bottom-8 md:-right-8 bg-white p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] shadow-xl border border-slate-50 max-w-[200px] md:max-w-xs hidden sm:block">
                          <div className="flex items-center gap-3 mb-2">
                             <div className="p-2 bg-teal-50 rounded-xl text-teal-600">
                                <Settings className="w-5 h-5 md:w-6 md:h-6 animate-spin-slow" />
                             </div>
                             <span className="font-bold text-ink text-sm md:text-base">End-to-End Control</span>
                          </div>
                          <p className="text-[10px] md:text-xs text-slate-500 leading-relaxed">We control the entire value chain from design to fabrication, ensuring zero compromise on quality.</p>
                      </div>
                  </div>

                  <div className="order-1 lg:order-2">
                      <div className="inline-flex items-center gap-2 mb-4 md:mb-6 px-3 py-1.5 md:px-4 md:py-2 bg-teal-50 rounded-full border border-teal-100">
                          <Factory className="text-teal-600 w-3 h-3 md:w-4 md:h-4" />
                          <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-teal-700">Manufacturer, Not Just Supplier</span>
                      </div>
                      <h2 className="font-display text-4xl md:text-6xl font-bold text-ink mb-4 md:mb-6 leading-tight">
                          Total Control Over <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cobalt to-teal-800">Every Detail.</span>
                      </h2>
                      <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-6 md:mb-8">
                          Unlike trading companies that rely on third parties, MAG Group is a true manufacturer. We possess the engineering depth to customize products to your exact project requirements, whether it's a bespoke drain for a luxury villa or a 50m clear-span truss for an aircraft hangar.
                      </p>
                      
                      <div className="space-y-3 md:space-y-4 mb-8 md:mb-10">
                          {[
                              "Direct access to engineering team",
                              "Custom fabrication to project specs",
                              "Faster turnaround times",
                              "Full QA/QC transparency"
                          ].map((item, i) => (
                              <div key={i} className="flex items-center gap-3">
                                  <div className="h-5 w-5 md:h-6 md:w-6 rounded-full bg-green-100 flex items-center justify-center shadow-sm shrink-0">
                                      <CheckCircle2 size={12} className="text-green-600 md:w-3.5 md:h-3.5" />
                                  </div>
                                  <span className="font-bold text-slate-700 text-sm md:text-base">{item}</span>
                              </div>
                          ))}
                      </div>

                      <Link href="/contact">
                          <Button className="h-12 md:h-14 px-8 md:px-10 rounded-full bg-ink text-white hover:bg-cobalt shadow-xl hover:shadow-2xl transition-all text-xs md:text-sm">
                              Visit Our Facilities
                          </Button>
                      </Link>
                  </div>
              </SectionReveal>

              {/* PROJECT GALLERY */}
              <SectionReveal>
                  <div className="flex items-center justify-between mb-8 md:mb-12">
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-ink">Selected Projects</h3>
                      <Link href="/projects" className="hidden md:flex items-center gap-2 text-sm font-bold uppercase text-cobalt hover:text-ink transition-colors">
                          View Full Portfolio <ArrowRight size={16} />
                      </Link>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                      <ProjectThumb 
                          title="Lusail Stadium"
                          location="Doha, Qatar"
                          image={IMAGES.projects.lusail}
                      />
                      <ProjectThumb 
                          title="Museum of Future"
                          location="Dubai, UAE"
                          image={IMAGES.projects.museum}
                      />
                      <ProjectThumb 
                          title="Hamad Int. Airport"
                          location="Doha, Qatar"
                          image={IMAGES.projects.airport}
                      />
                      <ProjectThumb 
                          title="Yas Marina Circuit"
                          location="Abu Dhabi, UAE"
                          image={IMAGES.misc.qatar_office}
                      />
                  </div>
                  
                  <div className="mt-8 text-center md:hidden">
                      <Link href="/projects">
                          <Button variant="outline" className="w-full rounded-full">View Full Portfolio</Button>
                      </Link>
                  </div>
              </SectionReveal>
           </div>
        </section>

        {/* 5. CTA SECTION */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />
           
           <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
              <SectionReveal>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white border border-slate-100 shadow-sm rounded-full mb-6 md:mb-8">
                   <Award className="w-3 h-3 md:w-4 md:h-4 text-cobalt" />
                   <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-500">ISO 9001 • 14001 • 45001</span>
                </div>
                <h2 className="font-display text-5xl md:text-8xl font-bold mb-6 md:mb-8 text-ink tracking-tight">Ready to Build?</h2>
                <p className="text-base md:text-xl text-slate-500 mb-10 md:mb-12 max-w-2xl mx-auto">
                   Partner with the region's leading manufacturer for your next project. 
                   Get expert consultation for custom fabrication and drainage systems.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
                    <Link href="/contact">
                        <Button size="lg" className="bg-cobalt text-white hover:bg-teal-700 h-14 md:h-16 px-10 md:px-12 text-sm md:text-base rounded-full shadow-2xl shadow-teal-500/30 hover:-translate-y-1 transition-all w-full sm:w-auto">
                           Contact Us
                        </Button>
                    </Link>
                    <Link href="/about">
                        <Button variant="outline" size="lg" className="h-14 md:h-16 px-10 md:px-12 text-sm md:text-base rounded-full border-slate-200 bg-white hover:bg-slate-50 text-slate-700 w-full sm:w-auto">
                           Our Locations
                        </Button>
                    </Link>
                </div>
              </SectionReveal>
           </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
