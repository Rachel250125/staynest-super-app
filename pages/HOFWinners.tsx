
import React from 'react';
import { Screen } from '../types';

interface Props { navigate: (s: Screen) => void; }

const HOFWinners: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-dark min-h-screen text-white font-display">
      <header className="p-4 flex items-center justify-between border-b border-white/5 sticky top-0 bg-background-dark/80 backdrop-blur-md z-10">
         <button onClick={() => navigate('HALL_OF_FAME')} className="p-1"><span className="material-symbols-outlined">arrow_back</span></button>
         <h2 className="font-black text-sm uppercase tracking-widest text-primary">Hall of Fame Winners</h2>
         <div className="size-10"></div>
      </header>
      <main className="max-w-md mx-auto p-4 space-y-6 pb-32 pt-8">
         {[1,2,3].map(i => (
           <div key={i} className="p-5 bg-white/5 border border-white/10 rounded-3xl relative overflow-hidden group hover:border-primary/50 transition-all cursor-pointer">
              <div className="flex items-center gap-6 relative z-10">
                 <div className="relative">
                    <img src={`https://picsum.photos/200/200?random=${i+133}`} className="size-24 rounded-full border-4 border-primary/20 object-cover" alt="Winner" />
                    <div className="absolute -bottom-2 -right-2 size-10 rounded-full bg-primary text-white flex items-center justify-center border-2 border-background-dark shadow-xl"><span className="material-symbols-outlined font-black">trophy</span></div>
                 </div>
                 <div className="flex-1">
                    <p className="text-[10px] font-black uppercase text-primary tracking-widest mb-1">{i === 1 ? 'Current' : 'Past'} Winner</p>
                    <h3 className="text-2xl font-black leading-none mb-2">Winner {i}</h3>
                    <p className="text-xs opacity-50">Awarded for exceptional community safety verification contributions.</p>
                 </div>
              </div>
              <div className="absolute top-[-40px] right-[-40px] size-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all"></div>
           </div>
         ))}
      </main>
   </div>
 );
};

export default HOFWinners;
