
import React from 'react';
import { Screen } from '../types';

interface Props { navigate: (s: Screen) => void; }

const ResolutionCard: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-dark min-h-screen text-white font-display flex items-center justify-center p-8">
      <div className="w-full max-w-sm aspect-[9/16] rounded-[3rem] overflow-hidden relative shadow-[0_50px_100px_rgba(0,0,0,0.8)] border-8 border-black">
         <img src="https://picsum.photos/1080/1920?aurora" className="w-full h-full object-cover" alt="Aurora" />
         <div className="absolute inset-0 bg-primary/80 mix-blend-multiply opacity-60"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>
        
         <div className="absolute inset-0 p-10 flex flex-col justify-between text-center items-center">
            <div>
               <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-60 mb-2 block">2025 Journey</span>
               <p className="text-2xl font-black">My New Year<br/>Resolution</p>
            </div>

            <div className="space-y-12">
               <div><span className="material-symbols-outlined text-4xl mb-3">public</span><h2 className="text-4xl font-black italic uppercase leading-none tracking-tighter">Explore 5<br/>New Countries</h2></div>
               <div className="w-12 h-0.5 bg-white/20 mx-auto rounded-full"></div>
               <div><span className="material-symbols-outlined text-4xl mb-3">landscape</span><h2 className="text-4xl font-black italic uppercase leading-none tracking-tighter">Experience a<br/>Solo Safari</h2></div>
            </div>

            <div className="w-full p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-between">
               <div className="text-left"><p className="text-xl font-black">StayNest</p><p className="text-[8px] font-bold uppercase opacity-60 tracking-widest">Plan your year</p></div>
               <div className="size-12 bg-white p-1 rounded-lg shadow-lg"><img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=StayNestResolution" className="size-full" alt="QR" /></div>
            </div>
         </div>
         <button onClick={() => navigate('TRAVEL_GOALS')} className="absolute top-6 left-6 text-white/50 hover:text-white"><span className="material-symbols-outlined">close</span></button>
      </div>
   </div>
 );
};

export default ResolutionCard;
