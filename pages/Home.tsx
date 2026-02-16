
import React, { useState } from 'react';
import { Screen, Activity } from '../types';
import { ACTIVITIES } from '../constants';
import { getAIRecommendation } from '../services/geminiService';

interface Props {
 onSelectActivity: (a: Activity) => void;
 navigate: (s: Screen) => void;
}

const Home: React.FC<Props> = ({ onSelectActivity, navigate }) => {
 const [aiMessage, setAiMessage] = useState<string | null>(null);
 const [isAiLoading, setIsAiLoading] = useState(false);

 const handleAiHelp = async () => {
   setIsAiLoading(true);
   const msg = await getAIRecommendation("Suggest a unique activity in Dubai for a family with a nut allergy.");
   setAiMessage(msg);
   setIsAiLoading(false);
   setTimeout(() => setAiMessage(null), 8000);
 };

 return (
   <div className="pb-32">
     <div className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-4 pt-6 pb-2">
       <div className="flex items-center gap-3">
         <div onClick={() => navigate('SEARCH_RESULTS')} className="flex-1 flex items-center bg-white dark:bg-[#2d1a1e] rounded-full px-4 py-3 shadow-sm border border-gray-100 dark:border-gray-800 cursor-pointer">
           <span className="material-symbols-outlined text-gray-400 mr-2">search</span>
           <span className="text-sm text-gray-400">Where to next?</span>
           <div className="ml-auto flex items-center gap-2">
             <span className="material-symbols-outlined text-gray-400">tune</span>
           </div>
         </div>
         <div className="size-10 rounded-full bg-gray-200 overflow-hidden shrink-0 cursor-pointer border-2 border-primary/20" onClick={() => navigate('PROFILE')}>
           <img className="w-full h-full object-cover" src="https://picsum.photos/100/100?random=1" alt="User" />
         </div>
       </div>
     </div>

     <div className="flex gap-2 px-4 py-3 overflow-x-auto no-scrollbar">
       {['Stays', 'Flights', 'Homestays', 'Packages', 'Cruises', 'Activities'].map((cat, idx) => (
         <div key={cat} onClick={() => navigate('SEARCH_RESULTS')} className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full px-5 shadow-sm cursor-pointer border ${idx === 0 ? 'bg-primary text-white border-primary' : 'bg-white dark:bg-[#2d1a1e] border-gray-100 dark:border-gray-800'}`}>
           <p className="text-sm font-semibold">{cat}</p>
         </div>
       ))}
     </div>

     <div className="px-4 py-4" onClick={() => navigate('SAVINGS_EVENT')}>
       <div className="relative group cursor-pointer overflow-hidden rounded-xl h-48 shadow-lg">
          <img src="https://picsum.photos/800/600?paris" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Paris" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
          <div className="absolute bottom-4 left-4 right-4">
             <span className="bg-primary text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest">Limited Offer</span>
             <h2 className="text-white text-2xl font-black mt-1">Paris is calling.</h2>
             <p className="text-white/80 text-xs">Save up to 40% on boutique stays</p>
          </div>
       </div>
     </div>

     <div className="py-2">
       <div className="flex items-center justify-between px-4 pb-3">
         <h2 className="text-lg font-bold tracking-tight">Trending Activities</h2>
         <button onClick={() => navigate('SEARCH_RESULTS')} className="text-primary text-sm font-semibold">View all</button>
       </div>
       <div className="flex overflow-x-auto no-scrollbar gap-4 px-4 pb-6">
         {ACTIVITIES.map(act => (
           <div key={act.id} className="flex flex-col gap-3 min-w-[200px] w-[200px] cursor-pointer" onClick={() => onSelectActivity(act)}>
             <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-200 group">
               <img src={act.image} className="size-full object-cover transition-transform group-hover:scale-110" alt={act.title} />
               <div className="absolute top-3 right-3 bg-white/30 backdrop-blur-md p-1.5 rounded-full text-white"><span className="material-symbols-outlined text-[18px]">favorite</span></div>
             </div>
             <div className="px-1">
               <h3 className="text-sm font-bold leading-snug truncate">{act.title}</h3>
               <div className="flex items-center justify-between mt-1">
                 <p className="text-xs text-gray-500">⭐ {act.rating}</p>
                 <p className="text-accent-price font-bold text-sm">${act.price}</p>
               </div>
             </div>
           </div>
         ))}
       </div>
     </div>

     <div className="fixed bottom-24 right-4 z-50 flex flex-col items-end gap-3 pointer-events-none">
       {aiMessage && (
         <div className="bg-white dark:bg-zinc-800 px-5 py-3 rounded-t-3xl rounded-bl-3xl shadow-xl border border-primary/10 pointer-events-auto max-w-[220px] animate-in fade-in slide-in-from-bottom-2">
           <p className="text-sm font-bold text-zinc-800 dark:text-zinc-100">✨ {aiMessage}</p>
         </div>
       )}
       <button
         onClick={handleAiHelp}
         disabled={isAiLoading}
         className="pointer-events-auto size-16 bg-primary rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-105 active:scale-95 transition-transform ring-4 ring-primary/10"
       >
         <span className="material-symbols-outlined text-[32px]">{isAiLoading ? 'sync' : 'auto_awesome'}</span>
       </button>
     </div>
   </div>
 );
};

export default Home;
