
import React from 'react';
import { Screen } from '../types';

interface Props {
 navigate: (s: Screen) => void;
}

const Poll: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-light dark:bg-background-dark text-[#1d0c0f] dark:text-[#fcf8f9] min-h-screen">
     <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-4 pt-6 pb-2">
       <div className="flex items-center justify-between">
         <div className="flex items-center gap-3">
           <button onClick={() => navigate('GROUP_HUB')} className="flex size-10 items-center justify-center rounded-full bg-white dark:bg-zinc-800 shadow-sm">
             <span className="material-symbols-outlined text-2xl">arrow_back_ios_new</span>
           </button>
           <div>
             <p className="text-xs font-semibold uppercase tracking-wider text-primary">StayNest AI Planner</p>
             <h2 className="text-xl font-bold leading-tight">Which Desert Safari?</h2>
           </div>
         </div>
         <button className="flex size-10 items-center justify-center rounded-full bg-white dark:bg-zinc-800 shadow-sm">
           <span className="material-symbols-outlined text-2xl">share</span>
         </button>
       </div>
     </header>
     <main className="pb-24 max-w-md mx-auto">
       <div className="px-4 py-4">
         <div className="bg-primary/10 dark:bg-primary/20 rounded-2xl p-4 flex flex-col items-center justify-center border border-primary/20">
           <p className="text-sm font-medium text-primary mb-2">Poll ends in:</p>
           <div className="flex gap-4">
             <div className="flex flex-col items-center">
               <div className="flex h-12 w-14 items-center justify-center rounded-xl bg-white dark:bg-zinc-900 shadow-sm">
                 <p className="text-primary text-xl font-bold">04</p>
               </div>
               <p className="text-[10px] mt-1 uppercase font-bold text-primary/70">Hours</p>
             </div>
             <div className="flex flex-col items-center">
               <div className="flex h-12 w-14 items-center justify-center rounded-xl bg-white dark:bg-zinc-900 shadow-sm">
                 <p className="text-primary text-xl font-bold">28</p>
               </div>
               <p className="text-[10px] mt-1 uppercase font-bold text-primary/70">Mins</p>
             </div>
             <div className="flex flex-col items-center">
               <div className="flex h-12 w-14 items-center justify-center rounded-xl bg-white dark:bg-zinc-900 shadow-sm">
                 <p className="text-primary text-xl font-bold">14</p>
               </div>
               <p className="text-[10px] mt-1 uppercase font-bold text-primary/70">Secs</p>
             </div>
           </div>
         </div>
       </div>

       <div className="flex flex-col gap-4 px-4">
         {[
           {
             title: 'Sunset Dune Bashing',
             price: '$85',
             votes: '45%',
             img: 'https://picsum.photos/600/400?safari1'
           },
           {
             title: 'Morning Camel Trek',
             price: '$60',
             voted: true,
             img: 'https://picsum.photos/600/400?safari2'
           }
         ].map((opt, i) => (
           <div key={i} className={`rounded-[20px] shadow-sm bg-white dark:bg-zinc-900 overflow-hidden border-2 transition-all ${opt.voted ? 'border-primary' : 'border-transparent'}`}>
             <div className="h-48 w-full bg-cover bg-center relative" style={{ backgroundImage: `url(${opt.img})` }}>
               <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold">
                 {opt.voted ? 'Selected' : opt.votes}
               </div>
             </div>
             <div className="p-4 flex justify-between items-center">
               <div>
                 <h4 className="font-bold dark:text-white">{opt.title}</h4>
                 <p className="text-primary font-black">{opt.price}</p>
               </div>
               <button onClick={() => navigate('VOTING_RESULTS')} className={`px-6 py-2 rounded-full font-bold text-sm ${opt.voted ? 'bg-gray-100 dark:bg-gray-800 text-gray-400' : 'bg-primary text-white shadow-lg active:scale-95 transition-transform'}`}>
                 {opt.voted ? 'Voted' : 'Vote'}
               </button>
             </div>
           </div>
         ))}
       </div>
     </main>
   </div>
 );
};

export default Poll;
