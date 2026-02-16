
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Explore: React.FC = () => {
    const navigate = useNavigate();
    const categories = ["Top 10", "Adventure", "Culture", "Water Sports", "Food Tours", "Workshops"];
    
    return (
        <div className="pb-20">
            {/* Top AppBar / Search */}
            <div className="sticky top-0 z-40 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-4 pt-6 pb-2">
                <div className="flex items-center gap-3">
                    <div onClick={() => navigate('/home/hero')} className="flex-1 flex items-center bg-white dark:bg-[#2d1a1e] rounded-full px-4 py-3 shadow-sm border border-gray-100 dark:border-gray-800 cursor-pointer">
                        <span className="material-symbols-outlined text-gray-400 mr-2">search</span>
                        <input className="bg-transparent border-none focus:ring-0 text-sm w-full outline-none pointer-events-none" placeholder="Where to next?" type="text" readOnly/>
                        <span className="material-symbols-outlined text-gray-400">tune</span>
                    </div>
                    <div className="size-10 rounded-full bg-gray-200 overflow-hidden shrink-0 cursor-pointer" onClick={() => navigate('/host/overview')}>
                        <img className="w-full h-full object-cover" alt="User avatar" src="https://picsum.photos/100/100?random=1"/>
                    </div>
                </div>
            </div>

            {/* Category Chips */}
            <div className="flex gap-2 px-4 py-3 overflow-x-auto no-scrollbar">
                {categories.map((cat, idx) => (
                    <div key={cat} onClick={() => navigate('/home')} className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full px-5 shadow-sm cursor-pointer ${idx === 0 ? 'bg-primary text-white' : 'bg-white dark:bg-[#2d1a1e] border border-gray-100 dark:border-gray-800'}`}>
                        <p className={`text-sm ${idx === 0 ? 'font-semibold' : 'font-medium'}`}>{cat}</p>
                    </div>
                ))}
            </div>

            {/* Hero Section */}
            <div className="px-4 py-4">
                <div className="relative group cursor-pointer" onClick={() => navigate('/activity/details')}>
                    <div className="bg-cover bg-center flex flex-col justify-end overflow-hidden rounded-xl min-h-[220px] shadow-lg" style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 60%), url("https://picsum.photos/600/400?random=10")` }}>
                        <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                            50% Off
                        </div>
                        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white">
                            <span className="material-symbols-outlined text-[20px]">favorite</span>
                        </div>
                        <div className="p-5">
                            <h1 className="text-white text-2xl font-bold leading-tight">Desert Safari & BBQ Dinner</h1>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="text-yellow-400 text-sm">★★★★★</span>
                                <span className="text-white/80 text-sm">4.9 (1.2k reviews)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section: Adventure */}
            <div className="py-2">
                <div className="flex items-center justify-between px-4 pb-3">
                    <h2 className="text-lg font-bold tracking-tight">Adventure</h2>
                    <button className="text-primary text-sm font-semibold" onClick={() => navigate('/activity-feed')}>View activity feed</button>
                </div>
                <div className="flex overflow-x-auto no-scrollbar gap-4 px-4 pb-6">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="flex flex-col gap-3 min-w-[180px] w-[180px] cursor-pointer active:scale-95 transition-transform" onClick={() => i === 1 ? navigate('/activity/paragliding') : navigate('/activity/details')}>
                            <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-gray-200" style={{ backgroundImage: `url("https://picsum.photos/300/400?random=${i}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <div className="absolute top-2 right-2 bg-white/30 backdrop-blur-sm p-1.5 rounded-full text-white">
                                    <span className="material-symbols-outlined text-[18px]">favorite</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-sm font-bold leading-snug">{i === 1 ? 'Swiss Alps Paragliding' : `Adventure Quest ${i}`}</h3>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">⭐ 4.9 • 2h</p>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="text-xs bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-1.5 py-0.5 rounded font-medium">Nut-Free</span>
                                </div>
                                <p className="text-accent-price font-bold text-base mt-1">${100 + i * 10}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Section: Family Friendly */}
            <div className="py-2 mb-10">
                <div className="flex items-center justify-between px-4 pb-3">
                    <h2 className="text-lg font-bold tracking-tight">Family Friendly</h2>
                    <button className="text-primary text-sm font-semibold" onClick={() => navigate('/adventure-suggestions')}>Suggestions</button>
                </div>
                <div className="flex overflow-x-auto no-scrollbar gap-4 px-4 pb-6">
                    {[4, 5].map((i) => (
                        <div key={i} className="flex flex-col gap-3 min-w-[240px] w-[240px] cursor-pointer" onClick={() => navigate('/activity/details')}>
                            <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-200" style={{ backgroundImage: `url("https://picsum.photos/400/225?random=${i}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <div className="absolute bottom-2 left-2 bg-white text-xs font-bold text-black px-2 py-1 rounded shadow-sm">Family Bundle</div>
                            </div>
                            <div>
                                <h3 className="text-sm font-bold leading-snug">City Zoo All-Day Pass</h3>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">⭐ 4.6 • 6h • Unlimited</p>
                                <p className="text-accent-price font-bold text-base mt-1">$45</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Explore;
