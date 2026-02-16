
import React from 'react';
import { Screen } from '../types';

interface Props {
 navigate: (s: Screen) => void;
}

const ActivityFeed: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-light dark:bg-background-dark font-display text-[#130e1b] dark:text-[#f9f8fc] min-h-screen">
     <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
       <div className="flex items-center p-4 justify-between max-w-md mx-auto">
         <div onClick={() => navigate('COMMUNITY')} className="flex size-10 shrink-0 items-center justify-center cursor-pointer">
           <span className="material-symbols-outlined">arrow_back</span>
         </div>
         <h2 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center">Friends Activity</h2>
         <div className="flex w-10 items-center justify-end relative">
           <span className="material-symbols-outlined">notifications</span>
           <span className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white"></span>
         </div>
       </div>
     </header>
     <main className="max-w-md mx-auto pb-24">
       <div className="flex w-full overflow-x-auto px-4 py-4 gap-4 no-scrollbar">
         {[1,2,3,4,5].map(i => (
           <div key={i} className="flex flex-col items-center gap-2 min-w-[70px]">
             <div className={`w-16 h-16 rounded-full p-0.5 border-2 ${i === 1 ? 'border-dashed border-gray-400' : 'border-primary'}`}>
               <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                 {i === 1 ? (
                   <div className="flex items-center justify-center h-full"><span className="material-symbols-outlined text-gray-500">add</span></div>
                 ) : (
                   <img className="w-full h-full object-cover" src={`https://picsum.photos/100/100?random=${i+10}`} alt="Friend" />
                 )}
               </div>
             </div>
             <p className="text-[12px] font-medium">{i === 1 ? 'Your Trip' : `Friend ${i}`}</p>
           </div>
         ))}
       </div>
       <div className="px-4 py-2">
         <h3 className="text-lg font-bold leading-tight">Recent Activity</h3>
       </div>
       <div className="space-y-6 px-4 pb-12">
         <div className="bg-white dark:bg-[#251b33] rounded-lg shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
           <div className="p-4 flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
               <img src="https://picsum.photos/100/100?random=20" alt="Sarah" />
             </div>
             <div>
               <p className="text-sm font-bold"><span className="text-primary">Sarah</span> added a Sunset Cruise</p>
               <p className="text-xs text-gray-500">2h ago</p>
             </div>
           </div>
           <div className="px-4 pb-4">
             <div className="w-full aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <img src="https://picsum.photos/600/400?yacht" className="w-full h-full object-cover" alt="Cruise" />
             </div>
             <div className="mt-3">
               <p className="text-sm font-medium">Excited for the views! Who's in?</p>
             </div>
           </div>
           <div className="flex items-center gap-6 px-4 py-3 border-t border-gray-50 dark:border-gray-800">
             <div className="flex items-center gap-1.5 text-primary">
               <span className="material-symbols-outlined text-[22px]">favorite</span>
               <span className="text-xs font-bold">12</span>
             </div>
             <div className="flex items-center gap-1.5 text-gray-500">
               <span className="material-symbols-outlined text-[22px]">chat_bubble</span>
               <span className="text-xs font-bold">4</span>
             </div>
           </div>
         </div>
       </div>
     </main>
   </div>
 );
};

export default ActivityFeed;
