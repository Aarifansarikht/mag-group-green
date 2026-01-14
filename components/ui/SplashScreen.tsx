import React from 'react';

export default function SplashScreen() {
  return (
    <div className="fixed inset-0 z-[100] bg-brand-950 flex items-center justify-center overflow-hidden">
      <div className="relative flex items-center justify-center">
        
        {/* Background Ripple/Burst Effect */}
        <div className="absolute inset-0 flex items-center justify-center">
           <div className="w-24 h-24 rounded-full bg-brand-accent blur-xl opacity-0 animate-splash-pulse" />
           <div className="w-48 h-48 rounded-full bg-brand-steel/50 blur-3xl opacity-0 animate-splash-pulse delay-100" />
        </div>

        {/* Logo Container that Zooms */}
        <div className="animate-splash-zoom flex flex-col items-center gap-3 relative z-10">
            {/* Engineering Icon */}
            <div className="bg-brand-accent text-white p-4 rounded-none skew-x-[-12deg] shadow-lg">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-12 w-12 skew-x-[12deg]">
                <path d="M12.5 3L12.5 13M12.5 13L18.5 19M12.5 13L6.5 19M3 12.5L13 12.5" stroke="white" strokeWidth="2" strokeLinecap="square"/>
                <rect x="11" y="11" width="3" height="3" fill="white"/>
              </svg>
           </div>
           {/* Text */}
           <div className="flex flex-col items-center">
              <span className="text-6xl font-display font-black tracking-tighter text-white uppercase italic leading-none">
                MAG
              </span>
              <span className="text-xl font-bold text-brand-accent uppercase tracking-[0.4em] leading-none mt-2">
                ENGINEERING
              </span>
           </div>
        </div>

      </div>
    </div>
  );
}