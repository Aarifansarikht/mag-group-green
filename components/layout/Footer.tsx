
import React from 'react';
import { Linkedin, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-paper border-t border-tech-300 pt-12 md:pt-20 pb-8 md:pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-20">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
             <div className="flex flex-col mb-4 md:mb-6">
                <span className="font-display font-bold text-2xl text-ink">MAG<span className="font-light text-tech-500">GROUP</span></span>
                <span className="font-mono text-[10px] text-cobalt uppercase tracking-widest mt-1">International</span>
             </div>
             <p className="text-sm text-tech-500 leading-relaxed font-light">
                Engineering structural integrity and fluid management systems for the GCC's most ambitious projects.
             </p>
          </div>

          {/* Links 1 */}
          <div>
             <h4 className="font-mono text-xs font-bold text-ink uppercase tracking-widest mb-4 md:mb-6">Solutions</h4>
             <ul className="space-y-3 md:space-y-4 text-sm text-tech-500">
                <li><Link href="#" className="hover:text-cobalt transition-colors">Drainage</Link></li>
                <li><Link href="#" className="hover:text-cobalt transition-colors">Structural Steel</Link></li>
                <li><Link href="#" className="hover:text-cobalt transition-colors">Facades</Link></li>
                <li><Link href="#" className="hover:text-cobalt transition-colors">Solar Tech</Link></li>
             </ul>
          </div>

          {/* Links 2 */}
          <div>
             <h4 className="font-mono text-xs font-bold text-ink uppercase tracking-widest mb-4 md:mb-6">Company</h4>
             <ul className="space-y-3 md:space-y-4 text-sm text-tech-500">
                <li><Link href="#" className="hover:text-cobalt transition-colors">About Us</Link></li>
                <li><Link href="#" className="hover:text-cobalt transition-colors">Projects</Link></li>
                <li><Link href="#" className="hover:text-cobalt transition-colors">Certifications</Link></li>
                <li><Link href="#" className="hover:text-cobalt transition-colors">Contact</Link></li>
             </ul>
          </div>

          {/* Locations */}
          <div>
             <h4 className="font-mono text-xs font-bold text-ink uppercase tracking-widest mb-4 md:mb-6">Locations</h4>
             <div className="space-y-4 md:space-y-6">
                <div>
                   <span className="block font-bold text-sm text-ink mb-1">Doha, Qatar</span>
                   <span className="text-xs text-tech-500 block">Street 38, Industrial Area</span>
                   <span className="text-xs text-tech-500 font-mono">+974 4400 0000</span>
                </div>
                <div>
                   <span className="block font-bold text-sm text-ink mb-1">Dubai, UAE</span>
                   <span className="text-xs text-tech-500 block">Jebel Ali Free Zone</span>
                   <span className="text-xs text-tech-500 font-mono">+971 4 000 0000</span>
                </div>
             </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-tech-300 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
           <span className="font-mono text-[10px] text-tech-500 uppercase tracking-wider text-center md:text-left">© 2024 MAG GROUP. SYSTEM VER 2.0</span>
           <div className="flex gap-6">
              <Link href="#" className="text-tech-500 hover:text-cobalt"><Linkedin size={18} /></Link>
              <Link href="#" className="text-tech-500 hover:text-cobalt"><Mail size={18} /></Link>
           </div>
        </div>
      </div>
    </footer>
  );
}
