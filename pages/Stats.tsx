import React from 'react';
import { Screen } from '../types';

interface Props {
 navigate: (s: Screen) => void;
}

const Stats: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-light dark:bg-background-dark font-display text-[#1d0c0f] dark:text-white transition-colors duration-300 min-h-screen">
     <div className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
       <div className="flex items-center p-4 justify-between max-w-md mx-auto">
         <div onClick={() => navigate('PROFILE')} className="size-10 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
           <span className="material-symbols-outlined">arrow_back_ios_new</span>
         </div>
         <h2 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center">Travel Statistics</h2>
         <div className="size-10 flex items-center justify-center cursor-pointer">
           <span className="material-symbols-outlined">share</span>
         </div>
       </div>
     </div>
     <main className="max-w-md mx-auto pb-24 pt-4">
       <div className="flex gap-3 px-4 overflow-x-auto no-scrollbar">
         <div className="flex min-w-[140px] flex-1 flex-col gap-1 rounded-xl p-4 border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
           <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">Countries</p>
           <div className="flex items-end gap-1"><p className="text-2xl font-bold">14</p><span className="material-symbols-outlined text-primary text-sm mb-1">public</span></div>
         </div>
         <div className="flex min-w-[140px] flex-1 flex-col gap-1 rounded-xl p-4 border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
           <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">Distance</p>
           <div className="flex items-end gap-1"><p className="text-2xl font-bold">120k</p><span className="text-sm font-semibold mb-0.5">km</span></div>
         </div>
       </div>
       <div className="px-4 py-6">
         <div className="w-full aspect-[4/3] bg-primary/5 rounded-xl border-2 border-primary/10 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-6xl opacity-30">map</span>
            <p className="absolute text-xs font-bold text-primary/40 uppercase tracking-widest mt-24">Interactive Travel Map</p>
         </div>
       </div>
       <div className="px-4">
         <h3 className="text-lg font-bold mb-4">Top Destinations</h3>
         <div className="space-y-3">
           {['Japan', 'France', 'Italy'].map((dest, i) => (
             <div key={dest} className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
               <div className="flex items-center gap-3">
                 <div className="size-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xl shadow-sm">{i === 0 ? '🇯🇵' : i === 1 ? '🇫🇷' : '🇮🇹'}</div>
                 <div><p className="font-bold text-sm">{dest}</p><p className="text-xs text-gray-500">{6-i} Stays</p></div>
               </div>
               <span className="text-xs font-bold text-gray-400">#{i+1}</span>
             </div>
           ))}
         </div>
       </div>
     </main>
   </div>
 );
};

export default Stats;