
import React from 'react';
import { Screen } from '../types';

interface Props { navigate: (s: Screen) => void; }

const HolidayGuide: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white pb-32 min-h-screen">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md p-4 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
        <button onClick={() => navigate('HOME')} className="p-1"><span className="material-symbols-outlined">arrow_back_ios</span></button>
        <h2 className="font-bold">StayNest Holiday Guide</h2>
        <span className="material-symbols-outlined">search</span>
      </header>
      <main className="max-w-md mx-auto">
         <div className="p-4">
            <div className="relative h-80 rounded-2xl overflow-hidden bg-cover bg-center flex flex-col justify-end p-8 shadow-xl" style={{ backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.8), transparent), url('https://picsum.photos/800/600?snow')" }}>
               <span className="text-yellow-400 font-black text-xs uppercase tracking-[0.3em] mb-2">Holiday 2024</span>
               <h1 className="text-white text-4xl font-black leading-tight">Winter Wishlist</h1>
               <p className="text-white/80 mt-2">Discover curated gifts for the global explorer.</p>
            </div>
         </div>
        
         <div className="px-4 py-6">
            <h3 className="text-xl font-bold mb-4">Top Holiday Deals</h3>
            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4">
               {[1,2,3].map(i => (
                 <div key={i} className="min-w-[240px] bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm">
                    <img src={`https://picsum.photos/400/400?random=${i+140}`} className="w-full aspect-square object-cover" alt="Gift" />
                    <div className="p-4">
                       <h4 className="font-bold text-sm">Luxury Cabin Escape</h4>
                       <p className="text-primary font-black mt-1">$349.00</p>
                       <button className="w-full bg-primary text-white py-2 rounded-lg font-bold text-xs mt-3 active:scale-95 transition-transform">Gift This</button>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </main>
   </div>
 );
};

export default HolidayGuide;
