
import React from 'react';
import { Screen } from '../types';

interface Props { navigate: (s: Screen) => void; }

const SocialSharing: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-dark min-h-screen flex items-center justify-center p-6 font-display overflow-hidden">
      <div className="w-full max-w-sm bg-white rounded-[3rem] overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.7)] flex flex-col aspect-[9/16] relative border-8 border-black">
         <div className="relative flex-1">
            <img src="https://picsum.photos/1080/1920?random=story" className="w-full h-full object-cover" alt="Story" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
           
            <div className="absolute top-12 left-8 right-8 flex justify-between items-center z-20">
               <div className="flex items-center gap-2 bg-white/20 backdrop-blur-xl px-4 py-2 rounded-full border border-white/20 shadow-lg"><span className="material-symbols-outlined text-white text-sm font-black">auto_awesome</span><span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">StayNest AI Trip</span></div>
               <button onClick={() => navigate('GROUP_HUB')} className="size-10 bg-black/20 backdrop-blur-xl rounded-full flex items-center justify-center text-white border border-white/10"><span className="material-symbols-outlined">close</span></button>
            </div>

            <div className="absolute bottom-12 left-8 right-8 text-white z-20">
               <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Summer 2024</span>
               <h1 className="text-5xl font-black leading-none mb-6 italic tracking-tighter uppercase">Our Dream Trip<br/>to Dubai</h1>
               <p className="text-xs font-bold opacity-80 mb-10 tracking-widest leading-relaxed">Desert Safari • Luxury Cruise • <br/>Nut-Free Verified Stays</p>
              
               <div className="p-5 bg-primary rounded-2xl flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(255,56,93,0.4)] active:scale-95 transition-transform group cursor-pointer">
                  <span className="text-sm font-black uppercase tracking-[0.2em]">View Full Itinerary</span>
                  <span className="material-symbols-outlined font-black group-hover:translate-x-1 transition-transform">arrow_forward</span>
               </div>
            </div>

            <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-gradient-to-br from-primary/10 via-transparent to-primary/5"></div>
         </div>
      </div>
   </div>
 );
};

export default SocialSharing;
