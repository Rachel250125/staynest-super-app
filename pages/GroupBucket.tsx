
import React from 'react';
import { Screen } from '../types';

interface Props {
 navigate: (s: Screen) => void;
}

const GroupBucket: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-light dark:bg-background-dark min-h-screen font-display text-slate-900 dark:text-white">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md p-4 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
        <button onClick={() => navigate('PLANNER')} className="p-1"><span className="material-symbols-outlined">arrow_back_ios</span></button>
        <h2 className="font-bold">Plan with Friends</h2>
        <span className="material-symbols-outlined">more_horiz</span>
      </header>
      <main className="p-4 space-y-6 pb-32">
         <div className="flex items-center -space-x-3 mb-2">
            {[1,2,3].map(i => (
              <img key={i} src={`https://picsum.photos/100/100?random=${i+150}`} className="size-10 rounded-full border-2 border-white dark:border-gray-800" alt="Friend" />
            ))}
            <div className="size-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-400 border-2 border-dashed border-gray-300 dark:border-gray-600"><span className="material-symbols-outlined text-sm">add</span></div>
         </div>

         <h3 className="text-xl font-black">Dream Destinations</h3>
         {[
           { title: 'Santorini, Greece', user: 'Sarah', progress: 65, img: 'https://picsum.photos/600/400?santorini' },
           { title: 'Kyoto, Japan', user: 'Alex', progress: 20, img: 'https://picsum.photos/600/400?kyoto' }
         ].map(dest => (
           <div key={dest.title} className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm">
              <img src={dest.img} className="w-full aspect-video object-cover" alt={dest.title} />
              <div className="p-4 space-y-4">
                 <div className="flex justify-between items-start">
                   <div><h4 className="font-bold text-lg">{dest.title}</h4><p className="text-xs text-gray-500">Suggested by {dest.user}</p></div>
                   <span className="material-symbols-outlined text-primary">favorite</span>
                 </div>
                 <div className="space-y-1">
                   <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase"><span>Group Savings</span><span className="text-primary">{dest.progress}%</span></div>
                   <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden"><div className="h-full bg-primary" style={{ width: `${dest.progress}%` }}></div></div>
                 </div>
                 <button className="w-full bg-[#A855F7] text-white py-3 rounded-lg font-bold text-sm shadow-md active:scale-95 transition-transform">Settle a Date</button>
              </div>
           </div>
         ))}
      </main>
      <div className="fixed bottom-24 right-4"><button className="bg-primary text-white py-3 px-6 rounded-full font-bold shadow-2xl active:scale-95 transition-transform">+ Add to Bucket</button></div>
   </div>
 );
};

export default GroupBucket;
