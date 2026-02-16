import React from 'react';
import { Screen } from '../types';

interface Props { navigate: (s: Screen) => void; }

const TierBenefits: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-light dark:bg-background-dark min-h-screen font-display text-slate-900 dark:text-white">
      <header className="p-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between sticky top-0 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md z-50">
         <button onClick={() => navigate('PLUS_REWARDS')} className="p-1"><span className="material-symbols-outlined">arrow_back_ios</span></button>
         <h2 className="font-black text-sm uppercase tracking-widest">Tier Benefits</h2>
         <span className="material-symbols-outlined">info</span>
      </header>
      <main className="max-w-md mx-auto p-6 space-y-12 pt-12 pb-40">
         <div className="flex flex-col items-center text-center">
            <div className="relative mb-6">
               <img src="https://picsum.photos/200/200?random=p1" className="size-32 rounded-full border-4 border-white shadow-2xl" alt="P" />
               <div className="absolute -bottom-2 -right-2 size-12 bg-gradient-to-tr from-gray-400 to-gray-200 border-4 border-white rounded-full flex items-center justify-center text-black font-black shadow-xl"><span className="material-symbols-outlined text-xl">stars</span></div>
            </div>
            <h1 className="text-3xl font-black mb-1">Silver Member</h1>
            <p className="text-primary font-black uppercase text-xs tracking-widest">3 more stays to reach Gold</p>
         </div>

         <div className="p-6 bg-white dark:bg-zinc-900 rounded-[2.5rem] border border-gray-100 dark:border-zinc-800 shadow-sm space-y-4">
            <div className="flex justify-between items-end"><p className="text-[10px] font-black uppercase opacity-30">How to Level Up</p><p className="font-black text-sm">7/10 Stays</p></div>
            <div className="h-1.5 w-full bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-primary" style={{ width: '70%' }}></div></div>
            <p className="text-[10px] font-bold opacity-50 text-center">Book 3 more stays by Dec 31 to unlock Gold.</p>
         </div>

         <div className="space-y-4">
            <h3 className="font-black text-lg px-2">Compare Tiers</h3>
            <div className="grid grid-cols-4 font-black text-[8px] uppercase tracking-widest opacity-30 border-b pb-4 px-2"><span>Benefit</span><span className="text-center">Silver</span><span className="text-center">Gold</span><span className="text-center">Platinum</span></div>
            {[
              { b: 'Extra Points', s: '5%', g: '10%', p: '20%' },
              { b: 'Upgrades', s: '-', g: '✓', p: '✓' },
              { b: 'Lounge', s: '-', g: 'Disc.', p: 'Free' }
            ].map(row => (
              <div key={row.b} className="grid grid-cols-4 py-6 border-b border-gray-100 dark:border-zinc-800 items-center px-2">
                 <p className="text-xs font-bold leading-tight">{row.b}</p>
                 <p className="text-center text-xs opacity-50">{row.s}</p>
                 <p className="text-center text-xs text-primary font-black">{row.g}</p>
                 <p className="text-center text-xs text-primary font-black">{row.p}</p>
              </div>
            ))}
         </div>
      </main>
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-white/95 dark:bg-background-dark/95 border-t border-gray-100 dark:border-zinc-800 z-50 max-w-md mx-auto">
         <button className="w-full bg-primary py-4 rounded-2xl font-black text-white shadow-2xl active:scale-95 transition-transform uppercase tracking-widest text-sm">Join Plus • $9.99/mo</button>
      </div>
   </div>
 );
};

export default TierBenefits;