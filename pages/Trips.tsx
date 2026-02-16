
import React from 'react';

const Trips: React.FC = () => {
    return (
        <div className="pb-24">
            <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 p-4">
                <h1 className="text-xl font-bold tracking-tight">My Trips</h1>
            </header>

            <div className="p-4">
                <div className="flex h-11 items-center justify-center rounded-xl bg-gray-200/50 dark:bg-gray-800/50 p-1 mb-6">
                    <button className="flex-1 py-2 text-sm font-semibold rounded-lg bg-white dark:bg-gray-700 shadow-sm text-primary">Upcoming</button>
                    <button className="flex-1 py-2 text-sm font-medium text-gray-500 dark:text-gray-400">Completed</button>
                    <button className="flex-1 py-2 text-sm font-medium text-gray-500 dark:text-gray-400">Cancelled</button>
                </div>

                <div className="space-y-4">
                    <TripCard 
                        title="Grand Hyatt Mumbai" 
                        status="Confirmed" 
                        date="Oct 12 - Oct 15" 
                        location="Mumbai, India" 
                        image="https://picsum.photos/400/300?random=20"
                        isSelect={false}
                    />
                    <TripCard 
                        title="Seaside Luxury Villa" 
                        status="StayNest Select" 
                        date="Nov 05 - Nov 08" 
                        location="Goa, India" 
                        image="https://picsum.photos/400/300?random=21"
                        isSelect={true}
                    />
                </div>
            </div>
        </div>
    );
};

const TripCard: React.FC<{ title: string; status: string; date: string; location: string; image: string; isSelect: boolean }> = ({ title, status, date, location, image, isSelect }) => (
    <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800">
        <div className="p-4 flex gap-4">
            <div className="w-24 h-24 shrink-0 bg-center bg-cover rounded-lg" style={{ backgroundImage: `url("${image}")` }}></div>
            <div className="flex flex-col justify-between flex-1">
                <div>
                    <span className={`text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-full uppercase ${isSelect ? 'bg-primary/10 text-primary' : 'bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400'}`}>
                        {status}
                    </span>
                    <h3 className="text-base font-bold mt-1 leading-tight">{title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">{date} • 2 Guests</p>
                </div>
                <div className="flex items-center text-xs text-gray-400">
                    <span className="material-symbols-outlined text-sm mr-1">location_on</span>
                    {location}
                </div>
            </div>
        </div>
        <div className="px-4 pb-4 flex gap-2">
            <button className="flex-1 bg-primary text-white text-xs font-bold py-2.5 rounded-lg flex items-center justify-center gap-1">
                <span className="material-symbols-outlined text-sm">confirmation_number</span>
                View Voucher
            </button>
            <button className="flex-1 bg-gray-100 dark:bg-gray-800 text-[#1d0c0f] dark:text-white text-xs font-bold py-2.5 rounded-lg flex items-center justify-center gap-1 border border-gray-200 dark:border-gray-700">
                <span className="material-symbols-outlined text-sm">settings</span>
                Manage
            </button>
        </div>
    </div>
);

export default Trips;
