
import React from 'react';

const SafetyCard: React.FC = () => {
    return (
        <div className="min-h-full pb-24">
            <header className="sticky top-0 z-50 flex items-center bg-white dark:bg-[#2c1616] p-4 pb-2 justify-between border-b border-gray-200 dark:border-gray-800">
                <h2 className="text-[#1c0d0d] dark:text-white text-lg font-bold leading-tight flex-1 text-center">Digital Allergy Card</h2>
            </header>

            <div className="bg-[#f20d0d] px-6 py-8 text-center text-white">
                <div className="mb-4 inline-flex items-center justify-center size-16 bg-white rounded-full">
                    <span className="material-symbols-outlined text-[#f20d0d] text-4xl font-bold">warning</span>
                </div>
                <h1 className="text-3xl font-extrabold leading-tight mb-2">أعاني من حساسية شديدة</h1>
                <h2 className="text-xl font-bold opacity-90">I HAVE A SEVERE ALLERGY</h2>
            </div>

            <div className="px-4 py-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">no_food</span>
                    Specific Allergens
                </h3>
                <div className="grid grid-cols-2 gap-3">
                    <AllergenCard name="Peanuts" arabic="فول سوداني" icon="nutrition" />
                    <AllergenCard name="Tree Nuts" arabic="مكسرات" icon="eco" />
                    <AllergenCard name="Shellfish" arabic="قشريات" icon="set_meal" fullWidth />
                </div>
            </div>

            <div className="px-4 pb-6">
                <div className="bg-[#f20d0d]/5 dark:bg-[#f20d0d]/10 border-l-4 border-[#f20d0d] rounded-r-xl p-5">
                    <h4 className="font-bold text-[#f20d0d] flex items-center gap-2 mb-2">
                        <span className="material-symbols-outlined">restaurant</span>
                        Chef's Note
                    </h4>
                    <p className="text-sm font-bold mb-2">Please use clean pans and utensils. Cross-contamination can be fatal.</p>
                    <p className="text-sm font-medium leading-relaxed text-gray-700 dark:text-gray-300">
                        يرجى استخدام أواني وأدوات طهي نظيفة تماماً. التلوث المتبادل قد يكون قاتلاً بالنسبة لي. شكراً لتفهمكم.
                    </p>
                </div>
            </div>

            <div className="px-4 pb-12">
                <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#2c1616] overflow-hidden">
                    <div className="p-5 text-center">
                        <h3 className="text-[#f20d0d] font-bold text-lg mb-2">Medical Emergency</h3>
                        <p className="text-sm mb-4 font-semibold text-gray-600 dark:text-gray-400">If I have a reaction, please call emergency services immediately.</p>
                        <button className="flex items-center justify-center gap-2 w-full py-4 bg-[#f20d0d] text-white rounded-full font-black text-xl shadow-lg animate-pulse">
                            <span className="material-symbols-outlined">call</span>
                            CALL 911
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const AllergenCard: React.FC<{ name: string; arabic: string; icon: string; fullWidth?: boolean }> = ({ name, arabic, icon, fullWidth }) => (
    <div className={`flex flex-col gap-3 rounded-xl border-2 border-[#f20d0d]/20 bg-white dark:bg-[#2c1616] p-4 items-center text-center ${fullWidth ? 'col-span-2' : ''}`}>
        <div className="text-[#f20d0d]">
            <span className="material-symbols-outlined text-4xl">{icon}</span>
        </div>
        <div className="flex flex-col gap-1">
            <h2 className="text-lg font-bold leading-tight">{name}</h2>
            <p className="text-[#f20d0d] text-sm font-semibold">{arabic}</p>
        </div>
    </div>
);

export default SafetyCard;
