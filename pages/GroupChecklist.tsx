
import React from 'react';
import { Screen } from '../types';

interface Props { navigate: (s: Screen) => void; }

const GroupChecklist: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-light dark:bg-background-dark min-h-screen font-display text-[#1c0d0f] dark:text-white">
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-[#1c0d0f]/90 backdrop-blur-md p-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
         <button onClick={() => navigate('GROUP_HUB')} className="p-1"><span className="material-symbols-outlined">arrow_back_ios</span></button>
         <div className="text-center"><h2 className="font-bold">Checklist</h2><p className="text-[10px] font-black text-primary uppercase">Paris Summer Trip</p></div>
         <div className="size-10"></div>
      </header>
      <main className="max-w-md mx-auto p-4 space-y-6 pb-32">
         <div className="p-5 bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col items-center text-center">
            <p className="text-xs font-bold opacity-40 uppercase tracking-widest mb-4">Departure In</p>
            <div className="flex gap-6 mb-6">
               <div><p className="text-4xl font-black text-primary leading-none">12</p><p className="text-[10px] font-bold uppercase mt-1">Days</p></div>
               <div><p className="text-4xl font-black text-primary leading-none">08</p><p className="text-[10px] font-bold uppercase mt-1">Hrs</p></div>
            </div>
            <div className="w-full bg-gray-100 dark:bg-white/10 h-1.5 rounded-full overflow-hidden"><div className="h-full bg-primary" style={{ width: '45%' }}></div></div>
            <p className="mt-3 text-xs font-bold opacity-40 uppercase">9/20 Tasks Done</p>
         </div>

         <h3 className="font-black text-lg">Essential Tasks</h3>
         <div className="space-y-3">
            {[
              { t: 'Upload Passports', s: '3 of 4 Done', c: false },
              { t: 'Confirm Allergy Profiles', s: 'Completed by Sarah', c: true },
              { t: 'Shared Packing List', s: '12 items added', c: false }
            ].map(task => (
              <div key={task.t} className={`p-4 bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-gray-800 flex items-center gap-4 justify-between shadow-sm cursor-pointer ${task.c ? 'opacity-50' : ''}`}>
                 <div className="flex items-center gap-4">
                    <div className={`size-6 rounded-lg border-2 flex items-center justify-center ${task.c ? 'bg-primary border-primary' : 'border-gray-200'}`}>{task.c && <span className="material-symbols-outlined text-white text-xs font-bold">check</span>}</div>
                    <div><p className={`font-bold text-sm ${task.c ? 'line-through' : ''}`}>{task.t}</p><p className="text-[10px] opacity-50 uppercase font-black">{task.s}</p></div>
                 </div>
                 <span className="material-symbols-outlined text-gray-400">chevron_right</span>
              </div>
            ))}
         </div>
      </main>
   </div>
 );
};

export default GroupChecklist;
