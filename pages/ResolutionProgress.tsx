
import React from 'react';
import { Screen } from '../types';

interface Props { navigate: (s: Screen) => void; }

const ResolutionProgress: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-light dark:bg-background-dark min-h-screen font-display text-slate-900 dark:text-white">
      <header className="p-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between sticky top-0 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md z-50">
         <button onClick={() => navigate('TRAVEL_GOALS')} className="p-1"><span className="material-symbols-outlined">chevron_left</span></button>
         <h2 className="font-black text-sm uppercase tracking-widest">2025 Journey Progress</h2>
         <span className="material-symbols-outlined cursor-pointer">share</span>
      </header>
      <main className="max-w-md mx-auto p-6 space-y-12 pt-12 pb-32">
         <div className="p-8 bg-zinc-900 rounded-[2.5rem] border border-white/5 flex items-center gap-8 shadow-2xl text-white">
            <div className="size-24 flex items-center justify-center relative">
               <svg className="size-full transform -rotate-90">
                  <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-white/5" />
                  <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-primary" strokeDasharray="251.2" strokeDashoffset="138" strokeLinecap="round" />
               </svg>
               <p className="absolute font-black text-xl">45%</p>
            </div>
            <div><h2 className="text-2xl font-black mb-1 leading-tight">Great progress!</h2><p className="text-xs opacity-50">You've reached 3/6 milestones this year.</p></div>
         </div>

         <div className="space-y-8">
            <h3 className="font-black text-xl">Active Milestones</h3>
            {[
              { t: 'Globe Trotter', p: '2/5 Reached', w: '40%', img: 'https://picsum.photos/600/400?globe' },
              { t: 'Solo Explorer', p: '0/1 Completed', w: '0%', img: 'https://picsum.photos/600/400?solo' }
            ].map(milestone => (
              <div key={milestone.t} className="rounded-[2.5rem] overflow-hidden bg-white dark:bg-zinc-900 border border-gray-100 dark:border-gray-800 shadow-lg">
                 <img src={milestone.img} className="w-full h-48 object-cover" alt="M" />
                 <div className="p-8">
                    <div className="flex justify-between mb-2">
                       <h4 className="text-xl font-black dark:text-white">{milestone.t}</h4>
                       <p className="text-primary font-black">{milestone.p}</p>
                    </div>
                    <div className="h-1.5 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                       <div className="h-full bg-primary" style={{ width: milestone.w }}></div>
                    </div>
                 </div>
              </div>
            ))}
         </div>
      </main>
   </div>
 );
};

export default ResolutionProgress;
