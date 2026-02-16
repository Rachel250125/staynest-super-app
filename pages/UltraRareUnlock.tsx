import React from 'react';
import { Screen } from '../types';

interface Props { navigate: (s: Screen) => void; }

const UltraRareUnlock: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-dark min-h-screen text-white font-display flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/20 blur-[150px] rounded-full animate-pulse scale-75"></div>
      <div className="relative z-10 max-w-sm w-full">
         <h1 className="text-6xl font-black italic tracking-tighter leading-none mb-2 bg-clip-text text-transparent bg-gradient-to-b from-yellow-400 to-primary drop-shadow-[0_0_30px_rgba(255,56,93,0.5)] uppercase">Ultra Rare<br/>Unlock!</h1>
         <p className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40 mb-16">Globetrotter Elite Status</p>

         <div className="relative mb-20 flex justify-center">
            <div className="absolute inset-0 bg-primary/40 blur-[60px] rounded-full scale-110 animate-pulse"></div>
            <img src="https://picsum.photos/500/500?random=mythic" className="w-full aspect-square object-contain relative z-10 drop-shadow-[0_0_50px_rgba(255,56,93,0.6)] scale-110" alt="Mythic Badge" />
         </div>

         <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 mb-12 backdrop-blur-md shadow-2xl">
            <div className="flex justify-between items-center mb-6">
               <p className="text-[10px] font-black uppercase opacity-40 tracking-widest">Rarity Percentile</p>
               <span className="bg-primary/20 text-primary px-4 py-1.5 rounded-full text-[10px] font-black uppercase border border-primary/30 shadow-lg tracking-widest">Mythic</span>
            </div>
            <p className="text-5xl font-black mb-2 leading-none tracking-tighter italic">Only 0.5%</p>
            <p className="text-sm opacity-60 font-medium leading-tight">Of total StayNest travelers have achieved this milestone in 2024.</p>
         </div>

         <button onClick={() => navigate('PROFILE')} className="w-full bg-white text-black py-5 rounded-[2rem] font-black text-lg shadow-[0_20px_40px_rgba(255,255,255,0.2)] active:scale-[0.98] transition-all uppercase tracking-widest">Claim & Show Off</button>
      </div>
   </div>
 );
};

export default UltraRareUnlock;