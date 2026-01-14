
"use client";

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/ui/PageHeader';
import { Button, Input } from '@/components/ui/Primitives';
import { MapPin, Phone, Mail, MessageSquare, Clock, Globe } from 'lucide-react';
import { IMAGES } from '@/lib/constants';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-paper font-sans selection:bg-cobalt selection:text-white">
      <Header />
      <main className="flex-grow">
        
        {/* Standardized Header */}
        <PageHeader 
            title="Get in Touch"
            subtitle="Engineering consultation for drainage and steel projects. Reach out to our Doha or Dubai hubs."
            badge="Contact Us"
            image={IMAGES.headers.contact}
            breadcrumbs={[
                { label: 'Home', href: '/' },
                { label: 'Contact', href: '/contact' }
            ]}
            dark={true}
        />

        <section className="py-24 relative z-20 -mt-20">
           {/* Texture Background for this section */}
           <div className="absolute inset-0 bg-paper bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] -z-10" />

           <div className="container mx-auto px-6">
              <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-tech-200">
                  <div className="grid grid-cols-1 lg:grid-cols-5">
                      
                      {/* LEFT: Global Hubs (Map Visual) */}
                      <div className="lg:col-span-2 bg-ink text-white p-10 md:p-14 relative overflow-hidden">
                          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                          <div className="relative z-10 space-y-12">
                              <div>
                                  <h3 className="font-display text-3xl font-bold mb-2">Global Hubs</h3>
                                  <p className="text-stone-400 text-sm">Visit our headquarters or manufacturing facilities.</p>
                              </div>

                              {/* Qatar Card */}
                              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors">
                                  <div className="flex items-center gap-3 mb-6">
                                      <img src={IMAGES.flags.qatar} className="w-6 rounded shadow-sm" alt="Qatar" />
                                      <span className="font-bold text-lg">Qatar HQ</span>
                                  </div>
                                  <div className="space-y-4 text-sm text-stone-300">
                                      <div className="flex gap-4">
                                          <MapPin size={16} className="text-cobalt shrink-0 mt-1" />
                                          <span>Street 38, Industrial Area<br/>Doha, Qatar</span>
                                      </div>
                                      <div className="flex gap-4">
                                          <Phone size={16} className="text-cobalt shrink-0" />
                                          <span className="font-mono text-white">+974 4400 0000</span>
                                      </div>
                                      <div className="flex gap-4">
                                          <Mail size={16} className="text-cobalt shrink-0" />
                                          <span>qatar@magtrading.com</span>
                                      </div>
                                  </div>
                              </div>

                              {/* UAE Card */}
                              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors">
                                  <div className="flex items-center gap-3 mb-6">
                                      <img src={IMAGES.flags.uae} className="w-6 rounded shadow-sm" alt="UAE" />
                                      <span className="font-bold text-lg">UAE HQ</span>
                                  </div>
                                  <div className="space-y-4 text-sm text-stone-300">
                                      <div className="flex gap-4">
                                          <MapPin size={16} className="text-cobalt shrink-0 mt-1" />
                                          <span>Jebel Ali Free Zone<br/>Dubai, UAE</span>
                                      </div>
                                      <div className="flex gap-4">
                                          <Phone size={16} className="text-cobalt shrink-0" />
                                          <span className="font-mono text-white">+971 4 000 0000</span>
                                      </div>
                                      <div className="flex gap-4">
                                          <Mail size={16} className="text-cobalt shrink-0" />
                                          <span>uae@dmagtrading.com</span>
                                      </div>
                                  </div>
                              </div>

                              {/* Operating Hours */}
                              <div className="pt-8 border-t border-white/10 flex items-center gap-4 text-sm text-stone-400">
                                  <Clock size={16} className="text-cobalt" />
                                  <span>Sun - Thu: 08:00 - 18:00</span>
                              </div>
                          </div>
                      </div>

                      {/* RIGHT: Inquiry Form */}
                      <div className="lg:col-span-3 p-10 md:p-14 bg-white relative">
                          {/* Inner Texture for Form Area */}
                          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-50 pointer-events-none" />
                          
                          <div className="max-w-xl relative z-10">
                              <div className="flex items-center gap-3 mb-8">
                                  <div className="h-10 w-10 bg-cobalt/10 rounded-xl flex items-center justify-center text-cobalt">
                                      <MessageSquare size={20} />
                                  </div>
                                  <h3 className="text-2xl font-bold text-ink">Send an Enquiry</h3>
                              </div>

                              <form className="space-y-6">
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                      <div className="space-y-2">
                                          <label className="text-xs font-bold text-ink uppercase tracking-wider">Name</label>
                                          <Input placeholder="Full Name" className="bg-white border-tech-300 focus:border-cobalt h-14 rounded-xl shadow-sm" />
                                      </div>
                                      <div className="space-y-2">
                                          <label className="text-xs font-bold text-ink uppercase tracking-wider">Company</label>
                                          <Input placeholder="Company Name" className="bg-white border-tech-300 focus:border-cobalt h-14 rounded-xl shadow-sm" />
                                      </div>
                                  </div>
                                  <div className="space-y-2">
                                      <label className="text-xs font-bold text-ink uppercase tracking-wider">Email Address</label>
                                      <Input placeholder="john@company.com" type="email" className="bg-white border-tech-300 focus:border-cobalt h-14 rounded-xl shadow-sm" />
                                  </div>
                                  <div className="space-y-2">
                                      <label className="text-xs font-bold text-ink uppercase tracking-wider">Division Interest</label>
                                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                          {['Drainage', 'Steel', 'Other'].map((opt) => (
                                              <label key={opt} className="cursor-pointer">
                                                  <input type="radio" name="division" className="peer sr-only" />
                                                  <div className="h-12 flex items-center justify-center rounded-xl bg-white text-tech-500 text-sm font-bold border-2 border-tech-200 peer-checked:border-cobalt peer-checked:text-cobalt peer-checked:bg-cobalt/5 transition-all shadow-sm hover:border-tech-300">
                                                      {opt}
                                                  </div>
                                              </label>
                                          ))}
                                      </div>
                                  </div>
                                  <div className="space-y-2">
                                      <label className="text-xs font-bold text-ink uppercase tracking-wider">Project Details</label>
                                      <textarea 
                                        className="w-full h-40 rounded-xl bg-white border border-tech-300 p-4 text-sm font-medium text-ink focus:outline-none focus:ring-2 focus:ring-cobalt focus:border-transparent resize-none transition-all placeholder:text-tech-400 shadow-sm"
                                        placeholder="Tell us about your project requirements..."
                                      />
                                  </div>
                                  
                                  <div className="pt-4">
                                      <Button className="w-full h-16 rounded-xl bg-ink text-white hover:bg-cobalt text-sm shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
                                          Send Message
                                      </Button>
                                  </div>
                              </form>
                          </div>
                      </div>

                  </div>
              </div>
           </div>
        </section>

        {/* Bottom Map Image */}
        <div className="h-[400px] w-full bg-tech-200 relative opacity-50">
            <img src={IMAGES.misc.map_bg} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-ink/20" />
            <div className="absolute inset-0 flex items-center justify-center">
                 <Button className="bg-white text-ink hover:bg-cobalt hover:text-white rounded-full h-14 px-8 shadow-xl">
                    <Globe className="mr-2 w-4 h-4" /> View on Google Maps
                 </Button>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
