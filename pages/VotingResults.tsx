import React from 'react';
import { Screen } from '../types';

interface Props {
 navigate: (s: Screen) => void;
}

const VotingResults: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-light dark:bg-background-dark font-display min-h-screen pb-40 transition-colors duration-300">
     <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md p-4 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
        <button onClick={() => navigate('GROUP_HUB')} className="p-1"><span className="material-symbols-outlined">arrow_back</span></button>
        <h2 className="text-lg font-bold tracking-tight">Voting Results</h2>
        <span className="material-symbols-outlined cursor-pointer">share</span>
     </header>
     <main className="max-w-md mx-auto px-4 py-8">
        <h1 className="text-4xl font-black text-center mb-10 tracking-tighter uppercase">The Winner is... 🎉</h1>
        <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] overflow-hidden border-4 border-yellow-400 shadow-2xl mb-8 relative">
           <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none"></div>
           <div className="relative aspect-video">
              <img src="https://picsum.photos/800/600?greece-oia" className="w-full h-full object-cover" alt="Santorini" />
              <div className="absolute top-6 left-6 bg-yellow-400 text-black px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">Most Voted</div>
           </div>
           <div className="p-8">
              <h2 className="text-3xl font-black mb-1 tracking-tighter dark:text-white uppercase leading-none">Santorini, Greece</h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-8 font-medium italic">8 votes out of 12 group members</p>
              <button onClick={() => navigate('DETAILS')} className="w-full bg-primary text-white py-4 rounded-2xl font-black text-lg shadow-xl active:scale-95 transition-all uppercase tracking-widest">View Stay Deals</button>
           </div>
        </div>
     </main>
   </div>
 );
};

export default VotingResults;