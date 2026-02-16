
import React from 'react';
import { Screen } from '../types';

interface Props { navigate: (s: Screen) => void; }

const SafetyPhotoVerify: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-dark min-h-screen text-white font-display flex flex-col">
      <header className="p-4 flex items-center justify-between border-b border-white/5 sticky top-0 bg-background-dark/80 backdrop-blur-md z-50">
         <button onClick={() => navigate('HOST_DASHBOARD')} className="p-1"><span className="material-symbols-outlined">arrow_back</span></button>
         <h2 className="font-bold tracking-tight">On-Site Verification</h2>
         <span className="material-symbols-outlined text-primary shadow-[0_0_10px_rgba(255,56,93,0.4)]">verified</span>
      </header>

      <main className="max-w-md mx-auto p-4 pt-8 flex-1 w-full">
         <h1 className="text-2xl font-black mb-2 tracking-tight">Capture Safety Photos</h1>
         <p className="text-white/50 text-sm mb-12">Live photos help guests feel safe. Please ensure images are clear and well-lit.</p>

         <div className="aspect-square rounded-[3rem] overflow-hidden relative border-4 border-primary/30 bg-black mb-8 group shadow-2xl">
            <img src="https://picsum.photos/800/800?medical-kit" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700" alt="Camera" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-12">
               <div className="size-full border-2 border-dashed border-white/20 rounded-[2.5rem] flex items-center justify-center">
                  <span className="material-symbols-outlined text-7xl text-white/10 animate-pulse">photo_camera</span>
               </div>
            </div>
            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-xl text-black px-4 py-2 rounded-full text-[10px] font-black uppercase flex items-center gap-2 shadow-xl">
               <div className="size-2 rounded-full bg-amber-500 animate-pulse shadow-[0_0_10px_rgba(245,158,11,0.8)]"></div> AI ANALYZING...
            </div>
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/60 backdrop-blur-md rounded-2xl border border-white/10">
               <p className="text-[10px] font-black uppercase text-white/40 mb-1">Target Object</p>
               <p className="font-bold text-sm">Emergency Medical Kit</p>
            </div>
         </div>

         <button className="w-full bg-primary py-5 rounded-[2rem] font-black text-lg shadow-[0_15px_30px_rgba(255,56,93,0.3)] flex items-center justify-center gap-3 active:scale-95 transition-all">
            <span className="material-symbols-outlined text-2xl">photo_camera</span> CAPTURE CLEAR PHOTO
         </button>
        
         <div className="mt-12 space-y-3">
            <div className="p-5 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-between group hover:bg-white/10 transition-all cursor-pointer">
               <div className="flex items-center gap-4">
                  <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary"><span className="material-symbols-outlined font-black">medical_services</span></div>
                  <div><p className="font-bold text-sm">EpiPen Storage Location</p><p className="text-[10px] text-green-400 font-black uppercase tracking-widest">Verified by AI</p></div>
               </div>
               <span className="material-symbols-outlined text-green-400 font-black">check_circle</span>
            </div>
         </div>
      </main>
   </div>
 );
};

export default SafetyPhotoVerify;
