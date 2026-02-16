
import React from 'react';
import { Screen } from '../types';

interface Props { navigate: (s: Screen) => void; }

const ShareStats: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-dark min-h-screen text-white font-display flex flex-col items-center justify-center p-6 transition-all duration-500">
      <div className="w-full max-w-sm aspect-[9/16] rounded-[3.5rem] overflow-hidden bg-white dark:bg-zinc-900 shadow-[0_50px_100px_rgba(0,0,0,0.8)] flex flex-col relative border-8 border-black">
         <div className="p-12 text-center relative z-10">
            <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">StayNest 2024</span>
            <h1 className="text-3xl font-black leading-tight italic tracking-tighter uppercase dark:text-white">My Travel<br/>Wrapped</h1>
         </div>
        
         <div className="flex-1 flex flex-col items-center justify-center gap-12 relative z-10">
            <div className="grid grid-cols-2 gap-4 w-full px-8">
               <div className="p-6 bg-white/5 border border-white/10 rounded-3xl text-center backdrop-blur-md">
                  <p className="text-3xl font-black text-primary leading-none">24</p>
                  <p className="text-[10px] font-black uppercase opacity-40 mt-1">Cities</p>
               </div>
               <div className="p-6 bg-white/5 border border-white/10 rounded-3xl text-center backdrop-blur-md">
                  <p className="text-3xl font-black text-primary leading-none">12</p>
                  <p className="text-[10px] font-black uppercase opacity-40 mt-1">Safe Stays</p>
               </div>
            </div>
            <div className="size-52 bg-primary rounded-full flex flex-col items-center justify-center shadow-[0_0_60px_rgba(255,56,93,0.5)] border-8 border-white/10 animate-pulse">
               <p className="text-6xl font-black italic tracking-tighter leading-none">42k</p>
               <p className="text-[10px] font-black uppercase tracking-[0.2em] mt-2">Kilometers</p>
            </div>
         </div>

         <div className="p-8 bg-white/5 border-t border-white/5 flex items-center justify-between backdrop-blur-md relative z-10">
            <div className="text-left font-black tracking-tighter italic text-2xl uppercase dark:text-white">StayNest</div>
            <div className="size-16 bg-white p-2 rounded-xl shadow-2xl">
               <img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=StayNestWrapped-Alex" className="size-full" alt="QR" />
            </div>
         </div>

         <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5"></div>
         <button onClick={() => navigate('STATS')} className="absolute top-8 left-8 text-white/30 hover:text-white transition-colors z-20"><span className="material-symbols-outlined text-2xl">close</span></button>
      </div>
      <button className="mt-12 w-full max-w-sm bg-primary text-white font-black py-5 rounded-3xl text-lg shadow-[0_20px_40px_rgba(255,56,93,0.3)] flex items-center justify-center gap-3 active:scale-95 transition-all uppercase tracking-widest">
         <span className="material-symbols-outlined">ios_share</span> SHARE TO STORIES
      </button>
   </div>
 );
};

export default ShareStats;
