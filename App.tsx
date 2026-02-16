import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { AppView, Screen, UserPrefs, Activity } from './types';
import { ACTIVITIES } from './constants';
import Navbar from './components/Navbar';
import Explore from './pages/Explore';
import Trips from './pages/Trips';
import Inbox from './pages/Inbox';
import Profile from './pages/Profile';
import SafetyCard from './pages/SafetyCard';
import AIPlanner from './pages/AIPlanner';
import BadgeShowcase from './pages/BadgeShowcase';

// Stitch UI Imports
import ActivityDetails from './pages/ActivityDetails';
import ActivityFeed from './pages/ActivityFeed';
import ActivityParagliding from './pages/ActivityParagliding';
import AdventureSuggestions from './pages/AdventureSuggestions';
import AIChat from './pages/AIChat';
import AdvancedAIPlanner from './pages/AdvancedAIPlanner';
import AllergyCardNew from './pages/AllergyCardNew';
import AllergyProfile from './pages/AllergyProfile';
import Booking from './pages/Booking';
import Chat from './pages/Chat';
import Chauffeur from './pages/Chauffeur';
import Checkout from './pages/Checkout';
import ClaimSubmission from './pages/ClaimSubmission';
import Community from './pages/Community';
import CompareVersions from './pages/CompareVersions';
import ForgotPasswordSuccess from './pages/ForgotPasswordSuccess';
import Forum from './pages/Forum';
import ForumThread from './pages/ForumThread';
import GiftPlus from './pages/GiftPlus';
import GroupBucket from './pages/GroupBucket';
import GroupChecklist from './pages/GroupChecklist';
import GroupHub from './pages/GroupHub';
import HallOfFame from './pages/HallOfFame';
import HOFWinners from './pages/HOFWinners';
import HolidayGuide from './pages/HolidayGuide';
import Home from './pages/Home';
import HomeHeroSearch from './pages/HomeHeroSearch';
import HomeNav from './pages/HomeNav';
import HostCalendar from './pages/HostCalendar';
import HostDashboard from './pages/HostDashboard';
import HostOnboardingPhoto from './pages/HostOnboardingPhoto';
import HostOnboardingType from './pages/HostOnboardingType';
import HostOverview from './pages/HostOverview';
import HostPricing from './pages/HostPricing';
import Insurance from './pages/Insurance';
import Leaderboard from './pages/Leaderboard';
import LeaderboardRewards from './pages/LeaderboardRewards';
import LevelUp from './pages/LevelUp';
import Login from './pages/Login';
import LoungePass from './pages/LoungePass';
import MilestoneCelebration from './pages/MilestoneCelebration';
import ModeratorAppeal from './pages/ModeratorAppeal';
import ModeratorHOF from './pages/ModeratorHOF';
import ModeratorPerformance from './pages/ModeratorPerformance';
import ModeratorWeek from './pages/ModeratorWeek';
import MyTrips from './pages/MyTrips';
import PackageCheckout from './pages/PackageCheckout';
import PackageDetails from './pages/PackageDetails';
import PartnerSpotlight from './pages/PartnerSpotlight';
import PartnerVoucher from './pages/PartnerVoucher';
import PerksMap from './pages/PerksMap';
import PhotoGallery from './pages/PhotoGallery';
import PlusDashboard from './pages/PlusDashboard';
import PlusGiftCardRedeem from './pages/PlusGiftCardRedeem';
import PlusRewards from './pages/PlusRewards';
import Poll from './pages/Poll';
import ReceiptScanner from './pages/ReceiptScanner';
import ReferBrand from './pages/ReferBrand';
import ReferEarn from './pages/ReferEarn';
import ResolutionCard from './pages/ResolutionCard';
import ResolutionProgress from './pages/ResolutionProgress';
import RewardReveal from './pages/RewardReveal';
import RewardsWallet from './pages/RewardsWallet';
import RoomSelection from './pages/RoomSelection';
import SafeDiningMap from './pages/SafeDiningMap';
import SafetyCert from './pages/SafetyCert';
import SafetyChecklist from './pages/SafetyChecklist';
import SafetyPhotoVerify from './pages/SafetyPhotoVerify';
import SavedPlans from './pages/SavedPlans';
import SavingsCalculator from './pages/SavingsCalculator';
import SavingsEvent from './pages/SavingsEvent';
import SavingsReport from './pages/SavingsReport';
import ScanReview from './pages/ScanReview';
import SearchResults from './pages/SearchResults';
import SharedExpenses from './pages/SharedExpenses';
import SharedPackingList from './pages/SharedPackingList';
import ShareStats from './pages/ShareStats';
import ShoreExcursions from './pages/ShoreExcursions';
import SignOff from './pages/SignOff';
import SignupVerification from './pages/SignupVerification';
import SocialSharing from './pages/SocialSharing';
import SplitPayment from './pages/SplitPayment';
import Spotlight from './pages/Spotlight';
import Stats from './pages/Stats';
import TierBenefits from './pages/TierBenefits';
import TravelerMatch from './pages/TravelerMatch';
import TravelGoals from './pages/TravelGoals';
import TravelJournal from './pages/TravelJournal';
import TravelMemories from './pages/TravelMemories';
import TravelModeCompare from './pages/TravelModeCompare';
import TripConflictManager from './pages/TripConflictManager';
import UltraRareUnlock from './pages/UltraRareUnlock';
import VideoChat from './pages/VideoChat';
import VideoPreview from './pages/VideoPreview';
import VIPEvaluation from './pages/VIPEvaluation';
import VIPMeetGreet from './pages/VIPMeetGreet';
import VotingResults from './pages/VotingResults';
import WeatherGear from './pages/WeatherGear';

