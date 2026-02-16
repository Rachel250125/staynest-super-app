
import React from 'react';
import { Screen } from '../types';

interface Props { navigate: (s: Screen) => void; }

const SafeDiningMap: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-light dark:bg-background-dark min-h-screen font-display flex flex-col text-[#130e1b] dark:text-white">
      <header className="p-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between sticky top-0 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md z-50">
         <button onClick={() => navigate('HOME')} className="p-1"><span className="material-symbols-outlined">arrow_back</span></button>
         <div className="text-center"><h2 className="font-bold">Safe Dining</h2><p className="text-[10px] text-primary font-black uppercase tracking-widest">Verified Map</p></div>
         <span className="material-symbols-outlined cursor-pointer">filter_list</span>
      </header>

      <div className="flex-1 relative bg-gray-200">
         <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1200/1600?map-city')" }}>
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary p-2 rounded-full border-2 border-white shadow-2xl animate-pulse"><span className="material-symbols-outlined text-white text-lg">restaurant</span></div>
            <div className="absolute top-1/3 left-1/4 bg-green-500 p-1.5 rounded-full border-2 border-white shadow-2xl"><span className="material-symbols-outlined text-white text-sm font-black">verified</span></div>
            <div className="absolute bottom-1/4 right-1/3 bg-[#A855F7] p-1.5 rounded-full border-2 border-white shadow-2xl"><span className="material-symbols-outlined text-white text-sm font-black">local_cafe</span></div>
         </div>

         <div className="absolute bottom-6 left-4 right-4 z-20 max-w-md mx-auto">
            <div className="bg-white dark:bg-zinc-900 rounded-[2rem] p-6 shadow-2xl border border-black/5 dark:border-white/10 flex gap-4 items-center group cursor-pointer hover:scale-[1.02] transition-transform">
               <img src="https://picsum.photos/200/200?restaurant" className="size-20 rounded-2xl object-cover shadow-sm" alt="Dine" />
               <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-black text-green-500 uppercase mb-1 tracking-widest">9.8 Safety Score</p>
                  <h3 className="text-lg font-black leading-none mb-2 truncate">The Green Bistro</h3>
                  <div className="flex gap-2"><span className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded text-[10px] font-bold uppercase">Nut-Free</span><span className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded text-[10px] font-bold uppercase">EpiPen on Site</span></div>
               </div>
               <button className="bg-primary size-12 shrink-0 rounded-full flex items-center justify-center text-white shadow-lg active:scale-90 transition-transform"><span className="material-symbols-outlined">directions</span></button>
            </div>
         </div>
      </div>
   </div>
 );
};

export default SafeDiningMap;
