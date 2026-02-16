
import React from 'react';
import { Screen } from '../types';

interface Props { navigate: (s: Screen) => void; }

const RoomSelection: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-light dark:bg-background-dark min-h-screen font-display text-slate-900 dark:text-white">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md p-4 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
         <button onClick={() => navigate('DETAILS')} className="p-1"><span className="material-symbols-outlined">arrow_back</span></button>
         <div className="text-center"><h2 className="font-bold text-sm uppercase tracking-widest">Select Room</h2><p className="text-[10px] opacity-40 uppercase font-black">Oct 15 - 20 • 2 Adults</p></div>
         <div className="size-10"></div>
      </header>

      <main className="max-w-md mx-auto p-4 space-y-6 pb-32">
         {[
           { title: 'Deluxe Ocean Suite', price: '$420', info: 'King Bed • Infinity Pool View', img: 'https://picsum.photos/600/400?room1' },
           { title: 'Grand Executive Wing', price: '$580', info: '2 Queen Beds • VIP Lounge Access', img: 'https://picsum.photos/600/400?room2' }
         ].map(room => (
           <div key={room.title} className="bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm group cursor-pointer hover:shadow-xl transition-all">
              <div className="relative h-56 overflow-hidden">
                 <img src={room.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Room" />
                 <div className="absolute top-4 right-4 bg-white/30 backdrop-blur-md p-2 rounded-full text-white"><span className="material-symbols-outlined text-[20px]">info</span></div>
              </div>
              <div className="p-6">
                 <div className="flex justify-between items-start mb-4">
                    <div><h3 className="text-xl font-black mb-1 leading-tight">{room.title}</h3><p className="text-xs opacity-50 dark:text-gray-400">{room.info}</p></div>
                    <div className="text-right">
                       <p className="text-xl font-black text-primary leading-none">{room.price}</p>
                       <p className="text-[10px] opacity-30 font-bold uppercase mt-1">/ Night</p>
                    </div>
                 </div>
                 <div className="flex gap-2 mb-6">
                    <span className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-3 py-1 rounded-full text-[10px] font-black uppercase">Breakfast Incl.</span>
                    <span className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 px-3 py-1 rounded-full text-[10px] font-black uppercase">Free Wi-Fi</span>
                 </div>
                 <button onClick={() => navigate('CHECKOUT')} className="w-full bg-primary py-4 rounded-xl font-black text-white shadow-xl active:scale-95 transition-transform uppercase tracking-widest">SELECT ROOM</button>
              </div>
           </div>
         ))}
      </main>
   </div>
 );
};

export default RoomSelection;
