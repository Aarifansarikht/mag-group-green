
"use client";

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/ui/PageHeader';
import { PROJECTS } from '@/lib/data';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Filter } from 'lucide-react';
import Link from 'next/link';
import { IMAGES } from '@/lib/constants';
import { cn } from '@/lib/utils';

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Sports Infrastructure", "Transport", "Cultural"];

  const filteredProjects = filter === "All" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="flex flex-col min-h-screen bg-paper font-sans selection:bg-cobalt selection:text-white">
      <Header />
      <main className="flex-grow">
        <PageHeader 
            title="Our Portfolio"
            subtitle="Landmark projects across the Middle East defining the skyline and infrastructure of tomorrow."
            badge="Case Studies"
            image={IMAGES.misc.bridge}
            breadcrumbs={[
                { label: 'Home', href: '/' },
                { label: 'Projects', href: '/projects' }
            ]}
        />

        {/* Filter Bar */}
        <div className="sticky top-20 z-40 py-6 bg-paper/80 backdrop-blur-md border-b border-tech-200">
           <div className="container mx-auto px-6 overflow-x-auto hide-scrollbar">
              <div className="flex items-center gap-2 min-w-max">
                 <div className="mr-4 flex items-center text-tech-500 gap-2">
                    <Filter size={16} />
                    <span className="text-xs font-bold uppercase tracking-wider">Filter By:</span>
                 </div>
                 {categories.map((cat) => (
                    <button
                       key={cat}
                       onClick={() => setFilter(cat)}
                       className={cn(
                          "px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all border",
                          filter === cat 
                            ? "bg-cobalt border-cobalt text-white shadow-lg" 
                            : "bg-white border-tech-200 text-tech-500 hover:border-cobalt hover:text-cobalt"
                       )}
                    >
                       {cat}
                    </button>
                 ))}
              </div>
           </div>
        </div>

        {/* Projects Grid */}
        <section className="py-20 relative">
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] -z-10" />
             
             <div className="container mx-auto px-6">
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <AnimatePresence>
                       {filteredProjects.map((project) => (
                          <motion.div
                            layout
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4 }}
                          >
                             <Link href={`/projects/${project.id}`} className="group block relative h-[400px] rounded-[2rem] overflow-hidden shadow-xl border border-white">
                                <img src={project.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={project.title} />
                                
                                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                                
                                <div className="absolute top-6 right-6">
                                   <div className="h-12 w-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 group-hover:bg-cobalt group-hover:scale-110 transition-all">
                                      <ArrowUpRight size={20} />
                                   </div>
                                </div>

                                <div className="absolute bottom-0 left-0 p-8 w-full">
                                    <div className="flex items-center gap-3 mb-3">
                                       <span className="px-3 py-1 bg-cobalt text-white text-[10px] font-bold uppercase tracking-widest rounded-md">
                                          {project.category}
                                       </span>
                                       <span className="text-white/60 text-xs font-mono">{project.year}</span>
                                    </div>
                                    <h3 className="text-3xl font-display font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                                       {project.title}
                                    </h3>
                                    <p className="text-stone-300 text-sm flex items-center gap-2">
                                       <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                                       {project.location}
                                    </p>
                                </div>
                             </Link>
                          </motion.div>
                       ))}
                   </AnimatePresence>
                </motion.div>

                {filteredProjects.length === 0 && (
                   <div className="text-center py-20">
                      <p className="text-2xl font-bold text-tech-400">No projects found in this category.</p>
                   </div>
                )}
             </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
