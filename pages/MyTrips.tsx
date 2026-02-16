
import React from 'react';
import { Screen } from '../types';

interface Props { navigate: (s: Screen) => void; }

const MyTrips: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-light dark:bg-background-dark min-h-screen text-[#1d0c0f] dark:text-white font-display">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md p-4 flex items-center justify-between border-b">
         <h1 className="text-3xl font-black tracking-tighter">My Trips</h1>
         <div className="flex gap-4">
           <span className="material-symbols-outlined cursor-pointer">search</span>
           <span className="material-symbols-outlined cursor-pointer">more_horiz</span>
         </div>
      </header>

      <main className="max-w-md mx-auto p-4 pb-32">
         <div className="flex gap-3 overflow-x-auto no-scrollbar mb-6">
            {['Upcoming', 'Completed', 'Cancelled'].map((tab, i) => (
              <button key={tab} className={`px-6 py-2 rounded-full font-bold text-sm shrink-0 transition-colors ${i === 0 ? 'bg-primary text-white' : 'bg-gray-100 dark:bg-zinc-800 text-gray-500'}`}>{tab}</button>
            ))}
         </div>

         <div className="space-y-6">
            <div className="rounded-2xl overflow-hidden bg-white dark:bg-zinc-900 border border-gray-100 dark:border-gray-800 shadow-sm">
               <img src="https://picsum.photos/600/300?random=trip1" className="w-full aspect-video object-cover" alt="Trip" />
               <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                     <div><h3 className="font-bold text-lg">Dubai Getaway</h3><p className="text-xs text-gray-500">Oct 12 - Oct 19 • 2 Guests</p></div>
                     <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-[10px] font-bold uppercase">Confirmed</span>
                  </div>
                  <div className="flex gap-2 mt-4 pt-4 border-t border-gray-50 dark:border-gray-800">
                     <button onClick={() => navigate('CONFIRMATION')} className="flex-1 bg-primary text-white py-3 rounded-xl font-bold text-sm shadow-md active:scale-95 transition-transform">View Ticket</button>
                     <button onClick={() => navigate('PLANNER')} className="flex-1 border dark:border-gray-700 py-3 rounded-xl font-bold text-sm active:bg-gray-50 dark:active:bg-gray-800 transition-colors">Itinerary</button>
                  </div>
               </div>
            </div>
         </div>
      </main>

      <nav className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 dark:bg-background-dark/95 backdrop-blur-xl border-t border-gray-100 dark:border-gray-800 flex justify-around items-center z-50 max-w-md mx-auto">
         <div onClick={() => navigate('HOME')} className="flex flex-col items-center gap-1 text-gray-400 cursor-pointer"><span className="material-symbols-outlined">home</span><span className="text-[10px] font-bold">Home</span></div>
         <div onClick={() => navigate('PLANNER')} className="flex flex-col items-center gap-1 text-gray-400 cursor-pointer"><span className="material-symbols-outlined">explore</span><span className="text-[10px] font-bold">Explore</span></div>
         <div className="flex flex-col items-center gap-1 text-primary cursor-pointer"><span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>card_travel</span><span className="text-[10px] font-bold">Trips</span></div>
         <div onClick={() => navigate('PROFILE')} className="flex flex-col items-center gap-1 text-gray-400 cursor-pointer"><span className="material-symbols-outlined">person</span><span className="text-[10px] font-bold">Profile</span></div>
      </nav>
   </div>
 );
};

export default MyTrips;
