
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppView } from '../types';

interface NavbarProps {
    activeView: AppView;
}

const Navbar: React.FC<NavbarProps> = ({ activeView }) => {
    const navigate = useNavigate();

    const navItems = [
        { id: AppView.EXPLORE, icon: 'explore', label: 'Explore', path: '/' },
        { id: AppView.TRIPS, icon: 'luggage', label: 'Trips', path: '/trips' },
        { id: AppView.INBOX, icon: 'chat_bubble', label: 'Inbox', path: '/inbox' },
        { id: AppView.BADGES, icon: 'military_tech', label: 'Badges', path: '/badges' },
        { id: AppView.PROFILE, icon: 'person', label: 'Profile', path: '/profile' }
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-[#2d1a1e]/95 backdrop-blur-lg border-t border-gray-100 dark:border-gray-800 flex justify-around items-center py-3 pb-6 z-50 max-w-md mx-auto">
            {navItems.map((item) => (
                <div 
                    key={item.id}
                    onClick={() => navigate(item.path)}
                    className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${
                        activeView === item.id ? 'text-[#ff385d]' : 'text-gray-400'
                    }`}
                >
                    <span className={`material-symbols-outlined ${activeView === item.id ? 'fill-1' : ''}`} 
                          style={{ fontVariationSettings: `'FILL' ${activeView === item.id ? 1 : 0}` }}>
                        {item.icon}
                    </span>
                    <span className="text-[10px] font-bold">{item.label}</span>
                </div>
            ))}
        </div>
    );
};

export default Navbar;
