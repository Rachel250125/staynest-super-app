
import React from 'react';
import { Screen } from '../types';

interface Props {
 navigate: (s: Screen) => void;
}

const Insurance: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-dark min-h-screen text-white font-display">
     <header className="p-4 flex items-center justify-between border-b border-white/5 sticky top-0 z-50 bg-background-dark/80 backdrop-blur-md">
        <button onClick={() => navigate('GROUP_HUB')} className="p-1"><span className="material-symbols-outlined">arrow_back_ios</span></button>
        <div className="text-center"><h2 className="font-bold text-lg">Group Insurance</h2><p className="text-xs opacity-50">6 Travelers • 14 Days</p></div>
        <span className="material-symbols-outlined cursor-pointer">info</span>
     </header>
     <main className="max-w-md mx-auto p-4 pb-32">
        <div className="p-5 rounded-2xl bg-zinc-900 border border-white/10 mb-8">
           <h3 className="text-xl font-black mb-4">Elite Safety Plus</h3>
           <div className="space-y-3 mb-6">
              <div className="flex gap-2 items-center text-sm opacity-80"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Medical emergencies (Up to $50k)</div>
              <div className="flex gap-2 items-center text-sm opacity-80"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> 24/7 Priority Allergy Hotline</div>
              <div className="flex gap-2 items-center text-sm opacity-80"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Emergency EpiPen Delivery</div>
           </div>
           <div className="flex justify-between items-end border-t border-white/5 pt-4">
              <div><p className="text-xs opacity-50 line-through">$224.00</p><p className="text-2xl font-black">$184.00</p></div>
              <span className="text-primary text-[10px] font-black uppercase">Plus Discount</span>
           </div>
        </div>
        <button onClick={() => navigate('CONFIRMATION')} className="w-full bg-primary text-white py-4 rounded-xl font-bold shadow-lg shadow-primary/20 active:scale-95 transition-transform">Add to Group Booking</button>
     </main>
   </div>
 );
};

export default Insurance;
