
import React from 'react';
import { Screen } from '../types';

interface Props { navigate: (s: Screen) => void; }

const ModeratorAppeal: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white min-h-screen pb-40">
     <nav className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 p-4 flex items-center justify-between">
       <button onClick={() => navigate('COMMUNITY')} className="p-1"><span className="material-symbols-outlined">arrow_back</span></button>
       <div className="text-center">
         <h2 className="font-bold">Appeal #AP-4421</h2>
         <p className="text-[10px] text-primary font-black uppercase tracking-widest">Expert Review Mode</p>
       </div>
       <span className="material-symbols-outlined">info</span>
     </nav>

     <main className="max-w-md mx-auto p-4 space-y-8">
       <div className="flex flex-col gap-2">
          <h3 className="text-xs font-black uppercase text-gray-500 tracking-widest">Original Violation</h3>
          <div className="p-4 bg-white dark:bg-zinc-900 rounded-xl border border-red-500/30">
             <p className="text-red-500 text-xs font-bold mb-1">Violation: Spamming in Tokyo Forum</p>
             <p className="text-sm italic opacity-70">"Multiple repetitive posts detected within 5 minutes."</p>
          </div>
       </div>

       <div className="flex flex-col gap-2">
          <h3 className="text-xs font-black uppercase text-gray-500 tracking-widest">User Appeal Statement</h3>
          <div className="p-5 bg-white dark:bg-zinc-900 rounded-xl border-2 border-primary/30">
             <div className="flex items-center gap-3 mb-4">
                <img src="https://picsum.photos/100/100?random=5" className="size-10 rounded-full" alt="User" />
                <div><p className="font-bold text-sm">Kento S.</p><p className="text-[10px] opacity-50">Trust Score: 94</p></div>
             </div>
             <p className="text-sm leading-relaxed">"I was sharing multiple verified allergy-safe spots in a row for a traveler who asked for urgent help. I wasn't spamming, just trying to be thorough."</p>
          </div>
       </div>

       <div className="grid grid-cols-2 gap-3">
          <button className="py-4 rounded-xl border-2 border-green-500/50 text-green-500 font-black uppercase text-xs active:scale-95 transition-transform" onClick={() => navigate('COMMUNITY')}>Overturn</button>
          <button className="py-4 rounded-xl bg-primary text-white font-black uppercase text-xs active:scale-95 transition-transform" onClick={() => navigate('COMMUNITY')}>Uphold</button>
       </div>
     </main>
   </div>
 );
};

export default ModeratorAppeal;
