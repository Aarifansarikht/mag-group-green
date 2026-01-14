
"use client";

import React, { use } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/ui/PageHeader';
import { getProject, PROJECTS } from '@/lib/data';
import { Button } from '@/components/ui/Primitives';
import { ArrowRight, MapPin, Calendar, User, Layers, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ProjectShowPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const project = getProject(id);

  if (!project) {
    return (
        <div className="min-h-screen flex items-center justify-center flex-col gap-4 bg-paper">
            <h1 className="text-4xl font-bold text-ink">Project Not Found</h1>
            <Link href="/projects"><Button>Back to Portfolio</Button></Link>
        </div>
    );
  }

  // Get next project for navigation
  const currentIndex = PROJECTS.findIndex(p => p.id === project.id);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <div className="flex flex-col min-h-screen bg-paper font-sans selection:bg-cobalt selection:text-white">
      <Header />
      <main className="flex-grow">
        
        <PageHeader 
           title={project.title}
           subtitle={`${project.category} • ${project.location}`}
           badge={project.year}
           image={project.heroImage}
           breadcrumbs={[
             { label: 'Home', href: '/' },
             { label: 'Projects', href: '/projects' },
             { label: project.title, href: '#' }
           ]}
        />

        {/* Stats Bar */}
        <div className="bg-ink text-white relative z-20">
           <div className="container mx-auto px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 border-b border-white/10">
                 <div className="py-8 px-4 text-center">
                    <User className="w-5 h-5 text-cobalt mx-auto mb-2" />
                    <p className="text-xs text-stone-400 uppercase tracking-widest mb-1">Client</p>
                    <p className="font-bold text-lg">{project.client}</p>
                 </div>
                 <div className="py-8 px-4 text-center">
                    <Layers className="w-5 h-5 text-cobalt mx-auto mb-2" />
                    <p className="text-xs text-stone-400 uppercase tracking-widest mb-1">Tonnage</p>
                    <p className="font-bold text-lg">{project.stats.tonnage}</p>
                 </div>
                 <div className="py-8 px-4 text-center">
                    <MapPin className="w-5 h-5 text-cobalt mx-auto mb-2" />
                    <p className="text-xs text-stone-400 uppercase tracking-widest mb-1">Architect</p>
                    <p className="font-bold text-lg">{project.stats.architect}</p>
                 </div>
                 <div className="py-8 px-4 text-center">
                    <Calendar className="w-5 h-5 text-cobalt mx-auto mb-2" />
                    <p className="text-xs text-stone-400 uppercase tracking-widest mb-1">Duration</p>
                    <p className="font-bold text-lg">{project.stats.duration}</p>
                 </div>
              </div>
           </div>
        </div>

        {/* Main Content */}
        <section className="py-24 relative">
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

             <div className="container mx-auto px-6 max-w-6xl relative z-10">
                 
                 {/* Narrative */}
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
                     <motion.div
                       initial={{ opacity: 0, y: 30 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       transition={{ duration: 0.6 }}
                     >
                         <h2 className="text-4xl font-display font-bold text-ink mb-8">The Challenge</h2>
                         <p className="text-lg text-tech-500 leading-relaxed text-justify">
                            {project.challenge}
                         </p>
                     </motion.div>
                     <motion.div
                       initial={{ opacity: 0, y: 30 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       transition={{ duration: 0.6, delay: 0.2 }}
                       className="bg-white p-10 rounded-[2rem] border-l-4 border-cobalt shadow-xl"
                     >
                         <h2 className="text-4xl font-display font-bold text-ink mb-8">The Solution</h2>
                         <p className="text-lg text-tech-500 leading-relaxed text-justify">
                            {project.solution}
                         </p>
                     </motion.div>
                 </div>

                 {/* Quote / Highlight */}
                 <div className="bg-gradient-to-r from-ink to-slate-900 rounded-[2rem] p-12 text-center relative overflow-hidden mb-24 shadow-2xl">
                     <div className="absolute inset-0 bg-hero-glow opacity-30" />
                     <div className="relative z-10">
                        <p className="font-display text-2xl md:text-4xl font-bold text-white leading-tight mb-6">
                           "{project.description}"
                        </p>
                        <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/10">
                           <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                           <span className="text-xs font-bold text-white uppercase tracking-widest">Project Highlight</span>
                        </div>
                     </div>
                 </div>

                 {/* Gallery */}
                 <h3 className="text-3xl font-display font-bold text-ink mb-12">Project Gallery</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
                    {project.gallery.map((img, i) => (
                       <motion.div 
                         key={i}
                         initial={{ opacity: 0, scale: 0.95 }}
                         whileInView={{ opacity: 1, scale: 1 }}
                         transition={{ duration: 0.5, delay: i * 0.1 }}
                         className={`rounded-[2rem] overflow-hidden shadow-lg border border-white h-[400px] ${i === 0 ? 'md:col-span-2' : ''}`}
                       >
                          <img src={img} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Project detail" />
                       </motion.div>
                    ))}
                 </div>

             </div>
        </section>

        {/* Next Project Nav */}
        <Link href={`/projects/${nextProject.id}`} className="group block relative h-[60vh] overflow-hidden">
            <img src={nextProject.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Next Project" />
            <div className="absolute inset-0 bg-ink/80 group-hover:bg-ink/70 transition-colors" />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <span className="text-emerald-400 font-mono text-sm font-bold uppercase tracking-widest mb-4">Next Project</span>
                <h2 className="text-5xl md:text-8xl font-display font-bold text-white mb-8 group-hover:scale-110 transition-transform duration-500">
                    {nextProject.title}
                </h2>
                <Button className="rounded-full bg-white text-ink hover:bg-cobalt hover:text-white h-16 px-12 text-lg">
                    View Case Study <ArrowRight className="ml-3" />
                </Button>
            </div>
        </Link>

      </main>
      <Footer />
    </div>
  );
}
