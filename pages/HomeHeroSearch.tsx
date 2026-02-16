
import React from 'react';
import { Screen } from '../types';

interface Props { navigate: (s: Screen) => void; }

const HomeHeroSearch: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-light dark:bg-background-dark min-h-screen font-display">
      <div className="relative h-[80vh] w-full overflow-hidden">
         <img src="https://picsum.photos/1000/1500?random=hero" className="w-full h-full object-cover" alt="Hero" />
         <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-black/40"></div>
        
         <header className="absolute top-0 inset-x-0 p-6 flex justify-between items-center z-20">
            <h1 className="text-white text-2xl font-black italic tracking-tighter">StayNest</h1>
            <button onClick={() => navigate('PROFILE')} className="size-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white"><span className="material-symbols-outlined">person</span></button>
         </header>

         <div className="absolute inset-x-0 bottom-0 p-6 space-y-8 z-20 max-w-md mx-auto">
            <h2 className="text-5xl font-black text-white leading-none tracking-tighter">Find your<br/>Safe Space.</h2>
           
            <div className="bg-white/10 backdrop-blur-3xl rounded-[2.5rem] border border-white/20 p-4 shadow-2xl">
               <div className="flex border-b border-white/10 mb-4">
                  {['STAYS', 'FLIGHTS', 'PACKAGES'].map((tab, i) => (
                    <button key={tab} className={`flex-1 py-3 text-[10px] font-black uppercase tracking-widest text-white ${i === 0 ? 'border-b-2 border-primary' : 'opacity-40'}`}>{tab}</button>
                  ))}
               </div>
               <div onClick={() => navigate('SEARCH_RESULTS')} className="bg-white rounded-3xl p-4 flex items-center gap-4 cursor-pointer shadow-lg active:scale-[0.98] transition-all">
                  <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0"><span className="material-symbols-outlined">location_on</span></div>
                  <div className="flex-1"><p className="text-[10px] font-black uppercase text-gray-400 leading-none mb-1">Destination</p><p className="font-bold text-gray-900 leading-none">Where are you going?</p></div>
               </div>
               <button onClick={() => navigate('SEARCH_RESULTS')} className="w-full bg-primary py-5 rounded-3xl font-black text-white text-lg mt-4 shadow-xl shadow-primary/40">SEARCH DEALS</button>
            </div>
         </div>
      </div>
   </div>
 );
};

export default HomeHeroSearch;