// New High-Fidelity Additions
import ActivitiesDiscoveryPage from './pages/ActivitiesDiscoveryPage';
import ActivityBookingVoucherQR from './pages/ActivityBookingVoucherQR';
import AIPersonalizedItineraryUI from './pages/AIPersonalizedItineraryUI';
import AllergySafeRestaurantMenu from './pages/AllergySafeRestaurantMenu';
import { RenderScreen } from './pages/screenMap';

const App: React.FC = () => {
    return (
        <Router>
            <AppContent />
        </Router>
    );
};

const AppContent: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [userPrefs, setUserPrefs] = useState<UserPrefs>({
        travelMode: 'Private',
        dietary: ['Nut-Free']
    });
    const [selectedActivity, setSelectedActivity] = useState<Activity | null>(ACTIVITIES[0]);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const activeView = (): AppView => {
        const path = location.pathname;
        if (path === '/' || path === '/explore') return AppView.EXPLORE;
        if (path.includes('trips')) return AppView.TRIPS;
        if (path.includes('inbox')) return AppView.INBOX;
        if (path.includes('profile')) return AppView.PROFILE;
        if (path.includes('safety')) return AppView.SAFETY;
        if (path.includes('ai-planner')) return AppView.AI_PLANNER;
        if (path.includes('badges')) return AppView.BADGES;
        return AppView.EXPLORE;
    };

    const handleStitchNavigate = (s: Screen) => {
        // High-level explicit routing for main sections
        const routeMap: Partial<Record<Screen, string>> = {
            HOME: '/home',
            DETAILS: '/activity/details',
            BOOKING: '/booking',
            PLANNER: '/advanced-planner',
            CHAT: '/chat',
            COMMUNITY: '/community',
            FEED: '/activity-feed',
            PROFILE: '/profile',
            PLUS_DASHBOARD: '/plus/dashboard',
            ACTIVITIES_DISCOVERY_PAGE: '/activities/discovery',
            ACTIVITY_BOOKING_VOUCHER_QR: '/activities/voucher',
            AI_PERSONALIZED_ITINERARY_UI: '/ai/itinerary',
            ALLERGY_SAFE_RESTAURANT_MENU: '/dining/menu',
        };

        const target = routeMap[s];
        if (target) {
            navigate(target);
        } else {
            // Fallback to dynamic renderer for the 178 screen keys
            navigate(`/render/${s}`);
        }
    };

    const isStitchFullScreen = location.pathname.includes('/activity/') || 
                                location.pathname.includes('/plus/') || 
                                location.pathname.includes('/group/') ||
                                location.pathname.includes('/activities/') ||
                                location.pathname.includes('/ai/') ||
                                location.pathname.includes('/render/');

    return (
        <div className="flex flex-col min-h-screen max-w-md mx-auto bg-white dark:bg-[#1a0a0d] shadow-2xl relative transition-colors duration-300">
            <div className="flex-1 overflow-y-auto no-scrollbar">
                <Routes>
                    <Route path="/" element={<Explore />} />
                    <Route path="/explore" element={<Explore />} />
                    <Route path="/trips" element={<Trips />} />
                    <Route path="/inbox" element={<Inbox />} />
                    <Route path="/profile" element={<Profile navigate={handleStitchNavigate} />} />
                    <Route path="/safety" element={<SafetyCard />} />
                    <Route path="/ai-planner" element={<AIPlanner />} />
                    <Route path="/badges" element={<BadgeShowcase />} />
                    <Route path="/login" element={<Login navigate={handleStitchNavigate} />} />
                    
                    {/* Explicit High-Fidelity Routes */}
                    <Route path="/home" element={<Home onSelectActivity={(a) => { setSelectedActivity(a); navigate('/activity/details'); }} navigate={handleStitchNavigate} />} />
                    <Route path="/activity/details" element={<ActivityDetails activity={selectedActivity} navigate={handleStitchNavigate} />} />
                    <Route path="/activities/discovery" element={<ActivitiesDiscoveryPage navigate={handleStitchNavigate} />} />
                    <Route path="/activities/voucher" element={<ActivityBookingVoucherQR navigate={handleStitchNavigate} />} />
                    <Route path="/ai/itinerary" element={<AIPersonalizedItineraryUI navigate={handleStitchNavigate} />} />
                    <Route path="/dining/menu" element={<AllergySafeRestaurantMenu navigate={handleStitchNavigate} />} />
                    <Route path="/advanced-planner" element={<AdvancedAIPlanner prefs={userPrefs} setPrefs={setUserPrefs} navigate={handleStitchNavigate} />} />
                    <Route path="/plus/dashboard" element={<PlusDashboard navigate={handleStitchNavigate} />} />
                    <Route path="/community" element={<Community navigate={handleStitchNavigate} />} />
                    
                    {/* Dynamic Unified Renderer for the 178 screens */}
                    <Route path="/render/:screenKey" element={<DynamicRenderer navigate={handleStitchNavigate} activity={selectedActivity} prefs={userPrefs} setPrefs={setUserPrefs} />} />
                </Routes>
            </div>
            
            {!isStitchFullScreen && <Navbar activeView={activeView()} />}
            
            {!isStitchFullScreen && activeView() !== AppView.AI_PLANNER && (
                <div className="fixed bottom-24 right-4 z-50">
                    <button 
                        onClick={() => navigate('/activities/discovery')}
                        className="flex items-center gap-2 bg-[#ff385d] text-white py-3 px-5 rounded-full shadow-xl hover:scale-105 active:scale-95 transition-transform"
                    >
                        <span className="material-symbols-outlined">explore</span>
                        <span className="font-bold text-sm">Explore More</span>
                    </button>
                </div>
            )}
        </div>
    );
};

// Helper component for dynamic route resolution
const DynamicRenderer: React.FC<{ 
    navigate: (s: Screen) => void, 
    activity: any, 
    prefs: any, 
    setPrefs: any 
}> = ({ navigate, activity, prefs, setPrefs }) => {
    const { screenKey } = useLocation().pathname.split('/').slice(-1)[0] as any;
    return <RenderScreen 
                currentScreen={screenKey as Screen} 
                navigate={navigate} 
                activity={activity} 
                prefs={prefs} 
                setPrefs={setPrefs} 
            />;
};

export default App;