
"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './Primitives';
import { ArrowRight, Plus } from 'lucide-react';
import Link from 'next/link';
import { IMAGES } from '@/lib/constants';

const slides = [
  {
    id: '01',
    category: 'Civil Engineering',
    title: 'Drainage\nInfrastructure',
    spec: 'EN124 Class F900',
    desc: 'High-capacity subterranean water management systems for urban mega-projects.',
    image: IMAGES.hero.civil
  },
  {
    id: '02',
    category: 'Renewable Tech',
    title: 'Autonomous\nSolar Arrays',
    spec: 'PV Efficiency > 22%',
    desc: 'Grid-independent illumination networks for smart city roadways.',
    image: IMAGES.hero.solar
  },
  {
    id: '03',
    category: 'Structural Fabrication',
    title: 'Heavy Steel\nFrameworks',
    spec: 'ASTM A572 Grade 50',
    desc: 'Precision-welded skeletal systems for high-rise and industrial applications.',
    image: IMAGES.hero.steel
  },
  {
    id: '04',
    category: 'Architectural Envelope',
    title: 'Facade &\nCladding',
    spec: 'Ventilated Terra Cotta',
    desc: 'Thermal-efficient exterior skins combining aesthetics with performance.',
    image: IMAGES.hero.facade
  }
];

const MotionDiv = motion.div as any;
const MotionImg = motion.img as any;
const MotionH1 = motion.h1 as any;

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative pt-24 md:pt-32 pb-8 md:pb-12 px-4 md:px-8 min-h-[90vh] md:min-h-screen w-full bg-paper flex flex-col justify-center overflow-hidden">
      
      {/* Background Texture: Technical Dot Matrix + Subtle Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px] opacity-40" />
      <div className="absolute inset-0 bg-hero-glow" />
      
      <div className="max-w-[1800px] mx-auto w-full flex flex-col lg:flex-row gap-4 md:gap-6 relative z-10 flex-grow lg:h-[80vh]">
        
        {/* LEFT: Info Card */}
        <div className="w-full lg:w-[40%] bg-glass backdrop-blur-xl rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 lg:p-16 shadow-2xl shadow-teal-900/5 border border-white/60 relative overflow-hidden z-20 flex flex-col justify-center min-h-[400px]">
          <div className="absolute top-0 right-0 p-4 md:p-8 opacity-5 pointer-events-none">
            <span className="font-display text-7xl md:text-9xl font-black text-cobalt">{slides[current].id}</span>
          </div>

          <AnimatePresence mode="wait">
            <MotionDiv 
              key={current}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-full px-3 py-1 md:px-4 md:py-1.5 mb-6 md:mb-8 w-fit border border-teal-100">
                 <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-cobalt animate-pulse" />
                 <span className="font-mono text-[9px] md:text-[10px] font-bold text-ink uppercase tracking-wider">
                   {slides[current].category}
                 </span>
              </div>

              <MotionH1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-ink leading-[0.9] mb-6 md:mb-8 tracking-tight">
                {slides[current].title}
              </MotionH1>

              <div className="bg-white/50 rounded-2xl md:rounded-3xl p-4 md:p-6 mb-6 md:mb-8 border border-white shadow-sm">
                 <p className="font-mono text-[10px] md:text-xs text-cobalt font-bold mb-2 uppercase flex items-center gap-2">
                    <span className="w-1 h-3 md:h-4 bg-cobalt rounded-full"></span> Tech Spec
                 </p>
                 <p className="text-lg md:text-xl text-ink font-bold mb-2">{slides[current].spec}</p>
                 <p className="text-slate-500 text-xs md:text-sm leading-relaxed">{slides[current].desc}</p>
              </div>

              <div className="flex flex-wrap gap-4 items-center">
                 <Link href="/products">
                    <Button className="h-12 md:h-14 rounded-full bg-ink text-white hover:bg-cobalt px-6 md:px-8 shadow-xl shadow-slate-300 text-xs md:text-sm">
                      View Specs <ArrowRight className="ml-2 w-3 h-3 md:w-4 md:h-4" />
                    </Button>
                 </Link>
                 <div className="flex items-center gap-2 px-2 md:px-4">
                    {slides.map((_, i) => (
                      <button 
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${current === i ? 'bg-cobalt scale-125 ring-2 md:ring-4 ring-teal-100' : 'bg-slate-300 hover:bg-slate-400'}`}
                      />
                    ))}
                 </div>
              </div>
            </MotionDiv>
          </AnimatePresence>
        </div>

        {/* RIGHT: Image Card */}
        <div className="w-full lg:w-[60%] relative bg-slate-200 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl shadow-ink/10 group border-4 border-white h-[300px] lg:h-auto">
           <AnimatePresence mode="wait">
              <MotionDiv
                key={current}
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                <MotionImg 
                  src={slides[current].image} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-cobalt/20 to-transparent mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent opacity-80" />
              </MotionDiv>
           </AnimatePresence>
           
           {/* Floating Badge */}
           <div className="absolute top-4 right-4 md:top-8 md:right-8 bg-white/90 backdrop-blur-md rounded-full px-4 py-2 md:px-6 md:py-3 shadow-lg flex items-center gap-2 md:gap-3 border border-white/50">
              <div className="bg-green-500 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full animate-pulse" />
              <span className="font-mono text-[10px] md:text-xs font-bold text-ink">ISO 9001:2015</span>
           </div>
        </div>

      </div>
    </div>
  );
}
