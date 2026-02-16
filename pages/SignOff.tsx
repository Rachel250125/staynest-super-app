
import React from 'react';
import { Screen } from '../types';

interface Props {
 navigate: (s: Screen) => void;
}

const SignOff: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-light dark:bg-background-dark font-display text-[#1d0c0f] dark:text-white min-h-screen transition-colors duration-300">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md p-4 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
        <button onClick={() => navigate('PLANNER')} className="p-1"><span className="material-symbols-outlined">arrow_back</span></button>
        <h2 className="text-lg font-bold flex-1 text-center pr-10 tracking-tight">Finalize Our Trip</h2>
      </header>
      <main className="max-w-md mx-auto p-4 pb-40">
         <div className="p-6 bg-white dark:bg-zinc-900 rounded-3xl border border-gray-100 dark:border-gray-800 mb-8 shadow-sm">
            <div className="flex justify-between items-center mb-4">
               <p className="font-bold text-sm uppercase tracking-widest text-slate-500">Group Progress</p>
               <p className="text-xs font-black text-primary uppercase">4 of 6 signed</p>
            </div>
            <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden mb-3 shadow-inner">
               <div className="h-full bg-primary shadow-[0_0_10px_rgba(255,56,93,0.5)]" style={{ width: '66%' }}></div>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium italic">Almost there! Just 2 more signatures needed to lock the price.</p>
         </div>

         <h3 className="text-lg font-bold mb-4 uppercase tracking-widest text-slate-500 px-2">Member Status</h3>
         <div className="space-y-3">
            {[
              { name: 'Sarah Jenkins', status: 'Ready to Book', icon: 'check_circle', color: 'text-green-500', img: 'https://picsum.photos/100/100?s1' },
              { name: 'Alex Rivera', status: 'Signature Required', icon: 'error', color: 'text-primary', highlight: true, img: 'https://picsum.photos/100/100?profile' }
            ].map(member => (
              <div key={member.name} className={`flex items-center gap-4 p-5 rounded-2xl border transition-all ${member.highlight ? 'bg-primary/5 border-primary/20 shadow-md scale-[1.02]' : 'bg-white dark:bg-zinc-900 border-gray-100 dark:border-gray-800'}`}>
                 <img src={member.img} className="size-14 rounded-full border-2 border-white dark:border-zinc-800 shadow-sm" alt="Member" />
                 <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm dark:text-white truncate">{member.name} {member.highlight ? '(You)' : ''}</p>
                    <p className={`text-[10px] font-black uppercase flex items-center gap-1 mt-1 tracking-widest ${member.color}`}>
                       <span className="material-symbols-outlined text-[14px] font-black">{member.icon}</span>
                       {member.status}
                    </p>
                 </div>
                 {member.highlight && <div className="size-3 bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(255,56,93,0.8)]"></div>}
              </div>
            ))}
         </div>
      </main>
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-white/95 dark:bg-background-dark/95 border-t border-gray-100 dark:border-gray-800 z-50 max-w-md mx-auto">
         <button onClick={() => navigate('GROUP_HUB')} className="w-full bg-primary text-white py-5 rounded-2xl font-black text-lg shadow-[0_15px_30px_rgba(255,56,93,0.4)] flex items-center justify-center gap-2 active:scale-95 transition-transform uppercase tracking-widest">
            <span className="material-symbols-outlined font-black">draw</span> Sign & Lock Itinerary
         </button>
      </div>
   </div>
 );
};

export default SignOff;
