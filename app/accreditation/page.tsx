
"use client";

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/ui/PageHeader';
import { Button } from '@/components/ui/Primitives';
import { ShieldCheck, Award, CheckCircle2, FileCheck, Microscope, FileText, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { IMAGES } from '@/lib/constants';

const CertificateItem = ({ title, code, issuer, delay }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="group relative bg-white p-8 rounded-[2rem] border border-tech-200 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden"
  >
      <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100 transition-opacity duration-500">
         <ArrowUpRight size={24} className="text-cobalt" />
      </div>
      
      <div className="flex items-start justify-between mb-8">
          <div className="h-14 w-14 bg-tech-50 rounded-2xl flex items-center justify-center text-cobalt group-hover:bg-cobalt group-hover:text-white transition-colors">
             <FileCheck size={28} />
          </div>
          <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-[10px] font-bold uppercase tracking-wide">
             Active
          </div>
      </div>

      <div className="mb-6">
         <p className="font-mono text-xs font-bold text-tech-400 uppercase tracking-widest mb-2">{code}</p>
         <h3 className="text-xl font-bold text-ink group-hover:text-cobalt transition-colors">{title}</h3>
      </div>

      <div className="pt-6 border-t border-tech-100 flex items-center gap-3">
         <div className="h-8 w-8 rounded-full bg-tech-100" /> {/* Issuer Logo Placeholder */}
         <div>
            <p className="text-xs font-bold text-ink">Issued by {issuer}</p>
            <p className="text-[10px] text-tech-500">Valid until 2025</p>
         </div>
      </div>
  </motion.div>
);

export default function AccreditationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-paper font-sans selection:bg-cobalt selection:text-white">
      <Header />
      <main className="flex-grow">
        
        <PageHeader 
            title="Quality & Safety"
            subtitle="Our commitment to global engineering standards is backed by rigorous third-party auditing."
            badge="ISO Certified"
            image={IMAGES.headers.accreditation}
            breadcrumbs={[
                { label: 'Home', href: '/' },
                { label: 'Accreditation', href: '/accreditation' }
            ]}
        />

        <section className="py-24 relative overflow-hidden">
          {/* Texture */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

          <div className="container mx-auto px-6 relative z-10">
            
            {/* Intro Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
                {[
                  { label: "ISO Certified", value: "9001" },
                  { label: "Safety First", value: "45001" },
                  { label: "Environment", value: "14001" },
                  { label: "Compliance", value: "100%" }
                ].map((stat, i) => (
                  <motion.div 
                     key={i} 
                     initial={{ opacity: 0, scale: 0.9 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 0.4, delay: i * 0.1 }}
                     className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-tech-100 shadow-sm"
                  >
                      <p className="text-5xl font-display font-bold text-cobalt mb-3">{stat.value}</p>
                      <p className="text-xs font-bold text-tech-500 uppercase tracking-widest">{stat.label}</p>
                  </motion.div>
                ))}
            </div>

            <div className="flex flex-col md:flex-row items-end justify-between mb-12">
               <div>
                  <h2 className="text-4xl font-display font-bold text-ink mb-4">Certifications</h2>
                  <p className="text-tech-500 max-w-xl">We maintain active certifications with world-leading inspection bodies to ensure every product meets international safety standards.</p>
               </div>
               <Button variant="outline" className="rounded-full mt-6 md:mt-0 bg-white">Download All PDF</Button>
            </div>

            {/* Grid of Certs */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
               <CertificateItem title="Quality Management System" code="ISO 9001:2015" issuer="Bureau Veritas" delay={0.1} />
               <CertificateItem title="Environmental Management" code="ISO 14001:2015" issuer="Bureau Veritas" delay={0.2} />
               <CertificateItem title="Occupational Health" code="ISO 45001:2018" issuer="Bureau Veritas" delay={0.3} />
               <CertificateItem title="Gully Tops & Manholes" code="EN 124-2:2015" issuer="BSI Kitemark" delay={0.4} />
               <CertificateItem title="Structural Steelwork" code="EN 1090-2" issuer="TUV Nord" delay={0.5} />
               <CertificateItem title="Stainless Steel Grade" code="ASTM A240" issuer="SGS" delay={0.6} />
            </div>

            {/* Testing Lab Feature - Dark Section */}
            <div className="bg-ink rounded-[3rem] p-10 md:p-20 text-white overflow-hidden relative shadow-2xl">
              <div className="absolute inset-0 bg-tech-grid opacity-10" />
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cobalt/20 to-transparent" />
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                 <div className="space-y-10">
                    <div className="inline-flex items-center gap-3 text-cobalt bg-white/10 px-4 py-2 rounded-full w-fit backdrop-blur-md border border-white/10">
                       <Microscope size={20} />
                       <span className="text-xs font-bold uppercase tracking-wider">In-House Lab</span>
                    </div>
                    
                    <div>
                        <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">Rigorous <br/><span className="text-cobalt">Lab Testing.</span></h2>
                        <p className="text-stone-300 text-lg leading-relaxed max-w-lg">
                        Every product leaving our facility undergoes load-bearing and stress testing. Our manhole covers are rated from A15 to F900, ensuring they exceed project load requirements.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                       {[
                         "100% Traceability",
                         "Anti-Corrosion",
                         "Destructive Tests",
                         "Spectral Analysis"
                       ].map((item, i) => (
                         <div key={i} className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                            <div className="h-2 w-2 rounded-full bg-cobalt" />
                            <span className="font-bold text-white text-sm uppercase tracking-wide">{item}</span>
                         </div>
                       ))}
                    </div>
                 </div>
                 
                 <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 group">
                    <img src={IMAGES.misc.lab} className="w-full h-full object-cover transition-all duration-700" alt="Lab Testing" />
                    <div className="absolute bottom-8 left-8 bg-black/50 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10">
                        <p className="text-cobalt font-bold text-xs uppercase mb-1">Live Status</p>
                        <p className="text-white font-mono text-sm">Testing Batch #4092A</p>
                    </div>
                 </div>
              </div>
           </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
