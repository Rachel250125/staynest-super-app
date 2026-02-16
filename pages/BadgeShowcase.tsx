
import React from 'react';

const BadgeShowcase: React.FC = () => {
    return (
        <div className="pb-24">
            <header className="sticky top-0 z-50 glass-header border-b border-gray-200 dark:border-gray-800 p-4 text-center">
                <h2 className="text-lg font-bold tracking-tight">Badge Portfolio</h2>
            </header>

            <div className="p-4">
                <div className="bg-white dark:bg-[#2d161a] rounded-xl p-6 shadow-sm flex items-center justify-between border border-gray-100 dark:border-gray-800">
                    <div className="flex flex-col gap-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Collection Progress</p>
                        <h2 className="text-3xl font-extrabold">12<span className="text-gray-400 text-lg font-normal">/40</span></h2>
                        <p className="text-primary text-xs font-semibold mt-1 flex items-center gap-1">
                            <span className="material-symbols-outlined text-xs">military_tech</span>
                            Level 4 Traveler
                        </p>
                    </div>
                    <div className="relative flex items-center justify-center size-20">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle className="text-gray-100 dark:text-gray-800" cx="40" cy="40" fill="transparent" r="34" stroke="currentColor" strokeWidth="6"></circle>
                            <circle className="text-primary" cx="40" cy="40" fill="transparent" r="34" stroke="currentColor" strokeDasharray="213.6" strokeDashoffset="149" strokeWidth="6" strokeLinecap="round"></circle>
                        </svg>
                        <span className="absolute text-sm font-bold">30%</span>
                    </div>
                </div>
            </div>

            <section className="px-4 py-2">
                <h3 className="text-lg font-bold mb-4">Unlocked Badges</h3>
                <div className="grid grid-cols-3 gap-4">
                    <Badge icon="flight_takeoff" label="First-Time Flyer" color="from-[#ff385d] to-[#ff7b91]" />
                    <Badge icon="health_and_safety" label="Allergy Hero" color="from-[#4facfe] to-[#00f2fe]" />
                    <Badge icon="public" label="Globetrotter" color="from-[#f093fb] to-[#f5576c]" />
                    <Badge icon="verified_user" label="Super Guest" color="from-[#43e97b] to-[#38f9d7]" />
                </div>
            </section>

            <section className="px-4 py-6">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold">Locked Badges</h3>
                    <span className="text-xs font-semibold text-primary">28 Hidden</span>
                </div>
                <div className="grid grid-cols-3 gap-4 opacity-50">
                    <Badge icon="nightlight" label="Night Owl" color="bg-gray-200 dark:bg-[#3a2025]" isLocked />
                    <Badge icon="castle" label="Royal Stay" color="bg-gray-200 dark:bg-[#3a2025]" isLocked />
                    <Badge icon="volunteer_activism" label="Host Hero" color="bg-gray-200 dark:bg-[#3a2025]" isLocked />
                </div>
            </section>
        </div>
    );
};

const Badge: React.FC<{ icon: string; label: string; color: string; isLocked?: boolean }> = ({ icon, label, color, isLocked }) => (
    <div className="flex flex-col items-center gap-2 cursor-pointer group active:scale-95 transition-transform">
        <div className={`hexagon w-full aspect-square flex items-center justify-center shadow-lg relative ${isLocked ? color : `bg-gradient-to-br ${color}`}`}>
            <span className={`material-symbols-outlined text-4xl ${isLocked ? 'text-gray-400' : 'text-white'}`}>{icon}</span>
            {isLocked && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                    <span className="material-symbols-outlined text-white text-lg">lock</span>
                </div>
            )}
        </div>
        <p className="text-[11px] font-bold text-center leading-tight">{label}</p>
    </div>
);

export default BadgeShowcase;
