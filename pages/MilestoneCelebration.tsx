
import React from 'react';
import { Screen } from '../types';

interface Props { navigate: (s: Screen) => void; }

const MilestoneCelebration: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm font-display">
     <div className="relative w-full max-w-md bg-background-dark rounded-2xl overflow-hidden shadow-2xl border border-white/10">
       <div className="relative pt-10 pb-6 overflow-hidden">
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ff385d 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
         <button onClick={() => navigate('PROFILE')} className="absolute top-4 right-4 text-white/50 hover:text-white z-20">
           <span className="material-symbols-outlined">close</span>
         </button>
         <div className="relative flex justify-center items-center">
           <div className="w-48 h-48 bg-cover bg-center rounded-full shadow-[0_0_40px_rgba(255,56,93,0.3)]" style={{ backgroundImage: "url('https://picsum.photos/400/400?japan')" }}></div>
           <div className="absolute -bottom-2 bg-primary px-4 py-1 rounded-full border-2 border-background-dark shadow-lg">
             <span className="text-white text-[10px] font-bold uppercase tracking-widest">Level 5 Unlocked</span>
           </div>
         </div>
       </div>

       <div className="px-6 text-center">
         <h1 className="text-white text-3xl font-extrabold mb-2">Milestone Reached!</h1>
         <p className="text-primary font-semibold text-lg">5th Country Visited: Japan!</p>
       </div>

       <div className="grid grid-cols-2 gap-3 p-6">
         <div className="p-4 bg-white/5 border border-white/5 rounded-xl">
            <p className="text-[10px] uppercase font-bold text-white/50 mb-1">Traveled</p>
            <p className="text-xl font-black text-white">12,000 km</p>
         </div>
         <div className="p-4 bg-white/5 border border-white/5 rounded-xl">
            <p className="text-[10px] uppercase font-bold text-white/50 mb-1">Reviews</p>
            <p className="text-xl font-black text-white">15 verified</p>
         </div>
       </div>

       <div className="p-6 pt-0 space-y-4">
          <button onClick={() => navigate('LEVEL_UP')} className="w-full h-14 rounded-full bg-primary text-white font-black shadow-lg active:scale-95 transition-transform">CLAIM YOUR BADGE</button>
          <button onClick={() => navigate('PROFILE')} className="w-full text-white/50 text-sm font-bold">Maybe later</button>
       </div>
     </div>
   </div>
 );
};

export default MilestoneCelebration;
