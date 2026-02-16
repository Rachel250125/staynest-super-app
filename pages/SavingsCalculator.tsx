
import React from 'react';
import { Screen } from '../types';

interface Props { navigate: (s: Screen) => void; }

const SavingsCalculator: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-dark min-h-screen text-white font-display overflow-x-hidden">
      <header className="p-4 border-b border-white/5 flex items-center justify-between bg-black/30 backdrop-blur-xl sticky top-0 z-50">
         <button onClick={() => navigate('PLUS_REWARDS')} className="p-1"><span className="material-symbols-outlined">arrow_back</span></button>
         <h2 className="font-black text-xs uppercase tracking-widest opacity-60">Savings Calculator</h2>
         <div className="size-10"></div>
      </header>
      <main className="max-w-md mx-auto p-6 space-y-12 pb-32">
         <div className="text-center pt-8">
            <p className="text-xs font-black uppercase text-gray-500 tracking-[0.3em] mb-4">Estimated Total Savings</p>
            <div className="relative inline-block">
               <h1 className="text-7xl font-black text-primary tracking-tighter leading-none mb-2 drop-shadow-[0_0_30px_rgba(255,56,93,0.3)]">₹12,450</h1>
               <div className="absolute -top-4 -right-8 bg-yellow-400 text-black px-2 py-1 rounded-lg text-[10px] font-black rotate-12 shadow-lg">YEARLY</div>
            </div>
            <div className="mt-8 bg-primary/10 border border-primary/20 rounded-full px-6 py-2.5 inline-block shadow-inner"><p className="text-primary text-[11px] font-black uppercase tracking-widest">Plus ROI: 4.5x Membership Cost</p></div>
         </div>

         <div className="space-y-8">
            <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
               <div className="flex justify-between items-center mb-6"><p className="font-bold text-white/80">Active Trip Cycle</p><p className="font-black text-primary uppercase text-sm">5 Nights</p></div>
               <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden shadow-inner"><div className="h-full bg-primary shadow-[0_0_15px_rgba(255,56,93,0.6)]" style={{ width: '45%' }}></div></div>
               <div className="absolute top-[-50px] left-[-50px] size-48 bg-primary/5 rounded-full blur-[60px]"></div>
            </div>

            <div className="space-y-4">
               <p className="font-black text-[10px] opacity-40 uppercase tracking-[0.4em] px-2">Plus Add-ons Used</p>
               {[
                  { label: 'Lounge Access', val: '₹2,400 Saved', icon: 'local_cafe', color: 'text-purple-400' },
                  { label: 'Private Transfer', val: '₹3,500 Saved', icon: 'directions_car', color: 'text-blue-400' },
                  { label: 'Hotel Upgrade', val: '₹6,550 Saved', icon: 'hotel', color: 'text-primary' }
               ].map(item => (
                  <div key={item.label} className="p-5 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between group hover:bg-white/10 transition-colors">
                     <div className="flex items-center gap-4">
                        <div className="size-10 rounded-xl bg-white/5 flex items-center justify-center text-white/80 group-hover:text-white transition-colors"><span className="material-symbols-outlined">{item.icon}</span></div>
                        <p className="font-bold text-sm">{item.label}</p>
                     </div>
                     <span className={`text-xs font-black uppercase tracking-widest ${item.color}`}>{item.val}</span>
                  </div>
               ))}
            </div>
         </div>
      </main>
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-background-dark/90 backdrop-blur-md border-t border-white/5 z-50 max-w-md mx-auto">
         <button onClick={() => navigate('HOME')} className="w-full bg-white text-black py-4 rounded-2xl font-black shadow-xl active:scale-95 transition-transform uppercase tracking-widest text-xs">Share My Savings Report</button>
      </div>
   </div>
 );
};

export default SavingsCalculator;
