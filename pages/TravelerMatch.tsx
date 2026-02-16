import React from 'react';
import { Screen } from '../types';

interface Props { navigate: (s: Screen) => void; }

const TravelerMatch: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-dark min-h-screen text-white font-display">
      <header className="p-4 flex items-center justify-between">
         <button onClick={() => navigate('COMMUNITY')} className="p-1"><span className="material-symbols-outlined">arrow_back</span></button>
         <h2 className="font-black text-sm uppercase tracking-widest text-primary">Traveler Match</h2>
         <span className="material-symbols-outlined">tune</span>
      </header>
      <main className="max-w-md mx-auto p-4 h-[calc(100vh-120px)] flex flex-col">
         <div className="relative flex-1 rounded-[3rem] overflow-hidden shadow-2xl group border border-white/10">
            <img src="https://picsum.photos/800/1200?random=maya" className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" alt="Match" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
            <div className="absolute top-6 right-6 bg-primary text-white px-4 py-2 rounded-full font-black text-xs shadow-2xl">92% MATCH</div>
           
            <div className="absolute bottom-32 left-8 right-8">
               <div className="flex items-center gap-3 mb-2"><h3 className="text-4xl font-black">Maya, 26</h3><span className="material-symbols-outlined text-blue-400 fill-1">verified</span></div>
               <p className="text-lg font-medium opacity-80 line-clamp-3 leading-tight">"I'm planning a 2025 trip to Japan and looking for a buddy! Let's explore Tokyo and Osaka together."</p>
               <div className="flex gap-2 mt-6 overflow-x-auto no-scrollbar pb-2"><span className="px-4 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-black uppercase border border-white/20 whitespace-nowrap">Adventure</span><span className="px-4 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-black uppercase border border-white/20 whitespace-nowrap">Solo Traveler</span></div>
            </div>

            <div className="absolute bottom-8 left-0 right-0 px-8 flex justify-between items-center gap-6">
               <button className="size-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"><span className="material-symbols-outlined text-3xl">close</span></button>
               <button onClick={() => navigate('MATCH_SUCCESS')} className="flex-1 bg-primary h-16 rounded-full font-black text-lg shadow-2xl shadow-primary/30 flex items-center justify-center gap-3 active:scale-95 transition-all">CONNECT <span className="material-symbols-outlined">favorite</span></button>
               <button onClick={() => navigate('CHAT')} className="size-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"><span className="material-symbols-outlined text-3xl">chat_bubble</span></button>
            </div>
         </div>
      </main>
   </div>
 );
};

export default TravelerMatch;