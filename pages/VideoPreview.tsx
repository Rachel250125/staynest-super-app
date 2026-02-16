import React from 'react';
import { Screen } from '../types';

interface Props { navigate: (s: Screen) => void; }

const VideoPreview: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-black min-h-screen text-white font-display overflow-hidden flex flex-col relative">
      <div className="absolute inset-0 z-0">
         <img src="https://picsum.photos/1080/1920?random=preview-video" className="size-full object-cover opacity-80" alt="Video" />
         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60"></div>
      </div>

      <header className="relative z-10 p-6 pt-16 flex flex-col gap-8">
         <div className="flex gap-1.5">
            {[1,2,3,4].map(i => (
              <div key={i} className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden shadow-sm"><div className={`h-full bg-primary transition-all duration-1000 ${i === 1 ? 'w-full' : i === 2 ? 'w-1/3' : 'w-0'}`}></div></div>
            ))}
         </div>
         <div className="flex justify-between items-center px-1">
            <button onClick={() => navigate('HOME')} className="size-11 bg-black/30 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/10 shadow-xl active:scale-90 transition-transform"><span className="material-symbols-outlined text-2xl font-black">close</span></button>
            <h2 className="font-black text-[10px] uppercase tracking-[0.4em] drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] text-white/90">Experience Highlights</h2>
            <button className="size-11 bg-black/30 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/10 shadow-xl active:scale-90 transition-transform"><span className="material-symbols-outlined text-2xl">volume_up</span></button>
         </div>
      </header>

      <div className="absolute right-6 bottom-56 z-20 flex flex-col gap-10 items-center">
         <div className="flex flex-col items-center gap-1.5 group cursor-pointer">
            <button className="size-14 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-2xl transition-all group-active:scale-90 group-hover:border-primary/50">
               <span className="material-symbols-outlined text-primary fill-1 text-3xl">favorite</span>
            </button>
            <p className="text-[10px] font-black uppercase tracking-widest drop-shadow-lg">2.4k</p>
         </div>
         <div className="flex flex-col items-center gap-1.5 group cursor-pointer">
            <button className="size-14 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-2xl transition-all group-active:scale-90 group-hover:border-primary/50">
               <span className="material-symbols-outlined text-white text-3xl">send</span>
            </button>
            <p className="text-[10px] font-black uppercase tracking-widest drop-shadow-lg">Share</p>
         </div>
         <button onClick={() => navigate('PROFILE')} className="size-14 rounded-full border-2 border-primary overflow-hidden shadow-2xl active:scale-95 transition-transform hover:rotate-6">
            <img src="https://picsum.photos/100/100?random=host3" className="size-full object-cover" alt="H" />
         </button>
      </div>

      <main className="mt-auto relative z-10 p-6 pb-12 w-full max-w-md mx-auto">
         <div className="p-8 bg-black/40 backdrop-blur-[40px] border border-white/10 rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.8)] space-y-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="flex justify-between items-start gap-4 relative z-10">
               <div className="min-w-0">
                  <h3 className="text-2xl font-black leading-tight mb-2 tracking-tighter uppercase">Paragliding in Interlaken</h3>
                  <div className="flex items-center gap-2 text-primary">
                     <span className="material-symbols-outlined text-[16px] fill-1 font-black">star</span>
                     <span className="text-xs font-black tracking-widest uppercase">4.9 • 120 Reviews</span>
                  </div>
               </div>
               <div className="text-right shrink-0">
                  <p className="text-3xl font-black tracking-tighter italic text-white leading-none">€180</p>
                  <p className="text-[9px] font-black opacity-40 uppercase mt-1 tracking-widest">Per Guest</p>
               </div>
            </div>
            <button onClick={() => navigate('BOOKING')} className="w-full bg-primary py-5 rounded-[2rem] font-black text-lg shadow-[0_15px_30px_rgba(255,56,93,0.4)] flex items-center justify-center gap-3 uppercase tracking-[0.1em] active:scale-[0.98] transition-all border border-white/10">
               Check Dates <span className="material-symbols-outlined font-black">calendar_today</span>
            </button>
         </div>
      </main>
   </div>
 );
};

export default VideoPreview;