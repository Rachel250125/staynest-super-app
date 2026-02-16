
import React from 'react';

const Inbox: React.FC = () => {
    return (
        <div className="pb-24">
            <header className="sticky top-0 z-30 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md p-4 pb-2 border-b border-gray-100 dark:border-gray-800">
                <h1 className="text-xl font-bold tracking-tight text-center">Inbox</h1>
                <div className="mt-4 flex gap-3 overflow-x-auto no-scrollbar pb-2">
                    <button className="flex h-9 shrink-0 items-center justify-center rounded-lg bg-primary text-white px-5 shadow-sm">All</button>
                    <button className="flex h-9 shrink-0 items-center justify-center rounded-lg bg-gray-100 dark:bg-[#2d1b1e] px-5 border border-gray-200 dark:border-gray-700">Unread</button>
                    <button className="flex h-9 shrink-0 items-center justify-center rounded-lg bg-gray-100 dark:bg-[#2d1b1e] px-5 border border-gray-200 dark:border-gray-700">Experts</button>
                </div>
            </header>

            <main className="flex flex-col">
                <MessageItem 
                    name="Sarah Jenkins" 
                    msg="Can't wait to host you! Let me know if you need any directions..." 
                    time="5m ago" 
                    isUnread={true} 
                    image="https://picsum.photos/100/100?random=30" 
                />
                <MessageItem 
                    name="John O'Neil" 
                    msg="The keys are in the lockbox. Code is 4821. Enjoy your stay!" 
                    time="1h ago" 
                    isUnread={false} 
                    image="https://picsum.photos/100/100?random=31" 
                />
                <MessageItem 
                    name="Alex (Expert)" 
                    msg="I recommend the downtown loft for your creative workshop..." 
                    time="3h ago" 
                    isUnread={false} 
                    isExpert={true}
                    image="https://picsum.photos/100/100?random=32" 
                />
            </main>
        </div>
    );
};

const MessageItem: React.FC<{ name: string; msg: string; time: string; isUnread: boolean; isExpert?: boolean; image: string }> = ({ name, msg, time, isUnread, isExpert, image }) => (
    <div className="flex items-center gap-4 px-4 py-4 hover:bg-gray-50 dark:hover:bg-white/5 cursor-pointer border-b border-gray-50 dark:border-gray-800">
        <div className="relative shrink-0">
            <div className={`h-14 w-14 rounded-full bg-cover bg-center ${isExpert ? 'border-2 border-primary' : ''}`} style={{ backgroundImage: `url("${image}")` }}></div>
            {isUnread && <div className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-white dark:border-background-dark bg-green-500"></div>}
            {isExpert && <div className="absolute -top-1 -right-1 bg-primary text-white text-[8px] font-black px-1.5 rounded-full border-2 border-white dark:border-background-dark uppercase">Expert</div>}
        </div>
        <div className="flex flex-1 flex-col overflow-hidden">
            <div className="flex items-center justify-between">
                <p className={`text-[15px] truncate ${isUnread ? 'font-bold' : 'font-semibold'}`}>{name}</p>
                <p className={`text-xs ${isUnread ? 'text-primary font-bold' : 'text-gray-400'}`}>{time}</p>
            </div>
            <div className="flex items-center justify-between gap-2">
                <p className={`text-sm truncate flex-1 ${isUnread ? 'text-slate-900 dark:text-white font-semibold' : 'text-gray-500 dark:text-zinc-400'}`}>{msg}</p>
                {isUnread && <div className="h-2 w-2 shrink-0 rounded-full bg-primary"></div>}
            </div>
        </div>
    </div>
);

export default Inbox;
