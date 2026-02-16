
import React from 'react';
import { Screen } from '../types';

interface Props { navigate: (s: Screen) => void; }

const SharedPackingList: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-light dark:bg-background-dark min-h-screen font-display text-slate-900 dark:text-white transition-colors duration-300">
      <header className="p-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between sticky top-0 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md z-50">
         <button onClick={() => navigate('PLANNER')} className="p-1"><span className="material-symbols-outlined">arrow_back_ios_new</span></button>
         <div className="text-center"><h2 className="font-bold">Maui Packing</h2><p className="text-[10px] font-black text-primary uppercase tracking-widest">Group List</p></div>
         <span className="material-symbols-outlined cursor-pointer">group_add</span>
      </header>
      <main className="max-w-md mx-auto p-4 space-y-8 pt-8 pb-32">
         <div className="p-6 bg-zinc-900 rounded-[2rem] text-white shadow-2xl border border-white/5">
            <div className="flex justify-between items-center mb-6"><div><p className="text-xs font-black opacity-50 uppercase tracking-widest mb-1">Packed Status</p><p className="text-3xl font-black tracking-tighter">14/40</p></div><div className="size-16 rounded-full border-4 border-primary/20 flex items-center justify-center font-black text-xs text-primary shadow-[0_0_15px_rgba(255,56,93,0.3)]">35%</div></div>
            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden shadow-inner"><div className="h-full bg-primary shadow-[0_0_10px_rgba(255,56,93,0.5)]" style={{ width: '35%' }}></div></div>
         </div>

         <section className="space-y-4">
            <h3 className="font-black text-lg px-2 uppercase tracking-widest text-slate-500">Common Items</h3>
            {[
              { t: 'Sunscreen (SPF 50)', r: 'Everyone', c: false },
              { t: 'First Aid Kit', r: 'Sarah', c: true }
            ].map(item => (
              <div key={item.t} className={`p-5 bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-gray-800 flex items-center gap-4 justify-between shadow-sm transition-opacity ${item.c ? 'opacity-50' : ''}`}>
                 <div className="flex items-center gap-4">
                    <div className={`size-7 rounded-lg border-2 flex items-center justify-center transition-all ${item.c ? 'bg-primary border-primary shadow-lg shadow-primary/20' : 'border-gray-200 dark:border-gray-700'}`}>{item.c && <span className="material-symbols-outlined text-white text-xs font-black">check</span>}</div>
                    <div><p className={`font-bold dark:text-white ${item.c ? 'line-through' : ''}`}>{item.t}</p><p className="text-[10px] font-black opacity-40 uppercase tracking-widest">Responsible: {item.r}</p></div>
                 </div>
                 <div className="flex -space-x-3 shrink-0">
                    <div className="size-8 rounded-full border-2 border-white dark:border-zinc-950 bg-gray-200 overflow-hidden"><img src="https://picsum.photos/50/50?u1" className="size-full object-cover" alt="u1" /></div>
                    <div className="size-8 rounded-full border-2 border-white dark:border-zinc-950 bg-gray-300 overflow-hidden"><img src="https://picsum.photos/50/50?u2" className="size-full object-cover" alt="u2" /></div>
                 </div>
              </div>
            ))}
         </section>
      </main>
      <div className="fixed bottom-6 right-6 z-40 max-w-md mx-auto">
        <button className="size-16 rounded-full bg-primary text-white shadow-2xl flex items-center justify-center active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-3xl">add</span>
        </button>
      </div>
   </div>
 );
};

export default SharedPackingList;
