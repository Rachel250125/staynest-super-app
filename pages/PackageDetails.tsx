
import React from 'react';
import { Screen } from '../types';

interface Props { navigate: (s: Screen) => void; }

const PackageDetails: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-light dark:bg-background-dark min-h-screen font-display">
      <div className="h-80 w-full relative">
         <img src="https://picsum.photos/800/600?random=package" className="w-full h-full object-cover" alt="Package" />
         <button onClick={() => navigate('SEARCH_RESULTS')} className="absolute top-4 left-4 size-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center shadow-lg border border-white/20"><span className="material-symbols-outlined">arrow_back</span></button>
      </div>
      <main className="max-w-md mx-auto p-4 -mt-8 relative z-10 pb-32">
         <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-2xl border border-gray-100 dark:border-gray-800 mb-8">
            <span className="bg-primary/10 text-primary text-[10px] font-black uppercase px-2 py-1 rounded inline-block">Savings Event</span>
            <h1 className="text-3xl font-black mt-2 mb-1 text-slate-900 dark:text-white leading-tight">Dubai to Paris Exclusive</h1>
            <p className="text-gray-500 font-medium">Flight + 5 Nights + VIP Support</p>
            <div className="flex gap-4 mt-6 pt-6 border-t border-gray-50 dark:border-gray-800">
               <div className="flex-1 text-center"><span className="material-symbols-outlined text-primary">flight</span><p className="text-[10px] font-bold mt-1 uppercase dark:text-gray-400">Flight</p></div>
               <div className="flex-1 text-center"><span className="material-symbols-outlined text-primary">hotel</span><p className="text-[10px] font-bold mt-1 uppercase dark:text-gray-400">Stay</p></div>
               <div className="flex-1 text-center"><span className="material-symbols-outlined text-primary">directions_car</span><p className="text-[10px] font-bold mt-1 uppercase dark:text-gray-400">Transfer</p></div>
               <div className="flex-1 text-center"><span className="material-symbols-outlined text-primary">support_agent</span><p className="text-[10px] font-bold mt-1 uppercase dark:text-gray-400">VIP</p></div>
            </div>
         </div>

         <h3 className="font-black text-xl mb-4 text-slate-900 dark:text-white">What's Included</h3>
         <div className="space-y-3">
            <div className="p-4 bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
               <p className="font-bold mb-1 dark:text-white">Indigo Airlines</p>
               <p className="text-xs opacity-50 dark:text-gray-400">Economy • Non-stop • 7h 15m</p>
            </div>
            <div className="p-4 bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
               <p className="font-bold mb-1 dark:text-white">Grand Plaza Paris</p>
               <p className="text-xs opacity-50 dark:text-gray-400">Deluxe City View Room • 5 Nights</p>
            </div>
         </div>
      </main>
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-white/90 dark:bg-background-dark/90 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center z-50 max-w-md mx-auto">
         <div><p className="text-[10px] font-black opacity-40 uppercase dark:text-gray-400">Total Package</p><p className="text-2xl font-black dark:text-white">$2,695</p></div>
         <button onClick={() => navigate('PACKAGE_CHECKOUT')} className="bg-primary text-white font-black px-12 py-4 rounded-xl shadow-lg active:scale-95 transition-transform">BOOK NOW</button>
      </div>
   </div>
 );
};

export default PackageDetails;
