
import React from 'react';
import { Screen } from '../types';

interface Props {
 navigate: (s: Screen) => void;
}

const PerksMap: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-light dark:bg-background-dark min-h-screen relative flex flex-col font-display overflow-hidden">
      <header className="bg-primary p-4 flex items-center justify-between text-white shadow-lg sticky top-0 z-50">
        <div onClick={() => navigate('HOME')} className="flex items-center gap-3 cursor-pointer">
          <span className="material-symbols-outlined">arrow_back_ios</span>
          <h1 className="text-lg font-bold">Global Perks Map</h1>
        </div>
        <span className="material-symbols-outlined cursor-pointer">workspace_premium</span>
      </header>

      <div className="flex-1 relative bg-gray-200">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1200/1600?map')" }}>
           <div className="absolute inset-0 bg-black/10"></div>
           <div className="absolute top-4 left-4 right-4 z-20">
             <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-2xl p-3 flex items-center gap-2 border border-gray-100 dark:border-gray-800">
               <span className="material-symbols-outlined text-primary">search</span>
               <input className="border-none focus:ring-0 text-sm w-full bg-transparent dark:text-white" placeholder="Search lounges, restaurants..." />
             </div>
           </div>
          
           <div className="absolute top-1/2 left-1/3 bg-[#A855F7] text-white p-2 rounded-full border-2 border-white shadow-xl animate-bounce">
             <span className="material-symbols-outlined text-lg">meeting_room</span>
           </div>
           <div className="absolute top-1/3 right-1/4 bg-primary text-white p-2 rounded-full border-2 border-white shadow-xl">
             <span className="material-symbols-outlined text-lg">restaurant</span>
           </div>
        </div>
      </div>

      <div className="bg-white dark:bg-zinc-900 rounded-t-3xl p-6 shadow-2xl relative z-10 -mt-6 border-t border-gray-100 dark:border-gray-800">
         <div className="w-12 h-1 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4"></div>
         <h3 className="text-lg font-bold mb-4 dark:text-white">Nearby Perks</h3>
         <div className="flex gap-4 overflow-x-auto no-scrollbar pb-12">
            {[1,2,3].map(i => (
              <div key={i} className="min-w-[280px] bg-gray-50 dark:bg-white/5 rounded-2xl p-4 flex gap-4 border border-gray-100 dark:border-gray-800">
                 <img src={`https://picsum.photos/200/200?random=${i+90}`} className="size-20 rounded-lg object-cover shadow-sm" alt="Perk" />
                 <div className="flex flex-col justify-between flex-1">
                    <div>
                      <p className="text-[10px] font-black uppercase text-[#A855F7]">Lounge</p>
                      <h4 className="font-bold text-sm dark:text-white truncate">Elite Sky Lounge {i}</h4>
                    </div>
                    <button className="bg-primary text-white text-[10px] font-bold py-1.5 px-3 rounded-lg active:scale-95 transition-transform">Claim Perk</button>
                 </div>
              </div>
            ))}
         </div>
      </div>
   </div>
 );
};

export default PerksMap;
