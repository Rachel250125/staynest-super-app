
import React from 'react';
import { Screen } from '../types';

interface Props { navigate: (s: Screen) => void; }

const AdventureSuggestions: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-light dark:bg-background-dark min-h-screen font-display">
      <header className="p-4 flex items-center justify-between border-b">
         <button onClick={() => navigate('HOME')} className="p-1"><span className="material-symbols-outlined">arrow_back</span></button>
         <h2 className="font-black text-sm uppercase tracking-widest">Next Adventure</h2>
         <div className="size-10"></div>
      </header>
      <main className="max-w-md mx-auto p-4 space-y-8 pb-32">
         <div className="pt-4"><span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-black uppercase">AI Personalized</span><h1 className="text-3xl font-black mt-2 leading-tight">Because you loved paragliding...</h1></div>

         <div className="space-y-6">
            {[
              { title: 'Cappadocia Balloons', price: '$250', img: 'https://picsum.photos/600/400?random=40', why: 'High-altitude thrills' },
              { title: 'Maldives Sea Diving', price: '$180', img: 'https://picsum.photos/600/400?random=41', why: 'Expert water skills' }
            ].map(trip => (
              <div key={trip.title} className="rounded-3xl overflow-hidden bg-white dark:bg-zinc-900 border shadow-lg group">
                 <div className="relative h-64"><img src={trip.img} className="w-full h-full object-cover" alt="Trip" /><div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-[10px] font-black uppercase text-primary">Match</div></div>
                 <div className="p-6">
                    <div className="flex justify-between mb-2"><h3 className="text-xl font-black">{trip.title}</h3><p className="text-primary font-black">{trip.price}</p></div>
                    <p className="text-sm opacity-50 italic mb-6">"{trip.why}"</p>
                    <button className="w-full bg-primary py-4 rounded-xl font-black text-white shadow-xl">EXPLORE TRIP</button>
                 </div>
              </div>
            ))}
         </div>
      </main>
   </div>
 );
};

export default AdventureSuggestions;
