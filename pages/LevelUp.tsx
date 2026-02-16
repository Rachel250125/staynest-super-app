
import React from 'react';
import { Screen } from '../types';

interface Props {
 navigate: (s: Screen) => void;
}

const LevelUp: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-dark font-display text-white h-screen overflow-hidden flex flex-col">
     <header className="p-4 flex justify-between">
       <button onClick={() => navigate('PROFILE')} className="size-10 bg-white/10 rounded-full flex items-center justify-center"><span className="material-symbols-outlined">close</span></button>
       <button className="size-10 bg-white/10 rounded-full flex items-center justify-center"><span className="material-symbols-outlined">share</span></button>
     </header>

     <main className="flex-1 flex flex-col items-center justify-center p-6">
       <h1 className="text-4xl font-black tracking-widest mb-2 drop-shadow-[0_0_15px_rgba(255,215,0,0.6)]">LEVEL UP!</h1>
       <p className="text-primary font-bold uppercase tracking-widest text-xs mb-8">Achievement Unlocked</p>

       <div className="relative group mb-12">
         <div className="absolute -inset-10 bg-yellow-500/10 blur-3xl rounded-full"></div>
         <div className="hexagon-shape w-48 h-56 bg-gradient-to-b from-yellow-400 via-yellow-600 to-yellow-900 p-1 flex items-center justify-center">
           <div className="hexagon-shape w-full h-full bg-zinc-950 flex flex-col items-center justify-center">
             <span className="material-symbols-outlined text-7xl text-yellow-500 fill-1">workspace_premium</span>
             <span className="text-yellow-500 font-black text-xl mt-2">GOLD TIER</span>
           </div>
         </div>
       </div>

       <div className="text-center mb-8">
         <h2 className="text-2xl font-bold">You've reached Gold Tier</h2>
         <p className="text-white/60 mt-1">Welcome to the elite StayNest community</p>
       </div>

       <div className="w-full space-y-3">
         <p className="text-[10px] font-bold uppercase opacity-50 tracking-widest mb-2">New Perks Unlocked</p>
         {[
           { icon: 'auto_awesome', label: 'Double Nest Points', sub: 'Earn 2x on every booking' },
           { icon: 'forum', label: 'Exclusive Forum Access', sub: 'Connect with top travelers' }
         ].map(p => (
           <div key={p.label} className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center gap-4">
             <div className="size-12 bg-primary/20 rounded-xl flex items-center justify-center"><span className="material-symbols-outlined text-primary">{p.icon}</span></div>
             <div className="flex-1">
               <h4 className="font-bold text-sm">{p.label}</h4>
               <p className="text-xs opacity-60">{p.sub}</p>
             </div>
             <span className="material-symbols-outlined text-yellow-500">check_circle</span>
           </div>
         ))}
       </div>
     </main>

     <footer className="p-6">
       <button
         onClick={() => navigate('PROFILE')}
         className="w-full bg-primary py-5 rounded-full font-black text-lg shadow-primary/40 shadow-lg active:scale-95 transition-all"
       >
         Claim & Share
       </button>
     </footer>
     <style>{`
        .hexagon-shape {
            clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
     `}</style>
   </div>
 );
};

export default LevelUp;
