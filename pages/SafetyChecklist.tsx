
import React from 'react';
import { Screen } from '../types';

interface Props { navigate: (s: Screen) => void; }

const SafetyChecklist: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-light dark:bg-background-dark min-h-screen font-display text-slate-900 dark:text-white transition-colors duration-300">
      <header className="p-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between sticky top-0 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md z-50">
         <button onClick={() => navigate('PLANNER')} className="p-1"><span className="material-symbols-outlined">arrow_back</span></button>
         <h2 className="font-black text-sm uppercase tracking-widest">Safety Checklist</h2>
         <div className="size-10"></div>
      </header>
      <main className="max-w-md mx-auto p-4 space-y-6 pb-32 pt-8">
         <div className="p-6 bg-zinc-900 rounded-[2.5rem] border-4 border-primary/20 relative overflow-hidden flex flex-col items-center justify-center text-center shadow-2xl">
            <img src="https://picsum.photos/800/600?scanner-dark" className="absolute inset-0 size-full object-cover opacity-30 grayscale" alt="Scan" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            <div className="relative z-10 py-8">
               <span className="material-symbols-outlined text-6xl text-primary mb-4 animate-pulse drop-shadow-[0_0_20px_rgba(255,56,93,0.6)]">photo_camera</span>
               <h3 className="text-2xl font-black text-white leading-none mb-1">AI Safety Scan</h3>
               <p className="text-xs text-white/50 uppercase font-bold tracking-[0.2em]">Verify your gear integrity</p>
            </div>
         </div>

         <div className="space-y-3">
            {[
              { t: 'Safety Helmet', i: 'sports_motorsports', done: false },
              { t: 'Secured Harness', i: 'accessibility_new', done: false },
              { t: 'Emergency Contact Updated', i: 'contact_emergency', done: true },
              { t: 'EpiPen Checked & Present', i: 'medical_services', done: true }
            ].map(item => (
              <div key={item.t} className={`p-5 bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-gray-800 flex items-center gap-4 justify-between shadow-sm ${item.done ? 'opacity-50' : ''}`}>
                 <div className="flex items-center gap-4">
                    <div className={`size-12 rounded-xl flex items-center justify-center ${item.done ? 'bg-green-500/10 text-green-500' : 'bg-primary/5 text-primary'}`}>
                       <span className="material-symbols-outlined font-black">{item.i}</span>
                    </div>
                    <p className={`font-bold text-sm ${item.done ? 'line-through' : ''}`}>{item.t}</p>
                 </div>
                 <div className={`size-7 rounded-lg border-2 flex items-center justify-center transition-all ${item.done ? 'bg-green-500 border-green-500 shadow-lg shadow-green-500/20' : 'border-gray-200 dark:border-gray-700'}`}>
                    {item.done && <span className="material-symbols-outlined text-white text-sm font-black">check</span>}
                 </div>
              </div>
            ))}
         </div>
      </main>
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-white/95 dark:bg-background-dark/95 border-t border-gray-100 dark:border-gray-800 z-50 max-w-md mx-auto">
         <button className="w-full bg-primary/40 text-white font-black py-4 rounded-2xl cursor-not-allowed uppercase tracking-widest text-sm">2 Manual Checks Remaining</button>
      </div>
   </div>
 );
};

export default SafetyChecklist;
