"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button, Input } from '@/components/ui/Primitives';
import { Activity, Ruler, Scale, Utensils, Flame } from 'lucide-react';

export default function OnboardingPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/profile');
  };

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 flex flex-col transition-colors">
      <div className="flex-1 container mx-auto px-4 md:px-6 py-12 flex flex-col justify-center max-w-3xl">
        <div className="mb-10 text-center">
            <span className="text-xs font-black tracking-widest text-brand uppercase mb-4 block">— Setup Your Profile —</span>
            <h1 className="text-4xl md:text-5xl font-black text-stone-900 dark:text-stone-50 mb-4 uppercase italic">
              Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-emerald-500">Engine.</span>
            </h1>
            <p className="text-stone-500 dark:text-stone-400 font-medium">
              We need a few details to calculate your metabolic rate and design your custom training plan.
            </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-12">
            
            {/* Stats Section */}
            <div className="bg-white dark:bg-stone-900 p-8 rounded-sm shadow-xl border-l-4 border-brand">
                <h3 className="flex items-center gap-2 text-xl font-black text-stone-900 dark:text-stone-50 mb-6 uppercase italic">
                    <Scale className="w-5 h-5 text-brand" /> Body Metrics
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-stone-500 dark:text-stone-400 uppercase">Age</label>
                        <Input type="number" placeholder="25" className="dark:text-stone-50 text-lg font-mono" required />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-stone-500 dark:text-stone-400 uppercase">Weight (kg)</label>
                        <Input type="number" placeholder="70" className="dark:text-stone-50 text-lg font-mono" required />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-stone-500 dark:text-stone-400 uppercase">Height (cm)</label>
                        <Input type="number" placeholder="175" className="dark:text-stone-50 text-lg font-mono" required />
                    </div>
                </div>
            </div>

            {/* Diet Section */}
            <div className="bg-white dark:bg-stone-900 p-8 rounded-sm shadow-xl border-l-4 border-stone-800 dark:border-stone-700">
                <h3 className="flex items-center gap-2 text-xl font-black text-stone-900 dark:text-stone-50 mb-6 uppercase italic">
                    <Utensils className="w-5 h-5 text-brand" /> Fuel Preferences
                </h3>
                <div className="space-y-6">
                    <div className="space-y-3">
                        <label className="text-xs font-bold text-stone-500 dark:text-stone-400 uppercase">Dietary Type</label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {['Omnivore', 'Vegan', 'Paleo', 'Keto'].map((type) => (
                                <label key={type} className="cursor-pointer group relative">
                                    <input suppressHydrationWarning type="radio" name="diet" className="peer sr-only" />
                                    <div className="h-12 flex items-center justify-center rounded-sm border-2 border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-600 dark:text-stone-400 font-bold uppercase text-sm transition-all peer-checked:border-brand peer-checked:text-brand peer-checked:bg-brand/10 hover:border-brand/50">
                                        {type}
                                    </div>
                                </label>
                            ))}
                        </div>
                    </div>
                    
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-stone-500 dark:text-stone-400 uppercase">Allergies / Restrictions</label>
                        <Input placeholder="e.g. Peanuts, Gluten (Optional)" className="dark:text-stone-50" />
                    </div>
                </div>
            </div>

             {/* Activity Section */}
             <div className="bg-white dark:bg-stone-900 p-8 rounded-sm shadow-xl border-l-4 border-stone-800 dark:border-stone-700">
                <h3 className="flex items-center gap-2 text-xl font-black text-stone-900 dark:text-stone-50 mb-6 uppercase italic">
                    <Activity className="w-5 h-5 text-brand" /> Training Volume
                </h3>
                <div className="space-y-3">
                    <label className="text-xs font-bold text-stone-500 dark:text-stone-400 uppercase">Current Weekly Mileage</label>
                    <select suppressHydrationWarning className="flex h-12 w-full rounded-none border-b-2 border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-800/50 px-3 py-1 text-sm transition-colors focus-visible:outline-none focus-visible:border-brand dark:text-stone-50">
                        <option>0 - 10 km (Beginner)</option>
                        <option>10 - 30 km (Intermediate)</option>
                        <option>30 - 60 km (Advanced)</option>
                        <option>60+ km (Elite)</option>
                    </select>
                </div>
                <div className="mt-6 space-y-3">
                    <label className="text-xs font-bold text-stone-500 dark:text-stone-400 uppercase">Primary Goal</label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {['Weight Loss', 'Marathon', 'Speed'].map((goal) => (
                             <label key={goal} className="cursor-pointer group relative">
                             <input suppressHydrationWarning type="radio" name="goal" className="peer sr-only" />
                             <div className="p-4 rounded-sm border-2 border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-center transition-all peer-checked:border-brand peer-checked:bg-brand/10">
                                 <Flame className="w-6 h-6 mx-auto mb-2 text-stone-400 peer-checked:text-brand" />
                                 <span className="text-sm font-black uppercase text-stone-600 dark:text-stone-400 peer-checked:text-stone-900 dark:peer-checked:text-white">{goal}</span>
                             </div>
                         </label>
                        ))}
                    </div>
                </div>
            </div>

            <Button size="lg" className="w-full h-16 text-lg font-black uppercase tracking-widest shadow-2xl">
                Generate My Plan
            </Button>
        </form>
      </div>
    </div>
  );
}