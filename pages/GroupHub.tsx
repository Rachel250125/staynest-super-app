
import React from 'react';
import { Screen } from '../types';

interface Props {
 navigate: (s: Screen) => void;
}

const GroupHub: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-light dark:bg-background-dark font-display text-[#1d0c0f] dark:text-white transition-colors duration-300 min-h-screen pb-32">
     <div className="relative h-[30vh] w-full shrink-0 overflow-hidden">
       <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(0,0,0,0.6) 100%), url('https://picsum.photos/800/600?greece')" }}></div>
       <div className="relative h-full flex flex-col justify-end p-6">
          <button onClick={() => navigate('PLANNER')} className="absolute top-4 left-4 size-10 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20"><span className="material-symbols-outlined">arrow_back</span></button>
          <h1 className="text-white text-3xl font-bold tracking-tight leading-none drop-shadow-lg uppercase">IT'S OFFICIAL!</h1>
          <p className="text-white/90 text-lg font-medium mt-1">Your group trip is booked.</p>
       </div>
     </div>

     <main className="px-4 -mt-6 relative z-10">
       <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-xl overflow-hidden border border-zinc-100 dark:border-zinc-800 p-5 mb-6">
          <div className="flex justify-between items-start mb-4">
             <div>
               <h3 className="text-xl font-bold">Oia Sunset Villa</h3>
               <p className="text-primary text-sm font-semibold">Santorini, Greece</p>
             </div>
             <span className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-2 py-1 rounded-full text-[10px] font-bold uppercase">Confirmed</span>
          </div>
          <div className="flex gap-4 border-t border-gray-100 dark:border-gray-800 pt-4">
             <div className="flex flex-col"><p className="text-[10px] text-gray-500 uppercase font-bold">Check In</p><p className="font-bold">July 15</p></div>
             <div className="flex flex-col"><p className="text-[10px] text-gray-500 uppercase font-bold">Check Out</p><p className="font-bold">July 22</p></div>
          </div>
       </div>

       <h3 className="text-lg font-bold mb-4">Who's In</h3>
       <div className="flex gap-4 flex-wrap pb-6">
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className="relative cursor-pointer active:scale-90 transition-transform">
               <div className="w-14 h-14 rounded-full border-2 border-primary overflow-hidden shadow-sm">
                 <img src={`https://picsum.photos/100/100?random=${i+50}`} alt="Friend" />
               </div>
               <div className="absolute -bottom-1 -right-1 bg-green-500 size-5 rounded-full border-2 border-white dark:border-zinc-900 flex items-center justify-center">
                 <span className="material-symbols-outlined text-white text-[10px] font-bold">check</span>
               </div>
            </div>
          ))}
       </div>

       <div className="space-y-3">
          <button onClick={() => navigate('EXPENSE_HISTORY')} className="w-full flex items-center justify-between p-4 bg-white dark:bg-zinc-900 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm active:bg-gray-50 dark:active:bg-gray-800 transition-colors">
             <div className="flex items-center gap-3">
               <span className="material-symbols-outlined text-primary">payments</span>
               <span className="font-bold">Split Expenses</span>
             </div>
             <span className="material-symbols-outlined text-gray-400">chevron_right</span>
          </button>
          <button onClick={() => navigate('PHOTO_GALLERY')} className="w-full flex items-center justify-between p-4 bg-white dark:bg-zinc-900 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm active:bg-gray-50 dark:active:bg-gray-800 transition-colors">
             <div className="flex items-center gap-3">
               <span className="material-symbols-outlined text-primary">photo_library</span>
               <span className="font-bold">Shared Gallery</span>
             </div>
             <span className="material-symbols-outlined text-gray-400">chevron_right</span>
          </button>
          <button onClick={() => navigate('GROUP_CHECKLIST')} className="w-full flex items-center justify-between p-4 bg-white dark:bg-zinc-900 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm active:bg-gray-50 dark:active:bg-gray-800 transition-colors">
             <div className="flex items-center gap-3">
               <span className="material-symbols-outlined text-primary">checklist</span>
               <span className="font-bold">Trip Checklist</span>
             </div>
             <span className="material-symbols-outlined text-gray-400">chevron_right</span>
          </button>
       </div>
     </main>

     <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 dark:bg-background-dark/90 border-t border-gray-100 dark:border-gray-800 z-50">
        <button onClick={() => navigate('PLANNER')} className="w-full bg-primary text-white py-4 rounded-xl font-bold shadow-lg active:scale-95 transition-transform">View Full Trip Itinerary</button>
     </div>
   </div>
 );
};

export default GroupHub;
