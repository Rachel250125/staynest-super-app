
import React from 'react';
import { Screen } from '../types';

interface Props {
 navigate: (s: Screen) => void;
}

const PhotoGallery: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-dark min-h-screen text-white font-display overflow-x-hidden">
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md p-4 flex items-center justify-between border-b border-white/5">
        <button onClick={() => navigate('GROUP_HUB')} className="p-2 bg-white/5 rounded-full"><span className="material-symbols-outlined">arrow_back</span></button>
        <div className="text-center">
           <h2 className="text-lg font-bold">Trip Memories</h2>
           <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Santorini 2024</p>
        </div>
        <span className="material-symbols-outlined cursor-pointer">more_horiz</span>
      </header>
      <main className="p-2 grid grid-cols-2 gap-2 pb-32">
         {[1,2,3,4,5,6,7,8].map(i => (
           <div key={i} className={`relative rounded-lg overflow-hidden group cursor-pointer ${i % 3 === 0 ? 'row-span-2 aspect-[3/4]' : 'aspect-square'}`}>
              <img src={`https://picsum.photos/400/600?random=${i+120}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Memory" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-2 right-2 size-7 rounded-full border-2 border-white overflow-hidden shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                 <img src={`https://picsum.photos/100/100?random=${i+200}`} alt="User" className="w-full h-full object-cover" />
              </div>
           </div>
         ))}
      </main>
      <button className="fixed bottom-24 right-6 size-14 bg-primary rounded-full shadow-2xl flex items-center justify-center active:scale-95 transition-transform z-50">
         <span className="material-symbols-outlined text-3xl text-white">add_a_photo</span>
      </button>
   </div>
 );
};

export default PhotoGallery;
