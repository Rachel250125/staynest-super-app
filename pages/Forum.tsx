
import React from 'react';
import { Screen } from '../types';

interface Props { navigate: (s: Screen) => void; }

const Forum: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-light dark:bg-background-dark font-display text-[#1d0c0f] dark:text-white transition-colors min-h-screen">
     <div className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
       <div className="flex items-center p-4 justify-between max-w-md mx-auto">
         <div onClick={() => navigate('COMMUNITY')} className="text-[#1d0c0f] dark:text-white flex size-10 shrink-0 items-center justify-center cursor-pointer">
           <span className="material-symbols-outlined">arrow_back_ios</span>
         </div>
         <h2 className="text-lg font-bold leading-tight flex-1 text-center">Travel Forum</h2>
         <div className="flex w-10 items-center justify-end"><span className="material-symbols-outlined">notifications</span></div>
       </div>
     </div>

     <main className="max-w-md mx-auto p-4 pb-32">
       <div className="relative mb-6">
         <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
         <input className="w-full bg-gray-100 dark:bg-white/10 rounded-xl pl-10 pr-4 py-3 border-none focus:ring-primary" placeholder="Search topics..." type="text"/>
       </div>

       <div className="flex gap-3 overflow-x-auto no-scrollbar pb-6">
         {['All Topics', 'Allergy-Safe', 'Hidden Gems', 'Solo Travel', 'Group Planning'].map((cat, idx) => (
           <div key={cat} className={`flex h-9 shrink-0 items-center justify-center rounded-lg px-4 cursor-pointer ${idx === 0 ? 'bg-primary text-white' : 'bg-white dark:bg-white/10 border'}`}>
             <p className="text-sm font-semibold">{cat}</p>
           </div>
         ))}
       </div>

       <div className="space-y-4">
          {[
            { title: 'Best Nut-Free Cafes in Paris?', author: 'Sarah J.', likes: 24, replies: 12, img: 'https://picsum.photos/400/200?random=200' },
            { title: 'Solo Trekking in Patagonia', author: 'Mark D.', likes: 45, replies: 30, img: 'https://picsum.photos/400/200?random=201' }
          ].map((thread, idx) => (
            <div key={idx} onClick={() => navigate('FORUM_THREAD')} className="bg-white dark:bg-zinc-900 rounded-xl overflow-hidden border shadow-sm cursor-pointer hover:scale-[1.01] transition-transform">
               <img src={thread.img} className="w-full aspect-video object-cover" alt="Thread" />
               <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{thread.title}</h3>
                  <div className="flex justify-between items-center text-xs text-gray-500">
                     <span>By {thread.author}</span>
                     <div className="flex gap-4">
                        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-primary text-sm">favorite</span> {thread.likes}</span>
                        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">chat_bubble</span> {thread.replies}</span>
                     </div>
                  </div>
               </div>
            </div>
          ))}
       </div>
     </main>

     <button className="fixed bottom-24 right-6 size-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center z-50">
       <span className="material-symbols-outlined text-3xl">add</span>
     </button>
   </div>
 );
};

export default Forum;
