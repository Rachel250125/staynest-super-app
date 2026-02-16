
import React from 'react';
import { Screen } from '../types';

interface Props {
 navigate: (s: Screen) => void;
}

const Leaderboard: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-light dark:bg-background-dark font-display text-[#1d0c0f] dark:text-white antialiased min-h-screen">
     <header className="fixed top-0 left-0 right-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
       <div className="flex items-center p-4 justify-between max-w-md mx-auto">
         <div onClick={() => navigate('PROFILE')} className="flex size-10 shrink-0 items-center justify-center cursor-pointer">
           <span className="material-symbols-outlined text-2xl">arrow_back_ios</span>
         </div>
         <h2 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center">Friends Leaderboard</h2>
         <div className="flex w-10 items-center justify-end"><span className="material-symbols-outlined">more_horiz</span></div>
       </div>
     </header>

     <main className="pt-20 pb-24 max-w-md mx-auto">
       <div className="px-4 mb-8 pt-8 flex justify-center items-end gap-2">
         <div className="flex flex-col items-center flex-1">
            <div className="w-16 h-16 rounded-full border-4 border-gray-300 overflow-hidden mb-2">
              <img src="https://picsum.photos/100/100?random=30" alt="Rank 2" />
            </div>
            <p className="text-sm font-bold truncate w-24 text-center">Alex Rivera</p>
            <div className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-[11px] font-bold">42 Badges</div>
         </div>
         <div className="flex flex-col items-center flex-1 -mt-4">
            <span className="material-symbols-outlined text-yellow-500 text-3xl mb-1">workspace_premium</span>
            <div className="w-24 h-24 rounded-full border-4 border-yellow-400 overflow-hidden mb-2 shadow-xl">
              <img src="https://picsum.photos/100/100?random=31" alt="Rank 1" />
            </div>
            <p className="text-base font-bold truncate w-28 text-center">Sarah Chen</p>
            <div className="bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">58 Badges</div>
         </div>
         <div className="flex flex-col items-center flex-1">
            <div className="w-16 h-16 rounded-full border-4 border-orange-400 overflow-hidden mb-2">
              <img src="https://picsum.photos/100/100?random=32" alt="Rank 3" />
            </div>
            <p className="text-sm font-bold truncate w-24 text-center">Jordan Lee</p>
            <div className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-[11px] font-bold">35 Badges</div>
         </div>
       </div>

       <div className="bg-white dark:bg-white/5 rounded-t-[2rem] pt-6 min-h-[500px] shadow-lg">
          <div className="px-6 pb-4 flex justify-between items-center opacity-50 text-[10px] font-bold uppercase tracking-widest">
             <span>Ranking</span>
             <span>Points</span>
          </div>
          {[4,5,6,7].map(rank => (
            <div key={rank} className={`flex items-center gap-4 px-6 py-4 border-b border-gray-50 dark:border-white/5 ${rank === 4 ? 'bg-primary/5' : ''}`}>
              <span className="text-sm font-bold w-4">{rank}</span>
              <img src={`https://picsum.photos/100/100?random=${rank+40}`} className="w-10 h-10 rounded-full" alt="Friend" />
              <div className="flex-1">
                 <p className="text-sm font-bold">{rank === 4 ? 'Emily Watson (You)' : `Explorer ${rank}`}</p>
                 <p className="text-[10px] text-gray-500">{(1000 - rank*100)} pts</p>
              </div>
              <span className="text-xs font-bold text-primary">+{Math.floor(100/rank)}</span>
            </div>
          ))}
       </div>
     </main>
   </div>
 );
};

export default Leaderboard;
