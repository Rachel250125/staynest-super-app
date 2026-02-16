
import React from 'react';
import { Screen } from '../types';

interface Props { navigate: (s: Screen) => void; }

const ModeratorHOF: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-dark min-h-screen text-white font-display">
     <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md p-4 flex items-center justify-between">
        <button onClick={() => navigate('COMMUNITY')} className="p-1"><span className="material-symbols-outlined">arrow_back</span></button>
        <h2 className="text-primary font-black uppercase tracking-[0.2em] text-sm">Legacy of Excellence</h2>
        <div className="size-10"></div>
     </header>

     <main className="max-w-md mx-auto p-6">
        <h1 className="text-4xl font-black mb-2 text-center text-white">Moderator Hall of Fame</h1>
        <p className="text-center opacity-50 text-sm mb-12">Guardians of the StayNest Community</p>

        <div className="space-y-8">
           {[
             { name: 'Julian V.', role: 'Security Architect', verifications: '10.2k+', img: 'https://picsum.photos/400/400?random=11' },
             { name: 'Elena R.', role: 'Community Lead', impact: 'Top 0.1%', img: 'https://picsum.photos/400/400?random=12' }
           ].map(legend => (
             <div key={legend.name} className="relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 group shadow-2xl">
                <img src={legend.img} className="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Legend" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                   <span className="text-primary text-[10px] font-black uppercase tracking-widest">Grandmaster</span>
                   <h3 className="text-2xl font-black text-white">{legend.name}</h3>
                   <p className="opacity-70 text-sm">{legend.role}</p>
                </div>
             </div>
           ))}
        </div>
     </main>
   </div>
 );
};

export default ModeratorHOF;
