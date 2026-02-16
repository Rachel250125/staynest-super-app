
import React from 'react';
import { Screen } from '../types';

interface Props { navigate: (s: Screen) => void; }

const PartnerSpotlight: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-light dark:bg-background-dark min-h-screen font-display">
      <div className="h-[60vh] relative">
         <img src="https://picsum.photos/800/1200?luxury" className="w-full h-full object-cover" alt="Luxury Partner" />
         <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
         <button onClick={() => navigate('HOME')} className="absolute top-6 left-6 size-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20"><span className="material-symbols-outlined">arrow_back</span></button>
         <div className="absolute bottom-12 left-12 right-12">
            <span className="bg-yellow-400 text-black px-4 py-1 rounded-full font-black text-xs uppercase tracking-widest mb-4 inline-block shadow-lg">Featured Partner</span>
            <h1 className="text-5xl font-black text-white leading-none tracking-tighter drop-shadow-xl uppercase">THE AMAN<br/>EXPERIENCE</h1>
         </div>
      </div>
      <main className="max-w-2xl mx-auto p-12">
         <h2 className="text-3xl font-black mb-6 text-slate-900 dark:text-white">A Legacy of Tranquility</h2>
         <p className="text-xl leading-relaxed opacity-70 dark:text-gray-300 mb-12">Each Aman property is meticulously woven into the landscape, offering a sense of peace that is increasingly rare in the modern world. Exclusively for StayNest Plus members, enjoy complimentary spa treatments and private transfers.</p>
         <button className="bg-primary text-white font-black px-10 py-5 rounded-2xl text-lg shadow-2xl active:scale-95 transition-transform w-full sm:w-auto">EXPLORE SANCTUARIES</button>
      </main>
   </div>
 );
};

export default PartnerSpotlight;
