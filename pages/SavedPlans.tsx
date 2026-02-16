
import React from 'react';
import { Screen } from '../types';

interface Props { navigate: (s: Screen) => void; }

const SavedPlans: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-light dark:bg-background-dark min-h-screen font-display text-slate-900 dark:text-white transition-colors duration-300">
      <header className="p-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between sticky top-0 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md z-50">
         <button onClick={() => navigate('PROFILE')} className="p-1"><span className="material-symbols-outlined">arrow_back_ios</span></button>
         <h2 className="font-black text-sm uppercase tracking-widest">Saved AI Plans</h2>
         <span className="material-symbols-outlined cursor-pointer">more_vert</span>
      </header>
      <main className="max-w-md mx-auto p-4 space-y-6 pt-8 pb-32">
         {[
           { title: 'Goa Summer 2024', date: 'Jul 15 - 22', status: 'Voting', img: 'https://picsum.photos/600/400?goa' },
           { title: 'Tokyo Explorer', date: 'Oct 10 - 18', status: 'Confirmed', img: 'https://picsum.photos/600/400?tokyo' },
           { title: 'Dubai Desert Rush', date: 'Nov 05 - 10', status: 'Draft', img: 'https://picsum.photos/600/400?dubai' }
         ].map(plan => (
           <div key={plan.title} onClick={() => navigate('PLANNER')} className="bg-white dark:bg-zinc-900 rounded-[2.5rem] overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm cursor-pointer hover:scale-[1.02] hover:shadow-xl transition-all group">
              <div className="flex p-5 gap-5 items-center">
                 <div className="size-24 rounded-[1.5rem] overflow-hidden shrink-0 border border-gray-100 dark:border-gray-800">
                    <img src={plan.img} className="size-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Plan" />
                 </div>
                 <div className="flex-1 flex flex-col justify-center min-w-0">
                    <p className="text-primary text-[10px] font-black uppercase tracking-widest mb-1">{plan.date}</p>
                    <h3 className="text-lg font-black leading-tight mb-2 truncate dark:text-white">{plan.title}</h3>
                    <span className={`w-fit px-3 py-1 rounded-full text-[9px] font-black uppercase ${
                       plan.status === 'Confirmed' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 
                       plan.status === 'Voting' ? 'bg-[#A855F7]/10 text-[#A855F7]' : 'bg-gray-100 dark:bg-gray-800 text-gray-500'
                    }`}>
                       {plan.status}
                    </span>
                 </div>
              </div>
           </div>
         ))}
      </main>
      <div className="fixed bottom-28 right-6 z-40">
         <button onClick={() => navigate('PLANNER')} className="bg-primary text-white font-black px-6 py-4 rounded-full shadow-[0_15px_30px_rgba(255,56,93,0.4)] flex items-center gap-2 active:scale-95 transition-transform uppercase tracking-widest text-sm">
            <span className="material-symbols-outlined font-black">auto_awesome</span> NEW PLAN
         </button>
      </div>
   </div>
 );
};

export default SavedPlans;
