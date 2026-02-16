import React from 'react';
import { Screen } from '../types';

interface Props { navigate: (s: Screen) => void; }

const AIPersonalizedItineraryUI: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-light dark:bg-background-dark min-h-screen font-display text-slate-900 dark:text-white transition-colors duration-300">
      <div className="relative h-[35vh] w-full overflow-hidden">
         <img src="https://picsum.photos/1080/720?tokyo" className="size-full object-cover" alt="Tokyo" />
         <div className="absolute inset-0 bg-gradient-to-t from-background-light dark:from-background-dark via-transparent to-black/40"></div>
         <button onClick={() => navigate('PLANNER')} className="absolute top-12 left-6 size-11 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white"><span className="material-symbols-outlined">arrow_back</span></button>
         <div className="absolute bottom-10 left-8 right-8">
            <div className="flex items-center gap-2 mb-2">
               <span className="material-symbols-outlined text-primary text-xl">auto_awesome</span>
               <span className="text-[10px] font-black text-white uppercase tracking-[0.3em]">StayNest AI Plan</span>
            </div>
            <h1 className="text-4xl font-black italic text-white uppercase leading-none tracking-tighter">Your Perfect Day<br/>In Tokyo</h1>
         </div>
      </div>

      <main className="max-w-md mx-auto p-8 -mt-6 relative z-10 space-y-12 pb-40">
         <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
            {['Day 1', 'Day 2', 'Day 3', 'Day 4'].map((day, i) => (
               <button key={day} className={`px-8 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-sm transition-all whitespace-nowrap ${i === 0 ? 'bg-primary text-white shadow-xl' : 'bg-white dark:bg-zinc-900 border border-gray-100 dark:border-gray-800 opacity-40'}`}>
                  {day}
               </button>
            ))}
         </div>

         <div className="space-y-12 relative">
            <div className="absolute left-[21px] top-4 bottom-4 w-1 bg-primary/10 rounded-full"></div>
            {[
               { t: '10:00 AM', title: 'Senso-ji Temple Walk', loc: 'Asakusa', i: 'temple', s: 'AI selected for: Cultural immersion' },
               { t: '01:00 PM', title: 'Nut-Free Ramen Experience', loc: 'Shinjuku', i: 'restaurant', s: 'Verified safety match for your profile' },
               { t: '04:00 PM', title: 'Digital Art Museum', loc: 'Odaiba', i: 'palette', s: 'Highly rated by similar travelers' }
            ].map((step, idx) => (
               <div key={idx} className="flex gap-8 relative group">
                  <div className="size-11 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(255,56,93,0.3)] border-4 border-background-light dark:border-background-dark z-10 transition-transform group-hover:scale-110">
                     <span className="material-symbols-outlined text-white text-xl">{step.i}</span>
                  </div>
                  <div className="flex-1 pb-4">
                     <p className="text-primary font-black text-[10px] uppercase tracking-widest mb-1">{step.t}</p>
                     <h3 className="text-xl font-black uppercase tracking-tighter dark:text-white leading-none mb-1">{step.title}</h3>
                     <p className="text-xs font-bold opacity-40 uppercase mb-4">{step.loc}</p>
                     <div className="p-4 bg-primary/5 border border-primary/20 rounded-2xl shadow-inner">
                        <p className="text-[10px] font-medium leading-relaxed italic opacity-70">"{step.s}"</p>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 p-8 bg-white/95 dark:bg-background-dark/95 border-t border-gray-100 dark:border-gray-800 z-50 max-w-md mx-auto">
         <button onClick={() => navigate('BOOKING')} className="w-full bg-primary text-white py-5 rounded-[2rem] font-black text-lg shadow-[0_20px_40px_rgba(255,56,93,0.3)] active:scale-95 transition-all uppercase tracking-widest">Check Full Day Price</button>
      </div>
   </div>
 );
};

export default AIPersonalizedItineraryUI;