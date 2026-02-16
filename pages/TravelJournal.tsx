import React from 'react';
import { Screen } from '../types';

interface Props { navigate: (s: Screen) => void; }

const TravelJournal: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-light dark:bg-background-dark min-h-screen font-display text-[#130e1b] dark:text-white transition-colors">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md p-4 flex items-center justify-between border-b border-gray-100 dark:border-zinc-800">
         <button onClick={() => navigate('GROUP_HUB')} className="p-1"><span className="material-symbols-outlined">arrow_back</span></button>
         <div className="text-center">
            <h2 className="font-bold text-sm uppercase tracking-widest">Dubai Diary</h2>
            <p className="text-[10px] font-black text-primary uppercase tracking-widest">Oct 12 - 18, 2023</p>
         </div>
         <div className="flex -space-x-3 shrink-0">
            <div className="size-8 rounded-full border-2 border-white dark:border-zinc-800 bg-gray-300 overflow-hidden"><img src="https://picsum.photos/50/50?u1" alt="u1"/></div>
            <div className="size-8 rounded-full border-2 border-white dark:border-zinc-800 bg-gray-400 overflow-hidden"><img src="https://picsum.photos/50/50?u2" alt="u2"/></div>
         </div>
      </header>

      <main className="max-w-md mx-auto p-4 space-y-8 pb-32">
         <div className="p-5 bg-primary/5 border border-primary/20 rounded-[2rem] flex items-center justify-between gap-4 shadow-sm">
            <div className="flex-1 min-w-0">
               <p className="font-bold text-sm text-primary">AI Entry Assistant</p>
               <p className="text-xs opacity-50 dark:text-gray-400 truncate">Draft entries from your 24 new photos</p>
            </div>
            <button className="bg-primary text-white text-[10px] font-black px-4 py-2 rounded-full uppercase shadow-lg active:scale-95 transition-transform tracking-widest">Help me write</button>
         </div>

         {[1, 2].map(i => (
           <div key={i} className="bg-white dark:bg-zinc-900 rounded-[2.5rem] overflow-hidden border border-gray-100 dark:border-zinc-800 shadow-sm group">
              <div className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory h-60">
                 <img src={`https://picsum.photos/800/600?random=${i+90}`} className="w-full h-full object-cover snap-center shrink-0 transition-transform duration-700 group-hover:scale-105" alt="Memory" />
              </div>
              <div className="p-8">
                 <div className="flex justify-between items-start mb-4">
                    <div className="min-w-0">
                       <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-1">Oct {14+i}, 2023</p>
                       <h4 className="text-xl font-black leading-tight truncate">Day {i}: Desert Exploration</h4>
                    </div>
                    <img src={`https://picsum.photos/100/100?random=${i}`} className="size-10 rounded-full border-2 border-primary/20 shadow-sm shrink-0" alt="User" />
                 </div>
                 <p className="text-sm opacity-70 dark:text-gray-300 leading-relaxed italic mb-8">"The sunset over the desert was unlike anything I've ever seen. The silence of the dunes and the orange glow felt like another world..."</p>
                 <div className="flex gap-6 items-center text-[10px] font-black uppercase tracking-widest text-slate-400 border-t border-gray-50 dark:border-zinc-800 pt-6">
                    <span className="flex items-center gap-1.5 cursor-pointer hover:text-primary transition-colors"><span className="material-symbols-outlined text-[16px] text-primary fill-1">favorite</span> 12</span>
                    <span className="flex items-center gap-1.5 cursor-pointer hover:text-primary transition-colors"><span className="material-symbols-outlined text-[16px]">chat_bubble</span> 4</span>
                 </div>
              </div>
           </div>
         ))}
      </main>
      <div className="fixed bottom-6 right-6 z-40 max-w-md mx-auto">
         <button className="size-16 rounded-full bg-primary text-white shadow-2xl flex items-center justify-center active:scale-95 transition-transform">
            <span className="material-symbols-outlined text-3xl">edit</span>
         </button>
      </div>
   </div>
 );
};

export default TravelJournal;