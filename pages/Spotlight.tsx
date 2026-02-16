import React from 'react';
import { Screen } from '../types';

interface Props { navigate: (s: Screen) => void; }

const Spotlight: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="relative flex min-h-screen w-full flex-col max-w-[480px] mx-auto overflow-x-hidden pb-24 bg-background-dark text-white font-display">
     <div className="flex items-center bg-background-dark p-4 pb-2 justify-between sticky top-0 z-50">
       <div onClick={() => navigate('COMMUNITY')} className="text-white flex size-12 shrink-0 items-center cursor-pointer">
         <span className="material-symbols-outlined">arrow_back</span>
       </div>
       <h2 className="text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center">Spotlight</h2>
       <div className="flex w-12 items-center justify-end">
         <span className="material-symbols-outlined text-white cursor-pointer">share</span>
       </div>
     </div>

     <div className="flex p-4 mt-4">
       <div className="flex w-full flex-col gap-4 items-center">
         <div className="relative">
           <div className="absolute inset-0 rounded-full border-4 border-primary shadow-[0_0_20px_2px_rgba(255,56,93,0.4)] opacity-80"></div>
           <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-36 w-36 border-4 border-background-dark relative z-10" style={{ backgroundImage: "url('https://picsum.photos/400/400?random=88')" }}></div>
         </div>
         <div className="text-center">
           <p className="text-white text-2xl font-bold">Sarah Jenkins</p>
           <p className="text-primary text-base font-semibold">Traveler of the Month</p>
           <p className="text-white/60 text-sm">StayNest Plus Member since 2021</p>
         </div>
       </div>
     </div>

     <div className="px-6 py-2 text-center">
       <p className="text-white/90 text-base leading-relaxed">
         Sarah is an eco-conscious traveler who explored the lush landscapes of Bali this year, focusing on sustainable luxury and local culture.
       </p>
     </div>

     <div className="px-4 mt-8">
       <h3 className="text-white text-lg font-bold mb-4">Travel Stats</h3>
       <div className="grid grid-cols-2 gap-4">
         {[
           { icon: 'public', val: '14', label: 'Countries in 2024' },
           { icon: 'verified_user', val: '100%', label: 'Allergy-Safe Verified' },
           { icon: 'hotel', val: '42', label: 'StayNest Bookings' },
           { icon: 'stars', val: 'Elite', label: 'Reviewer Status' }
         ].map(stat => (
           <div key={stat.label} className="bg-white/5 border border-white/5 p-4 rounded-xl flex flex-col gap-1">
             <span className="material-symbols-outlined text-primary mb-2">{stat.icon}</span>
             <p className="text-white text-xl font-bold">{stat.val}</p>
             <p className="text-white/50 text-[10px] uppercase font-semibold">{stat.label}</p>
           </div>
         ))}
       </div>
     </div>
   </div>
 );
};

export default Spotlight;