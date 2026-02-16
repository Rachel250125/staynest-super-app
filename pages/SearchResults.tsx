
import React from 'react';
import { Screen } from '../types';

interface Props {
 navigate: (s: Screen) => void;
}

const SearchResults: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased min-h-screen transition-colors duration-300">
     <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
       <div className="flex items-center p-4 gap-3">
         <button onClick={() => navigate('HOME')} className="material-symbols-outlined text-gray-600 dark:text-gray-300">arrow_back_ios</button>
         <div className="flex-1 flex items-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full py-2 px-4 shadow-sm cursor-pointer">
           <span className="material-symbols-outlined text-primary mr-3">search</span>
           <div className="flex flex-col">
             <h2 className="text-sm font-bold leading-tight">Goa</h2>
             <p className="text-[10px] text-slate-500 font-medium">Any week · 2 guests</p>
           </div>
         </div>
         <button className="flex items-center justify-center size-10 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm">
           <span className="material-symbols-outlined text-slate-700 dark:text-slate-200">tune</span>
         </button>
       </div>
       <div className="flex gap-2 px-4 pb-3 overflow-x-auto no-scrollbar">
         <button className="flex h-9 shrink-0 items-center justify-center gap-x-1 rounded-full border-2 border-primary bg-primary/5 px-4 text-primary">
           <span className="text-xs font-bold uppercase tracking-wider">Allergy-Safe</span>
         </button>
         <button className="flex h-9 shrink-0 items-center justify-center gap-x-1 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4">
           <span className="text-xs font-semibold">Price</span>
           <span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
         </button>
         <button className="flex h-9 shrink-0 items-center justify-center gap-x-1 rounded-full border border-green-100 bg-green-50 dark:bg-green-900/20 px-4">
           <span className="text-xs font-semibold text-green-700 dark:text-green-400">🟢 Free Cancellation</span>
         </button>
       </div>
     </header>

     <main className="p-4 space-y-4 max-w-md mx-auto pb-32">
       <div className="flex flex-col overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700 group cursor-pointer" onClick={() => navigate('DETAILS')}>
         <div className="relative w-full aspect-[16/10] overflow-hidden">
           <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: "url('https://picsum.photos/800/500?resort')" }}></div>
           <button className="absolute top-3 right-3 size-9 flex items-center justify-center rounded-full bg-white/90 dark:bg-black/40 text-gray-900 dark:text-white shadow-md">
             <span className="material-symbols-outlined text-xl">favorite</span>
           </button>
           <div className="absolute bottom-3 left-3 flex flex-wrap gap-1 max-w-[80%]">
             <span className="bg-black/60 backdrop-blur-md text-white text-[10px] px-2 py-1 rounded font-bold uppercase tracking-widest">EpiPen Ready</span>
             <span className="bg-black/60 backdrop-blur-md text-white text-[10px] px-2 py-1 rounded font-bold uppercase tracking-widest">Nut-Free</span>
           </div>
         </div>
         <div className="p-4 flex flex-col">
           <h3 className="text-lg font-bold leading-tight dark:text-white">Estrela Do Mar Beach Resort</h3>
           <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 flex items-center gap-1">
             <span className="material-symbols-outlined text-sm">location_on</span>
             Calangute • <span className="text-green-500 font-semibold uppercase text-[10px] tracking-widest">1min to beach</span>
           </p>
           <div className="flex justify-between items-end mt-2 pt-3 border-t border-gray-100 dark:border-gray-700">
             <div className="flex flex-col">
               <div className="flex items-baseline gap-1">
                 <span className="text-xl font-black text-primary leading-none">₹7,911</span>
                 <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">/ night</span>
               </div>
             </div>
             <button onClick={() => navigate('DETAILS')} className="bg-primary text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-lg active:scale-95 transition-transform uppercase tracking-widest">
               Book Now
             </button>
           </div>
         </div>
       </div>
     </main>

     <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 h-20 flex items-center justify-around px-6 z-50 max-w-md mx-auto">
       <button onClick={() => navigate('HOME')} className="flex flex-col items-center gap-1 text-primary">
         <span className="material-symbols-outlined">explore</span>
         <span className="text-[10px] font-bold">Explore</span>
       </button>
       <button onClick={() => navigate('COMMUNITY')} className="flex flex-col items-center gap-1 text-gray-400">
         <span className="material-symbols-outlined">forum</span>
         <span className="text-[10px] font-medium">Community</span>
       </button>
       <button onClick={() => navigate('PROFILE')} className="flex flex-col items-center gap-1 text-gray-400">
         <span className="material-symbols-outlined">person</span>
         <span className="text-[10px] font-medium">Profile</span>
       </button>
     </nav>
   </div>
 );
};

export default SearchResults;
