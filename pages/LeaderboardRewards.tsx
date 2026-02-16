
import React from 'react';
import { Screen } from '../types';

interface Props { navigate: (s: Screen) => void; }

const LeaderboardRewards: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-dark min-h-screen text-white font-display">
      <header className="p-4 flex items-center justify-between border-b border-white/10">
         <button onClick={() => navigate('LEADERBOARD')} className="p-1"><span className="material-symbols-outlined">arrow_back_ios</span></button>
         <h2 className="font-black uppercase tracking-[0.2em] text-xs">Monthly Rewards</h2>
         <span className="material-symbols-outlined">info</span>
      </header>

      <main className="max-w-md mx-auto p-4 pb-32">
         <div className="p-8 rounded-3xl bg-gradient-to-br from-yellow-400 to-primary text-black mb-8 shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
               <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-2 opacity-60">October Season</p>
               <h1 className="text-4xl font-black leading-none mb-4">₹50,000<br/>PRIZE POOL</h1>
               <p className="font-bold text-sm">Top 3 members win travel credits & exclusive profile badges.</p>
            </div>
            <span className="absolute -bottom-4 -right-4 material-symbols-outlined text-[120px] opacity-10">trophy</span>
         </div>

         <div className="space-y-4">
            <h3 className="font-black text-lg">Top Tier Rewards</h3>
            {[
              { rank: '1ST', prize: '₹25,000 Credit', sub: 'Platinum Plus Access', color: 'from-yellow-400 to-yellow-600' },
              { rank: '2ND', prize: '₹10,000 Credit', sub: 'Elite Gold Badge', color: 'from-gray-300 to-gray-500' },
              { rank: '3RD', prize: '₹5,000 Credit', sub: '1,000 Nest Points', color: 'from-orange-400 to-orange-700' }
            ].map(item => (
              <div key={item.rank} className="p-5 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between">
                 <div className="flex items-center gap-4">
                    <div className={`size-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-black font-black`}>{item.rank}</div>
                    <div><p className="font-bold">{item.prize}</p><p className="text-xs opacity-50">{item.sub}</p></div>
                 </div>
                 <span className="material-symbols-outlined opacity-30">chevron_right</span>
              </div>
            ))}
         </div>
      </main>
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-background-dark/90 backdrop-blur-md">
         <button onClick={() => navigate('PROFILE')} className="w-full bg-primary text-white py-4 rounded-full font-black text-lg shadow-2xl shadow-primary/20">VIEW MY RANKING</button>
      </div>
   </div>
 );
};

export default LeaderboardRewards;
