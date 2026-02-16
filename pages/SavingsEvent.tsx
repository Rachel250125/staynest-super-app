
import React from 'react';
import { Screen } from '../types';

interface Props { navigate: (s: Screen) => void; }

const SavingsEvent: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-dark text-white font-display min-h-screen">
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md p-4 flex items-center justify-between">
        <button onClick={() => navigate('HOME')} className="p-1"><span className="material-symbols-outlined">arrow_back</span></button>
        <h2 className="font-bold">Holiday Savings</h2>
        <span className="material-symbols-outlined cursor-pointer">share</span>
      </header>
      <main className="max-w-md mx-auto pb-32">
         <div className="p-4">
            <div className="relative h-[420px] rounded-2xl overflow-hidden bg-cover bg-center flex flex-col items-center justify-center p-8 text-center" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.8)), url('https://picsum.photos/1000/1000?winter')" }}>
               <div className="bg-primary px-3 py-1 rounded-full text-[10px] font-black uppercase mb-4">Limited Time</div>
               <h1 className="text-5xl font-black italic uppercase leading-none mb-2">Savings Event</h1>
               <p className="text-xl font-medium text-white/90">Up to 40% Off Winter Getaways</p>
               <button className="mt-8 bg-primary px-10 py-4 rounded-full font-black text-lg shadow-2xl active:scale-95 transition-transform">Explore Deals</button>
            </div>
         </div>
        
         <div className="grid grid-cols-2 gap-4 p-4">
            {[1,2,3,4].map(i => (
              <div key={i} className="flex flex-col gap-2">
                 <div className="aspect-[4/5] rounded-xl overflow-hidden relative border border-white/5">
                   <img src={`https://picsum.photos/400/500?random=${i+160}`} className="w-full h-full object-cover" alt="Stay" />
                   <div className="absolute top-2 right-2 bg-white text-primary text-[8px] font-black p-1 rounded uppercase">-40%</div>
                 </div>
                 <p className="font-bold text-sm">Winter Retreat {i}</p>
                 <div className="flex items-baseline gap-2"><span className="text-primary font-black">$120</span><span className="text-[10px] opacity-40 line-through">$200</span></div>
              </div>
            ))}
         </div>
      </main>
   </div>
 );
};

export default SavingsEvent;
