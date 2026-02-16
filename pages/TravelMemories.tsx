import React from 'react';
import { Screen } from '../types';

interface Props { navigate: (s: Screen) => void; }

const TravelMemories: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-light dark:bg-background-dark min-h-screen font-display text-slate-900 dark:text-white transition-colors duration-300">
      <header className="p-4 border-b border-gray-100 dark:border-zinc-800 flex items-center justify-between bg-white/80 dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-50">
         <button onClick={() => navigate('GROUP_HUB')} className="p-1"><span className="material-symbols-outlined">arrow_back</span></button>
         <div className="text-center">
            <h2 className="font-bold text-sm uppercase tracking-widest">Shared Memories</h2>
            <p className="text-[10px] opacity-40 uppercase font-black tracking-widest">Paris 2024</p>
         </div>
         <span className="material-symbols-outlined cursor-pointer">share</span>
      </header>
      <main className="max-w-md mx-auto p-4 space-y-8 pt-8 pb-32">
         <div className="grid grid-cols-2 gap-3">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className={`relative rounded-2xl overflow-hidden group shadow-sm ${i % 3 === 0 ? 'aspect-[3/4] col-span-2' : 'aspect-square'}`}>
                 <img src={`https://picsum.photos/600/800?random=${i+200}`} className="size-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Memory" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                 <div className="absolute bottom-3 left-3 flex items-center gap-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                    <img src={`https://picsum.photos/50/50?random=${i}`} className="size-6 rounded-full border-2 border-white shadow-sm" alt="U"/>
                    <p className="text-[10px] font-black text-white uppercase tracking-widest">Sarah J.</p>
                 </div>
              </div>
            ))}
         </div>
      </main>
      <div className="fixed bottom-6 right-6 z-40 max-w-md mx-auto">
         <button className="size-16 rounded-full bg-primary text-white shadow-2xl flex items-center justify-center active:scale-95 transition-transform">
            <span className="material-symbols-outlined text-3xl">add_photo_alternate</span>
         </button>
      </div>
   </div>
 );
};

export default TravelMemories;