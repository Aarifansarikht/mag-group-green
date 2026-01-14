
"use client";

import React, { use } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/ui/PageHeader';
import { getProduct, PRODUCTS } from '@/lib/data';
import { Button } from '@/components/ui/Primitives';
import { Check, Download, ArrowRight, Ruler, Weight, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = getProduct(id);

  if (!product) return <div>Product not found</div>;

  const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen bg-paper font-sans selection:bg-cobalt selection:text-white">
      <Header />
      <main className="flex-grow">
        
        {/* Standard Breadcrumb Header */}
        <PageHeader 
           title={product.title}
           subtitle={product.category}
           badge="Technical Spec"
           image={product.image}
           breadcrumbs={[
             { label: 'Home', href: '/' },
             { label: 'Solutions', href: '/products' },
             { label: product.title, href: '#' }
           ]}
        />

        {/* Content Section */}
        <section className="py-24 relative overflow-hidden">
           {/* Texture */}
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

           <div className="container mx-auto px-6 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                 
                 {/* Left: Image Gallery */}
                 <motion.div 
                   initial={{ opacity: 0, x: -50 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.6 }}
                   className="space-y-6"
                 >
                    <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl relative group">
                        <img src={product.image} className="w-full h-full object-cover" alt={product.title} />
                        <div className="absolute inset-0 bg-cobalt/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="aspect-square rounded-2xl overflow-hidden bg-tech-100 border border-tech-200">
                             <img src={product.image} className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity cursor-pointer" />
                          </div>
                        ))}
                    </div>
                 </motion.div>

                 {/* Right: Details */}
                 <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                 >
                    <h2 className="text-4xl font-display font-bold text-ink mb-6">{product.title}</h2>
                    <p className="text-lg text-tech-500 leading-relaxed mb-8">
                       {product.description}
                    </p>

                    <div className="bg-white p-8 rounded-3xl border border-tech-200 shadow-lg mb-8 relative overflow-hidden">
                        {/* Inner Texture */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px] opacity-30" />
                        
                        <div className="relative z-10">
                            <h3 className="font-mono text-xs font-bold text-cobalt uppercase tracking-widest mb-6">Key Features</h3>
                            <ul className="space-y-4">
                               {product.features.map((feature, i) => (
                                 <li key={i} className="flex items-center gap-3">
                                    <div className="h-6 w-6 rounded-full bg-tech-50 flex items-center justify-center text-cobalt border border-tech-200">
                                       <Check size={14} strokeWidth={3} />
                                    </div>
                                    <span className="text-ink font-medium">{feature}</span>
                                 </li>
                               ))}
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <Link href="/contact">
                            <Button className="rounded-full h-14 px-8 bg-ink text-white hover:bg-cobalt">
                            Request Quote <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                        <Button variant="outline" className="rounded-full h-14 px-8 border-tech-300 bg-white hover:bg-tech-50">
                           <Download className="mr-2 w-4 h-4" /> Data Sheet
                        </Button>
                    </div>
                 </motion.div>
              </div>
           </div>
        </section>

        {/* Technical Specs Table */}
        <section className="py-24 bg-tech-50 border-y border-tech-200 relative">
           <div className="container mx-auto px-6 relative z-10">
              <div className="max-w-4xl mx-auto">
                  <h3 className="text-3xl font-display font-bold text-center mb-12">Technical Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {Object.entries(product.specs).map(([key, value], i) => (
                          <div key={i} className="bg-white p-6 rounded-2xl border border-tech-200 flex items-center justify-between hover:border-cobalt transition-colors shadow-sm">
                              <span className="font-mono text-xs font-bold uppercase text-tech-500">{key}</span>
                              <span className="font-bold text-ink text-lg">{value as string}</span>
                          </div>
                      ))}
                  </div>
              </div>
           </div>
        </section>

        {/* Related Products */}
        <section className="py-24">
           <div className="container mx-auto px-6">
              <h3 className="text-3xl font-display font-bold mb-12">Related Products</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {relatedProducts.map((item) => (
                     <Link href={`/products/${item.id}`} key={item.id} className="group">
                        <div className="aspect-[4/5] rounded-3xl overflow-hidden mb-6 relative">
                           <img src={item.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                           <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                        </div>
                        <h4 className="text-xl font-bold text-ink group-hover:text-cobalt transition-colors">{item.title}</h4>
                        <p className="text-sm text-tech-500">{item.spec}</p>
                     </Link>
                  ))}
              </div>
           </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
