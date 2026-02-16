import React from 'react';
import { Screen } from '../types';

interface Props { navigate: (s: Screen) => void; }

const VIPMeetGreet: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-dark min-h-screen text-white font-display">
      <header className="p-6 pt-16 flex items-center justify-between">
         <button onClick={() => navigate('PLUS_DASHBOARD')} className="p-2"><span className="material-symbols-outlined">arrow_back</span></button>
         <h2 className="font-black text-xs uppercase tracking-widest text-primary">VIP Services</h2>
         <div className="size-10"></div>
      </header>

      <main className="max-w-md mx-auto p-6 space-y-12">
         <div className="relative h-[45vh] rounded-[3rem] overflow-hidden shadow-2xl border border-white/10">
            <img src="https://picsum.photos/800/1200?random=vip" className="w-full h-full object-cover" alt="VIP" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
            <div className="absolute bottom-10 left-10 right-10">
               <span className="bg-primary px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 inline-block shadow-xl">Plus Exclusive</span>
               <h1 className="text-4xl font-black leading-none mb-2 tracking-tighter uppercase">Fast-Track your<br/>Arrival</h1>
               <p className="text-sm opacity-70">Dedicated airport concierge team at your service.</p>
            </div>
         </div>

         <div className="grid grid-cols-2 gap-4">
            {[
              { t: 'Gate Assistant', i: 'hail' },
              { t: 'Fast-track', i: 'verified_user' },
              { t: 'Porter Service', i: 'luggage' },
              { t: 'Direct Escort', i: 'directions_car' }
            ].map(item => (
              <div key={item.t} className="p-5 bg-white/5 border border-white/10 rounded-2xl flex flex-col gap-4">
                 <span className="material-symbols-outlined text-primary text-3xl">{item.i}</span>
                 <p className="font-black text-xs uppercase tracking-widest">{item.t}</p>
              </div>
            ))}
         </div>

         <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] flex flex-col gap-6">
            <div className="flex justify-between items-end"><div><p className="text-[10px] font-black opacity-30 uppercase mb-1">Service Fee</p><p className="text-4xl font-black tracking-tighter">$149</p></div><span className="text-primary text-[10px] font-black uppercase border border-primary/20 px-3 py-1 rounded-full bg-primary/10 tracking-widest">Plus Elite Rate</span></div>
            <button onClick={() => navigate('PACKAGE_CHECKOUT')} className="w-full bg-primary py-5 rounded-2xl font-black text-lg shadow-2xl active:scale-95 transition-transform uppercase tracking-widest">Add to my Trip</button>
         </div>
      </main>
   </div>
 );
};

export default VIPMeetGreet;