
import React from 'react';
import { Screen } from '../types';

interface Props { navigate: (s: Screen) => void; }

const ModeratorWeek: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-dark min-h-screen text-white font-display flex flex-col items-center justify-center p-6 text-center">
      <div className="relative mb-8">
         <div className="absolute -inset-10 bg-primary/20 blur-3xl rounded-full animate-pulse"></div>
         <div className="relative p-1 bg-gradient-to-tr from-yellow-400 to-primary rounded-full shadow-2xl">
            <img src="https://picsum.photos/300/300?random=mod" className="size-48 rounded-full border-4 border-background-dark" alt="Mod" />
         </div>
         <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full font-black text-xs uppercase shadow-lg">Top Pick</div>
      </div>

      <h1 className="text-4xl font-black tracking-tight mb-2">MODERATOR OF THE WEEK</h1>
      <p className="text-xl font-bold text-primary mb-8">EXPERT ALEX</p>

      <div className="grid grid-cols-2 gap-4 w-full max-w-sm mb-12">
         <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
            <p className="text-3xl font-black text-primary">250+</p>
            <p className="text-[10px] font-bold uppercase opacity-50">Replies</p>
         </div>
         <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
            <p className="text-3xl font-black text-primary">99%</p>
            <p className="text-[10px] font-bold uppercase opacity-50">Resolution</p>
         </div>
      </div>

      <button onClick={() => navigate('COMMUNITY')} className="w-full max-w-sm bg-white text-black font-black py-4 rounded-full shadow-2xl active:scale-95 transition-transform">MEET THE EXPERT</button>
   </div>
 );
};

export default ModeratorWeek;
