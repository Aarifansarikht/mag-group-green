
"use client";

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/ui/PageHeader';
import { PRODUCTS } from '@/lib/data';
import { Button } from '@/components/ui/Primitives';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Download,
  Box,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { IMAGES } from '@/lib/constants';

const ProductCard = ({ item }: { item: any }) => (
  <Link href={`/products/${item.id}`}>
      <motion.div 
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="group relative rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-500 aspect-[4/5] cursor-pointer border border-tech-100"
      >
        <img src={item.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={item.title} />
        
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
        
        <div className="absolute top-4 right-4">
          <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              {item.category}
          </span>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <p className="text-emerald-300 text-xs font-mono font-bold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{item.spec}</p>
          <h3 className="text-white font-display text-2xl font-bold mb-4">{item.title}</h3>
          
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
            <Button size="sm" className="bg-white text-ink hover:bg-tech-100 rounded-xl h-10 px-4 text-[10px]">
                View Specs
            </Button>
          </div>
        </div>
      </motion.div>
  </Link>
);

export default function SolutionsPage() {
  const [activeTab, setActiveTab] = useState<'drainage' | 'steel'>('drainage');

  // Filter products based on categories in data
  const drainageProducts = PRODUCTS.filter(p => !['Structural Beams', 'Mezzanines', 'Stadium Canopies'].includes(p.title));
  const steelProducts = PRODUCTS.filter(p => ['Structural Beams', 'Mezzanines', 'Stadium Canopies'].includes(p.title));
  
  const displayProducts = activeTab === 'drainage' ? drainageProducts : steelProducts;

  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink font-sans selection:bg-cobalt selection:text-white">
      <Header />
      
      <main className="flex-grow">
        <PageHeader 
            title="Engineered Solutions"
            subtitle="Explore our comprehensive range of EN124 drainage systems and structural steel capabilities."
            badge="Product Catalog"
            image={IMAGES.headers.products}
            breadcrumbs={[
                { label: 'Home', href: '/' },
                { label: 'Solutions', href: '/products' }
            ]}
        />

        {/* Tab Switcher */}
        <div className="container mx-auto px-6 -mt-8 relative z-20 flex justify-center">
             <div className="inline-flex bg-white p-2 rounded-full border border-tech-200 shadow-xl">
                <button 
                  onClick={() => setActiveTab('drainage')}
                  className={cn(
                      "px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300",
                      activeTab === 'drainage' ? "bg-cobalt text-white shadow-lg" : "text-tech-500 hover:text-ink"
                  )}
                >
                  Drainage Systems
                </button>
                <button 
                  onClick={() => setActiveTab('steel')}
                  className={cn(
                      "px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300",
                      activeTab === 'steel' ? "bg-cobalt text-white shadow-lg" : "text-tech-500 hover:text-ink"
                  )}
                >
                  Steel Fabrication
                </button>
             </div>
        </div>

        {/* GALLERY SECTION */}
        <section className="py-24 bg-paper min-h-screen relative overflow-hidden">
             {/* Texture */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

            <div className="container mx-auto px-6 relative z-10">
                <AnimatePresence mode="wait">
                   <motion.div 
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
                            <div>
                                <h3 className="text-3xl font-display font-bold">{activeTab === 'drainage' ? 'Drainage Collection' : 'Fabrication Capabilities'}</h3>
                                <p className="text-tech-500 mt-2">Showing {displayProducts.length} premium solutions</p>
                            </div>
                            <Button variant="outline" className="rounded-full border-tech-300 bg-white">
                                <Download size={16} className="mr-2" /> Download Catalog
                            </Button>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {displayProducts.map((item) => (
                                <ProductCard key={item.id} item={item} />
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>

        {/* Technical Specs Footer */}
        <section className="py-24 bg-white border-t border-tech-100 relative">
             {/* Texture */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-30" />

            <div className="container mx-auto px-6 relative z-10">
               <div className="flex flex-col md:flex-row gap-16">
                  <div className="md:w-1/3">
                     <h3 className="font-display text-4xl font-bold mb-6">Technical <br/>Specifications</h3>
                     <p className="text-tech-500 mb-8 leading-relaxed">
                        We adhere to strict international standards including EN124, ASTM A572, and ISO 9001.
                     </p>
                     <Link href="/contact">
                       <Button className="rounded-full h-14 px-8 bg-ink text-white">Request Submittals</Button>
                     </Link>
                  </div>
                  
                  <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { title: "Load Classes", desc: "A15 to F900 testing data." },
                        { title: "Material Grades", desc: "SS304, SS316, Ductile Iron." },
                        { title: "Flow Rates", desc: "Hydraulic calculation charts." },
                        { title: "Installation", desc: "Site method statements." }
                      ].map((spec, i) => (
                        <div key={i} className="p-6 rounded-3xl bg-tech-50 border border-tech-100 hover:border-cobalt/30 transition-colors bg-white/50 backdrop-blur-sm">
                            <Box className="text-cobalt mb-4" />
                            <h4 className="font-bold text-ink mb-2">{spec.title}</h4>
                            <p className="text-sm text-tech-500">{spec.desc}</p>
                        </div>
                      ))}
                  </div>
               </div>
            </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
