
import React from 'react';
import { Screen } from '../types';

interface Props {
 navigate: (s: Screen) => void;
}

const HostDashboard: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-light dark:bg-background-dark font-display text-[#1d0c0f] dark:text-[#fcf8f9] min-h-screen">
     <div className="relative mx-auto max-w-md bg-white dark:bg-zinc-950 min-h-screen shadow-xl overflow-x-hidden">
       <header className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-100 dark:border-zinc-800 p-4 flex items-center justify-between">
         <div onClick={() => navigate('PROFILE')} className="size-10 rounded-full overflow-hidden border-2 border-primary/20 shrink-0 cursor-pointer">
           <img src="https://picsum.photos/100/100?random=host" className="w-full h-full object-cover" alt="Host" />
         </div>
         <h2 className="text-lg font-bold flex-1 text-center">Host Dashboard</h2>
         <span className="material-symbols-outlined">notifications</span>
       </header>

       <main className="px-4 pt-6 pb-32">
         <div className="grid grid-cols-2 gap-3 mb-8">
           <div className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-100 dark:border-zinc-800">
              <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-1">Total Earnings</p>
              <h4 className="text-2xl font-black">$4,250.00</h4>
              <p className="text-green-500 text-[10px] font-bold mt-1">+12% this month</p>
           </div>
           <div className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-100 dark:border-zinc-800">
              <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-1">Avg. Rating</p>
              <h4 className="text-2xl font-black">4.9★</h4>
              <p className="text-green-500 text-[10px] font-bold mt-1">Excellent!</p>
           </div>
         </div>

         <button onClick={() => navigate('HOST_PRICING')} className="w-full bg-primary text-white py-4 rounded-xl font-bold shadow-lg mb-8 flex items-center justify-center gap-2">
           <span className="material-symbols-outlined">add_circle</span> Add New Listing
         </button>

         <h3 className="text-xl font-bold mb-4">Upcoming Reservations</h3>
         <div className="space-y-4">
            {[1,2].map(i => (
              <div key={i} onClick={() => navigate('HOST_CALENDAR')} className="flex items-center gap-4 p-4 bg-white dark:bg-zinc-900 rounded-xl border shadow-sm cursor-pointer">
                 <div className="size-12 rounded-full overflow-hidden bg-gray-200">
                   <img src={`https://picsum.photos/100/100?random=${i+60}`} alt="Guest" />
                 </div>
                 <div className="flex-1">
                   <p className="font-bold text-sm">Guest {i}</p>
                   <p className="text-xs text-gray-500">Oct {12+i} - {15+i} • 3 nights</p>
                 </div>
                 <span className="text-[10px] font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-2 py-1 rounded uppercase">Active</span>
              </div>
            ))}
         </div>
       </main>

       <nav className="fixed bottom-0 w-full max-w-md bg-white dark:bg-zinc-950 border-t border-gray-100 dark:border-gray-800 p-4 flex justify-around items-center">
          <div className="flex flex-col items-center gap-1 text-primary"><span className="material-symbols-outlined">dashboard</span><span className="text-[10px] font-bold">Dashboard</span></div>
          <div onClick={() => navigate('HOST_CALENDAR')} className="flex flex-col items-center gap-1 text-gray-400 cursor-pointer"><span className="material-symbols-outlined">calendar_today</span><span className="text-[10px] font-medium">Calendar</span></div>
          <div className="flex flex-col items-center gap-1 text-gray-400 cursor-pointer"><span className="material-symbols-outlined">chat</span><span className="text-[10px] font-medium">Inbox</span></div>
          <div onClick={() => navigate('PROFILE')} className="flex flex-col items-center gap-1 text-gray-400 cursor-pointer"><span className="material-symbols-outlined">menu</span><span className="text-[10px] font-medium">Profile</span></div>
       </nav>
     </div>
   </div>
 );
};

export default HostDashboard;
