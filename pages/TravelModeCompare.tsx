import React from 'react';
import { Screen } from '../types';

interface Props { navigate: (s: Screen) => void; }

const TravelModeCompare: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-light dark:bg-background-dark min-h-screen font-display text-slate-900 dark:text-white transition-colors duration-300">
      <header className="p-4 border-b border-gray-100 dark:border-zinc-800 flex items-center justify-between bg-white/80 dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-50">
         <button onClick={() => navigate('PLANNER')} className="p-1"><span className="material-symbols-outlined">arrow_back</span></button>
         <div className="text-center">
            <h2 className="font-bold text-sm uppercase tracking-widest">Mode Comparison</h2>
            <p className="text-[10px] opacity-40 uppercase font-black tracking-widest">Airport to Hotel</p>
         </div>
         <span className="material-symbols-outlined cursor-pointer">share</span>
      </header>
      <main className="max-w-md mx-auto p-4 space-y-6 pt-8 pb-32">
         <div className="bg-gray-100 dark:bg-zinc-800 p-1 rounded-full flex shadow-inner border border-gray-100 dark:border-zinc-700">
            <button className="flex-1 py-3 bg-white dark:bg-primary rounded-full text-xs font-black uppercase text-primary dark:text-white shadow-sm transition-all tracking-widest">Private</button>
            <button className="flex-1 py-3 text-xs font-black uppercase opacity-40 dark:text-white tracking-widest">Public</button>
         </div>

         <div className="space-y-6">
            {[
              { title: 'Luxury SUV', price: '$45', time: '25 mins', safe: 'Air Purified', img: 'https://picsum.photos/800/600?suv' },
              { title: 'Private Sedan', price: '$30', time: '30 mins', safe: 'HEPA Filtered', img: 'https://picsum.photos/800/600?sedan' }
            ].map(mode => (
              <div key={mode.title} className="bg-white dark:bg-zinc-900 rounded-[2.5rem] overflow-hidden border border-gray-100 dark:border-zinc-800 shadow-lg group hover:shadow-xl transition-all">
                 <div className="h-52 overflow-hidden relative">
                    <img src={mode.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Mode" />
                    <div className="absolute inset-0 bg-black/10"></div>
                 </div>
                 <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                       <div>
                          <h3 className="text-2xl font-black leading-tight truncate dark:text-white">{mode.title}</h3>
                          <p className="text-xs opacity-50 dark:text-gray-400 font-medium">{mode.time} • Door-to-Door</p>
                       </div>
                       <p className="text-3xl font-black text-primary tracking-tighter leading-none">{mode.price}</p>
                    </div>
                    <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-2xl flex items-center gap-4 text-green-500 mb-8 shadow-sm">
                       <span className="material-symbols-outlined text-xl font-black">health_and_safety</span>
                       <p className="text-[10px] font-black uppercase tracking-[0.2em]">Safety: {mode.safe}</p>
                    </div>
                    <button className="w-full bg-primary py-5 rounded-[2rem] font-black text-white shadow-[0_15px_30px_rgba(255,56,93,0.3)] active:scale-95 transition-all uppercase tracking-widest">Select Ride</button>
                 </div>
              </div>
            ))}
         </div>
      </main>
   </div>
 );
};

export default TravelModeCompare;