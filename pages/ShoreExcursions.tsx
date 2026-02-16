
import React from 'react';
import { Screen } from '../types';

interface Props { navigate: (s: Screen) => void; }

const ShoreExcursions: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-light dark:bg-background-dark min-h-screen font-display text-slate-900 dark:text-white transition-colors duration-300">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md p-4 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
         <button onClick={() => navigate('GROUP_HUB')} className="p-1"><span className="material-symbols-outlined">arrow_back</span></button>
         <div className="text-center"><h2 className="font-bold">Shore Excursions</h2><p className="text-[10px] font-black opacity-40 uppercase tracking-widest">7-Night Arabian Gulf Cruise</p></div>
         <span className="material-symbols-outlined text-primary cursor-pointer">favorite</span>
      </header>
      <main className="max-w-md mx-auto p-4 space-y-6 pb-32">
         <div className="flex gap-3 overflow-x-auto no-scrollbar mb-4">
            {['Day 2: Dubai', 'Day 3: Muscat', 'Day 4: Abu Dhabi'].map((port, i) => (
              <button key={port} className={`px-5 py-2.5 rounded-xl font-bold text-[10px] uppercase tracking-widest whitespace-nowrap transition-all ${i === 0 ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-white dark:bg-zinc-900 border border-gray-100 dark:border-gray-800 text-gray-500'}`}>{port}</button>
            ))}
         </div>

         {[
           { title: 'Premium Desert Safari', price: '$85', info: '6 hours • Strenuous', img: 'https://picsum.photos/800/500?random=77' },
           { title: 'Burj Khalifa & Fountain', price: '$110', info: '4 hours • Easy', img: 'https://picsum.photos/800/500?random=78' }
         ].map(exc => (
           <div key={exc.title} className="rounded-3xl overflow-hidden bg-white dark:bg-zinc-900 border border-gray-100 dark:border-gray-800 shadow-md group hover:shadow-xl transition-all">
              <div className="relative h-52 overflow-hidden">
                <img src={exc.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Excursion" />
                <div className="absolute top-4 right-4 bg-white/30 backdrop-blur-md p-1.5 rounded-full text-white"><span className="material-symbols-outlined text-[20px]">info</span></div>
              </div>
              <div className="p-6">
                 <div className="flex justify-between items-center mb-4"><span className="text-[10px] font-black text-primary uppercase tracking-widest">Dubai</span><div className="flex items-center gap-1 font-bold text-sm dark:text-white"><span className="material-symbols-outlined text-yellow-400 fill-1 text-base">star</span> 4.8</div></div>
                 <h3 className="text-xl font-black mb-1 dark:text-white leading-tight">{exc.title}</h3>
                 <p className="text-xs opacity-50 dark:text-gray-400 mb-6 font-medium">{exc.info}</p>
                 <div className="flex justify-between items-center border-t border-gray-100 dark:border-gray-800 pt-6">
                    <p className="text-xl font-black text-primary">{exc.price}<span className="text-[10px] font-bold opacity-30 dark:text-white ml-1 uppercase">/ person</span></p>
                    <button className="bg-primary text-white font-black px-6 py-3 rounded-xl text-[10px] uppercase tracking-widest shadow-xl shadow-primary/20 active:scale-95 transition-transform">Add to Trip</button>
                 </div>
              </div>
           </div>
         ))}
      </main>
   </div>
 );
};

export default ShoreExcursions;
