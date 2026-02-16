
import React from 'react';
import { Screen } from '../types';

interface Props { navigate: (s: Screen) => void; }

const SavingsReport: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-dark min-h-screen text-white font-display">
      <header className="p-6 flex items-center justify-between border-b border-white/5">
         <button onClick={() => navigate('PLUS_DASHBOARD')} className="p-1"><span className="material-symbols-outlined">arrow_back</span></button>
         <h2 className="font-black text-sm uppercase tracking-widest">Monthly Impact</h2>
         <span className="material-symbols-outlined cursor-pointer">share</span>
      </header>
      <main className="p-6 space-y-12">
         <div className="flex flex-col items-center">
            <div className="relative size-48 flex items-center justify-center mb-8">
               <svg className="size-full transform -rotate-90">
                  <circle cx="96" cy="96" r="80" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-white/5" />
                  <circle cx="96" cy="96" r="80" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-primary" strokeDasharray="502.4" strokeDashoffset="100" strokeLinecap="round" />
               </svg>
               <div className="absolute text-center"><p className="text-4xl font-black">5.8x</p><p className="text-[10px] font-black uppercase opacity-40">ROI</p></div>
            </div>
            <p className="text-center text-sm opacity-70">You saved <span className="text-primary font-black">₹5,800</span> this month, more than covering your 999 membership fee.</p>
         </div>

         <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 text-center">
               <span className="material-symbols-outlined text-primary text-3xl mb-2">schedule</span>
               <p className="text-2xl font-black">4 Hours</p>
               <p className="text-[10px] font-bold opacity-40 uppercase">Time Saved</p>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 text-center">
               <span className="material-symbols-outlined text-primary text-3xl mb-2">military_tech</span>
               <p className="text-2xl font-black">Gold</p>
               <p className="text-[10px] font-bold opacity-40 uppercase">Next Tier</p>
            </div>
         </div>
      </main>
   </div>
 );
};

export default SavingsReport;
