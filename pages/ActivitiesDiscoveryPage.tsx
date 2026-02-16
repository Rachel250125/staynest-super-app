import React from 'react';
import { Screen } from '../types';

interface Props { navigate: (s: Screen) => void; }

const ActivitiesDiscoveryPage: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-light dark:bg-background-dark min-h-screen font-display text-[#1d0c0f] dark:text-white transition-colors duration-300">
     <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-4 pt-6 pb-2 border-b border-gray-100 dark:border-gray-800">
       <div className="flex items-center gap-3">
         <button onClick={() => navigate('HOME')} className="size-10 rounded-full flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/5">
           <span className="material-symbols-outlined">arrow_back</span>
         </button>
         <h1 className="text-xl font-bold flex-1 text-center">Discover Activities</h1>
         <div className="size-10 flex items-center justify-center"><span className="material-symbols-outlined">tune</span></div>
       </div>
     </header>

     <main className="max-w-md mx-auto pb-32">
        {/* Search & Suggestions */}
        <div className="p-4">
           <div className="bg-white dark:bg-[#2d1a1e] rounded-xl px-4 py-3 flex items-center gap-3 border border-gray-100 dark:border-gray-800 shadow-sm mb-6">
              <span className="material-symbols-outlined text-gray-400">search</span>
              <input className="bg-transparent border-none focus:ring-0 text-sm w-full outline-none" placeholder="Find safe adventures..." />
           </div>

           <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
              {['Allergy-Safe', 'Adrenaline', 'Cultural', 'Family', 'Solo'].map((cat, i) => (
                 <button key={cat} className={`px-4 py-2 rounded-full font-bold text-xs whitespace-nowrap transition-all ${i === 0 ? 'bg-primary text-white shadow-lg' : 'bg-gray-100 dark:bg-zinc-800 text-gray-500'}`}>
                    {cat}
                 </button>
              ))}
           </div>
        </div>

        {/* Featured Card */}
        <div className="px-4 mb-8" onClick={() => navigate('ACTIVITY_BOOKING_VOUCHER_QR')}>
           <div className="relative rounded-[2rem] overflow-hidden aspect-[16/10] shadow-2xl group cursor-pointer">
              <img src="https://picsum.photos/800/600?kayak" className="size-full object-cover transition-transform duration-[10s] group-hover:scale-110" alt="Featured" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                 <div className="flex items-center gap-2 mb-2">
                    <span className="bg-primary text-white text-[8px] font-black uppercase px-2 py-0.5 rounded tracking-widest">Featured</span>
                    <span className="bg-white/20 backdrop-blur-md text-white text-[8px] font-black uppercase px-2 py-0.5 rounded tracking-widest border border-white/10">Nut-Free Safe</span>
                 </div>
                 <h2 className="text-white text-2xl font-black italic uppercase leading-none mb-1">Coastal Kayaking</h2>
                 <p className="text-white/60 text-xs font-bold uppercase tracking-widest">Dubai Marina • 3 Hours</p>
              </div>
           </div>
        </div>

        {/* Trending List */}
        <div className="px-4 space-y-6">
           <div className="flex justify-between items-end">
              <h3 className="text-lg font-black uppercase tracking-tighter italic">Trending Adventures</h3>
              <span className="text-[10px] font-black text-primary uppercase underline">View All</span>
           </div>
           {[1, 2].map(i => (
              <div key={i} className="flex gap-4 p-4 bg-white dark:bg-zinc-900 rounded-3xl border border-gray-50 dark:border-gray-800 shadow-sm active:scale-[0.98] transition-transform cursor-pointer" onClick={() => navigate('DETAILS')}>
                 <img src={`https://picsum.photos/400/400?random=${i+10}`} className="size-24 rounded-2xl object-cover shrink-0" alt="Activity" />
                 <div className="flex flex-col justify-center min-w-0">
                    <h4 className="font-bold text-base leading-tight truncate">Hot Air Balloon Safari</h4>
                    <p className="text-xs text-gray-500 mt-1 mb-3">⭐ 4.9 • 850 reviews</p>
                    <div className="flex items-center justify-between">
                       <p className="text-primary font-black text-lg">$120</p>
                       <span className="material-symbols-outlined text-gray-300">chevron_right</span>
                    </div>
                 </div>
              </div>
           ))}
        </div>
     </main>
   </div>
 );
};

export default ActivitiesDiscoveryPage;