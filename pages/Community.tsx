
import React from 'react';
import { Screen } from '../types';

interface Props {
 navigate: (s: Screen) => void;
}

const Community: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-light dark:bg-background-dark font-display text-[#130e1b] dark:text-white antialiased min-h-screen pb-32">
     <header className="sticky top-0 z-30 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
       <div className="flex items-center p-4 pb-2 justify-between">
         <h1 className="text-xl font-bold leading-tight tracking-tight">Community</h1>
         <div className="flex gap-2">
           <button onClick={() => navigate('FEED')} className="flex items-center justify-center rounded-full h-10 w-10 bg-primary/10 text-primary">
             <span className="material-symbols-outlined">notifications</span>
           </button>
           <button onClick={() => navigate('PROFILE')} className="flex items-center justify-center overflow-hidden rounded-full h-10 w-10 bg-primary/10 text-primary">
             <span className="material-symbols-outlined">account_circle</span>
           </button>
         </div>
       </div>
     </header>

     <main>
       <div className="px-4 py-6">
         <h2 className="tracking-tight text-[28px] font-bold leading-tight">Expert Advice</h2>
         <p onClick={() => navigate('FORUM')} className="text-primary font-bold text-sm mt-1 cursor-pointer flex items-center gap-1">
           Browse Discussion Forums <span className="material-symbols-outlined text-sm">arrow_forward</span>
         </p>
       </div>

       <div className="space-y-4 px-4">
         {[
           { title: "Best Nut-Free Cafes in Paris?", replies: 24, likes: 156, avatar: "https://picsum.photos/50/50?random=11", expert: true },
           { title: "Solo Female Travel in Tokyo Tips", replies: 42, likes: 312, avatar: "https://picsum.photos/50/50?random=12" },
           { title: "Cruising the Bahamas: Accessibility", replies: 12, likes: 88, avatar: "https://picsum.photos/50/50?random=13" }
         ].map((thread, idx) => (
           <div
             key={idx}
             onClick={() => navigate('CHAT')}
             className="flex gap-4 bg-white dark:bg-[#251b33] p-4 rounded-xl shadow-sm border border-black/5 dark:border-white/5 cursor-pointer hover:scale-[1.01] transition-transform"
           >
             <div className="relative shrink-0">
               <img className="w-12 h-12 rounded-full border-2 border-gray-100" src={thread.avatar} alt="User" />
               {thread.expert && (
                 <div className="absolute -bottom-1 -right-1 bg-primary text-white text-[8px] px-1 rounded-full border border-white">EXPERT</div>
               )}
             </div>
             <div className="flex-1">
               <h4 className="font-bold text-base leading-snug line-clamp-2">{thread.title}</h4>
               <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                 <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">favorite</span> {thread.likes}</span>
                 <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">chat_bubble</span> {thread.replies}</span>
               </div>
             </div>
           </div>
         ))}
       </div>

       <div className="px-4 pt-10 flex justify-between items-end">
         <h3 className="text-lg font-bold">Recommended Experts</h3>
         <button onClick={() => navigate('LEADERBOARD')} className="text-primary text-xs font-bold">LEADERBOARD</button>
       </div>
       <div className="flex gap-4 p-4 overflow-x-auto no-scrollbar">
         {[1,2,3,4].map(i => (
           <div key={i} className="flex flex-col items-center gap-2 min-w-[100px]" onClick={() => navigate('SPOTLIGHT')}>
             <div className="relative">
               <div className="size-16 rounded-full border-2 border-primary p-0.5">
                 <img className="rounded-full size-full object-cover" src={`https://picsum.photos/100/100?random=${i+20}`} alt="Expert" />
               </div>
               <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full shadow-md px-1 py-0.5 text-[8px] text-white font-bold">VERIFIED</div>
             </div>
             <span className="text-xs font-medium">Expert {i}</span>
           </div>
         ))}
       </div>
     </main>
   </div>
 );
};

export default Community;
