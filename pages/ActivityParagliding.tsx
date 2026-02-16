
import React from 'react';
import { Screen } from '../types';

interface Props { navigate: (s: Screen) => void; }

const ActivityParagliding: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-light dark:bg-background-dark min-h-screen font-display">
      <div className="h-96 w-full relative">
         <img src="https://picsum.photos/800/800?random=para" className="w-full h-full object-cover" alt="Paragliding" />
         <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent"></div>
         <button onClick={() => navigate('HOME')} className="absolute top-4 left-4 size-10 rounded-full bg-white/50 flex items-center justify-center"><span className="material-symbols-outlined">close</span></button>
      </div>
      <main className="max-w-md mx-auto p-6 -mt-12 relative z-10 pb-40">
         <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-8 shadow-2xl border">
            <span className="bg-primary px-3 py-1 rounded-full text-[10px] font-black uppercase text-white">Top Rated</span>
            <h1 className="text-4xl font-black mt-4 mb-2">Swiss Alps Tandem Paraglide</h1>
            <div className="flex items-center gap-4 mb-8">
               <div className="flex items-center gap-1"><span className="material-symbols-outlined text-primary fill-1">star</span><span className="font-black">4.9</span></div>
               <div className="flex items-center gap-1 text-gray-400"><span className="material-symbols-outlined text-sm">schedule</span><span className="font-bold text-xs">2h Duration</span></div>
            </div>

            <h3 className="font-black text-xl mb-4">Safety First</h3>
            <div className="space-y-4">
               <div className="flex gap-4 items-center">
                  <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center"><span className="material-symbols-outlined">verified_user</span></div>
                  <div><p className="font-bold text-sm">Certified Instructors</p><p className="text-xs opacity-50">1,000+ flights minimum</p></div>
               </div>
               <div className="flex gap-4 items-center">
                  <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center"><span className="material-symbols-outlined">emergency</span></div>
                  <div><p className="font-bold text-sm">Triple-Check Policy</p><p className="text-xs opacity-50">Rigorous gear inspection</p></div>
               </div>
            </div>
         </div>
      </main>
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-white/95 dark:bg-background-dark/95 border-t flex justify-between items-center z-50">
         <div><p className="text-[10px] font-black opacity-40 uppercase">From</p><p className="text-2xl font-black">$120</p></div>
         <button onClick={() => navigate('BOOKING')} className="bg-primary text-white font-black px-12 py-4 rounded-2xl shadow-xl">CHECK DATES</button>
      </div>
   </div>
 );
};

export default ActivityParagliding;
