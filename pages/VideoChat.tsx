import React from 'react';
import { Screen } from '../types';

interface Props {
 navigate: (s: Screen) => void;
}

const VideoChat: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-dark min-h-screen text-white font-display overflow-hidden flex flex-col">
      <header className="p-6 pt-12 flex items-center justify-between z-50 absolute top-0 left-0 right-0">
         <div className="bg-black/40 px-4 py-1.5 rounded-full backdrop-blur-xl flex items-center gap-3 border border-white/10 shadow-lg">
            <div className="size-2.5 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]"></div>
            <span className="text-sm font-black tracking-widest">12:45</span>
         </div>
         <button onClick={() => navigate('GROUP_HUB')} className="bg-black/40 p-3 rounded-full backdrop-blur-xl border border-white/10 shadow-lg active:scale-90 transition-transform"><span className="material-symbols-outlined text-2xl">close</span></button>
      </header>

      <main className="flex-1 grid grid-cols-2 grid-rows-3 gap-2 p-2 pt-28">
         <div className="col-span-2 row-span-2 rounded-[2rem] overflow-hidden bg-zinc-800 relative border border-white/5 shadow-2xl group">
            <img src="https://picsum.photos/800/1000?random=host-live" className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110" alt="Sarah" />
            <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-black border border-white/10 tracking-widest uppercase shadow-lg">Sarah (Host)</div>
         </div>
         <div className="rounded-[1.5rem] overflow-hidden bg-zinc-800 border border-white/5 shadow-xl relative">
            <img src="https://picsum.photos/400/400?random=101" className="w-full h-full object-cover" alt="Marc" />
            <div className="absolute bottom-3 left-3 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest">Marc</div>
         </div>
         <div className="rounded-[1.5rem] overflow-hidden bg-zinc-800 border border-white/5 shadow-xl relative">
            <img src="https://picsum.photos/400/400?random=102" className="w-full h-full object-cover" alt="Elena" />
            <div className="absolute bottom-3 left-3 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest">Elena</div>
         </div>
      </main>

      <div className="p-8 pb-12 bg-gradient-to-t from-black via-black/40 to-transparent z-50">
         <div className="flex justify-around items-center bg-zinc-900/60 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-5 max-w-md mx-auto shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none"></div>
            <button className="size-14 rounded-full bg-white/10 flex items-center justify-center active:bg-white/20 transition-all shadow-lg border border-white/5"><span className="material-symbols-outlined text-2xl">mic</span></button>
            <button className="size-14 rounded-full bg-white/10 flex items-center justify-center active:bg-white/20 transition-all shadow-lg border border-white/5"><span className="material-symbols-outlined text-2xl">videocam</span></button>
            <button className="size-14 rounded-full bg-primary/20 flex items-center justify-center text-primary active:bg-primary/30 transition-all shadow-lg border border-primary/10"><span className="material-symbols-outlined text-2xl font-black">screen_share</span></button>
            <button onClick={() => navigate('GROUP_HUB')} className="size-16 rounded-full bg-red-600 flex items-center justify-center shadow-[0_10px_25px_rgba(220,38,38,0.4)] active:scale-90 transition-all border-2 border-red-500"><span className="material-symbols-outlined text-3xl font-black">call_end</span></button>
         </div>
      </div>
   </div>
 );
};

export default VideoChat;