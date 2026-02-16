
import React from 'react';
import { Screen } from '../types';

interface Props {
 navigate: (s: Screen) => void;
}

const HostCalendar: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-light dark:bg-background-dark font-display text-[#1c0d0f] dark:text-white min-h-screen">
      <header className="sticky top-0 z-20 bg-white/95 dark:bg-background-dark/95 backdrop-blur-md px-4 py-3 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
       <div className="flex items-center gap-3">
         <button onClick={() => navigate('HOST_DASHBOARD')} className="p-1"><span className="material-symbols-outlined">arrow_back</span></button>
         <h2 className="text-xl font-bold">Bookings</h2>
       </div>
       <span className="material-symbols-outlined text-primary">calendar_today</span>
     </header>

     <main className="max-w-md mx-auto px-4 pb-32 pt-4">
       <div className="bg-white dark:bg-white/5 rounded-lg border p-4 mb-6">
          <h3 className="font-bold mb-4">October 2024</h3>
          <div className="grid grid-cols-7 gap-2 text-center text-[10px] font-bold text-gray-400 mb-2 uppercase">
             <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
          </div>
          <div className="grid grid-cols-7 gap-1">
             {Array.from({length: 31}, (_, i) => (
               <div key={i} className={`aspect-square flex items-center justify-center text-sm font-medium rounded-lg ${i+1 === 24 ? 'bg-primary text-white shadow-lg' : 'hover:bg-gray-100 dark:hover:bg-white/10'}`}>
                 {i+1}
               </div>
             ))}
          </div>
       </div>

       <h3 className="text-lg font-bold mb-4">Daily Agenda - Oct 24</h3>
       <div className="space-y-3">
          <div className="p-4 bg-white dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/5">
             <div className="flex justify-between mb-3">
               <span className="text-[10px] font-black uppercase text-green-600 bg-green-50 px-2 py-0.5 rounded">Arrival</span>
               <span className="text-xs text-gray-400">2:00 PM</span>
             </div>
             <div className="flex items-center gap-3">
               <div className="size-10 rounded-full overflow-hidden bg-gray-100">
                 <img src="https://picsum.photos/100/100?random=88" alt="Guest" />
               </div>
               <div className="flex-1">
                 <p className="font-bold text-sm">Marcus Thorne</p>
                 <p className="text-xs text-gray-500">2 Guests • 3 Nights</p>
               </div>
               <span className="material-symbols-outlined text-primary">chat_bubble</span>
             </div>
          </div>
       </div>
     </main>
   </div>
 );
};

export default HostCalendar;
