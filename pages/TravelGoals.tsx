import React from 'react';
import { Screen } from '../types';

interface Props { navigate: (s: Screen) => void; }

const TravelGoals: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-light dark:bg-background-dark min-h-screen font-display text-[#1d0c0f] dark:text-white">
     <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md p-4 border-b border-gray-100 dark:border-zinc-800">
        <button onClick={() => navigate('PROFILE')} className="p-1"><span className="material-symbols-outlined">arrow_back_ios</span></button>
        <h2 className="font-black text-center flex-1 uppercase tracking-widest text-sm">2025 Travel Goals</h2>
        <div className="w-10"></div>
     </header>
     <main className="max-w-md mx-auto p-4 pb-32">
        <div className="relative h-64 rounded-3xl overflow-hidden mb-8 shadow-2xl">
           <img src="https://picsum.photos/800/600?adventure" className="w-full h-full object-cover" alt="Hero" />
           <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
              <p className="text-white text-3xl font-black italic tracking-tighter uppercase leading-none">Your Year of Adventure</p>
           </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
           <div className="p-5 bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-zinc-800 shadow-sm text-center">
              <p className="text-3xl font-black text-primary">2</p>
              <p className="text-xs font-bold opacity-50 uppercase tracking-widest mt-1">Goals Met</p>
           </div>
           <div className="p-5 bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-zinc-800 shadow-sm text-center">
              <p className="text-3xl font-black dark:text-white">3</p>
              <p className="text-xs font-bold opacity-50 uppercase tracking-widest mt-1">Pending</p>
           </div>
        </div>

        <div className="space-y-4">
           <h3 className="font-black text-lg px-1 uppercase tracking-widest text-slate-500">Goal Summary</h3>
           {[
             { title: 'Visit 5 Countries', val: '2/5 Reached', progress: 40 },
             { title: 'Go on 1 Solo Trip', val: 'Not Started', progress: 0 },
             { title: 'Climb 3 Summits', val: '1/3 Reached', progress: 33 }
           ].map(goal => (
             <div key={goal.title} className="p-5 bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-zinc-800 shadow-sm">
                <div className="flex justify-between mb-3 items-end">
                   <p className="font-bold text-sm dark:text-white">{goal.title}</p>
                   <p className="text-[10px] font-black text-primary uppercase tracking-widest">{goal.val}</p>
                </div>
                <div className="h-1.5 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden shadow-inner">
                   <div className="h-full bg-primary shadow-[0_0_10px_rgba(255,56,93,0.5)]" style={{ width: `${goal.progress}%` }}></div>
                </div>
             </div>
           ))}
        </div>
     </main>
     <div className="fixed bottom-0 left-0 right-0 p-6 bg-white/95 dark:bg-background-dark/95 border-t border-gray-100 dark:border-zinc-800 z-50 max-w-md mx-auto">
        <button onClick={() => navigate('HOME')} className="w-full bg-primary text-white py-4 rounded-full font-black text-lg shadow-xl active:scale-95 transition-transform uppercase tracking-widest">Add New Goal</button>
     </div>
   </div>
 );
};

export default TravelGoals;