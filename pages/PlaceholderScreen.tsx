import React from 'react';
import { Screen } from '../types';

interface Props { 
  screenKey: Screen;
  navigate: (s: Screen) => void; 
}

const PlaceholderScreen: React.FC<Props> = ({ screenKey, navigate }) => {
 return (
   <div className="bg-background-dark min-h-screen text-white font-display flex flex-col items-center justify-center p-8 text-center">
      <div className="relative mb-12">
         <div className="absolute -inset-10 bg-primary/10 blur-3xl rounded-full"></div>
         <div className="relative size-32 rounded-[2.5rem] bg-zinc-900 border border-white/10 flex items-center justify-center shadow-2xl">
            <span className="material-symbols-outlined text-6xl text-primary/40 animate-pulse">construction</span>
         </div>
      </div>
      
      <h1 className="text-2xl font-black uppercase tracking-tighter mb-4 italic">Work In Progress</h1>
      <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px] mb-12">Building high-fidelity interface for:</p>
      
      <div className="w-full max-w-sm p-6 bg-white/5 border border-white/10 rounded-3xl mb-12">
         <p className="font-mono text-primary font-black text-sm tracking-widest break-all uppercase">{screenKey}</p>
      </div>

      <button 
         onClick={() => navigate('HOME')} 
         className="w-full max-w-sm bg-primary text-white py-4 rounded-2xl font-black shadow-xl active:scale-95 transition-transform uppercase tracking-widest text-xs"
      >
         Return to Base
      </button>
      
      <p className="mt-8 text-[8px] font-black opacity-20 uppercase tracking-[0.4em]">StayNest Internal System v0.9</p>
   </div>
 );
};

export default PlaceholderScreen;