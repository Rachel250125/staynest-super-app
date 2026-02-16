import React from 'react';
import { Screen } from '../types';
import Navbar from '../components/Navbar';

// 🔥 EXISTING HIGH-FIDELITY IMPORTS
import Home from './Home';
import ActivityDetails from './ActivityDetails';
import Booking from './Booking';
import AdvancedAIPlanner from './AdvancedAIPlanner';
import Chat from './Chat';
import Community from './Community';
import ActivityFeed from './ActivityFeed';
import Profile from './Profile';
import AllergyCardNew from './AllergyCardNew';
import AllergyProfile from './AllergyProfile';
// Fix: Use correct casing for AdventureSuggestions import to match component file
import AdventureSuggestions from './AdventureSuggestions'; 
import Checkout from './Checkout';
import Forum from './Forum';
import ForumThread from './ForumThread';
import Leaderboard from './Leaderboard';
import Spotlight from './Spotlight';
import Chauffeur from './Chauffeur';
import ClaimSubmission from './ClaimSubmission';
import CompareVersions from './CompareVersions';
import ForgotPasswordSuccess from './ForgotPasswordSuccess';
import Login from './Login';
import GiftPlus from './GiftPlus';
import GroupBucket from './GroupBucket';
import GroupChecklist from './GroupChecklist';
import GroupHub from './GroupHub';
import HallOfFame from './HallOfFame';
import HOFWinners from './HOFWinners';
import HolidayGuide from './HolidayGuide';
import SharedExpenses from './SharedExpenses';
import PhotoGallery from './PhotoGallery';
import SearchResults from './SearchResults';
import SavingsEvent from './SavingsEvent';
import PlusDashboard from './PlusDashboard';
import MyTrips from './MyTrips';
import HostDashboard from './HostDashboard';
import HostCalendar from './HostCalendar';
import HostPricing from './HostPricing';
import HostOnboardingPhoto from './HostOnboardingPhoto';
import HostOnboardingType from './HostOnboardingType';
// Fix: Added missing Insurance import
import Insurance from './Insurance';
import SafetyCert from './SafetyCert';
import LeaderboardRewards from './LeaderboardRewards';
import LevelUp from './LevelUp';
import LoungePass from './LoungePass';
import MilestoneCelebration from './MilestoneCelebration';
import ModeratorAppeal from './ModeratorAppeal';
import ModeratorHOF from './ModeratorHOF';
import ModeratorPerformance from './ModeratorPerformance';
import ModeratorWeek from './ModeratorWeek';
import PackageCheckout from './PackageCheckout';
import PackageDetails from './PackageDetails';
import PartnerSpotlight from './PartnerSpotlight';
import PartnerVoucher from './PartnerVoucher';
import PerksMap from './PerksMap';
import SavingsReport from './SavingsReport';
import SavingsCalculator from './SavingsCalculator';
import PlusGiftCardRedeem from './PlusGiftCardRedeem';
import PlusRewards from './PlusRewards';
import Poll from './Poll';
import ReceiptScanner from './ReceiptScanner';
import ReferBrand from './ReferBrand';
import ReferEarn from './ReferEarn';
import RewardsWallet from './RewardsWallet';
import TravelGoals from './TravelGoals';
import Stats from './Stats';
import SafeDiningMap from './SafeDiningMap';
import UltraRareUnlock from './UltraRareUnlock';
import RewardReveal from './RewardReveal';
import VotingResults from './VotingResults';
import ScanReview from './ScanReview';
import ResolutionCard from './ResolutionCard';
import ResolutionProgress from './ResolutionProgress';
import RoomSelection from './RoomSelection';
import SafetyChecklist from './SafetyChecklist';
import SafetyPhotoVerify from './SafetyPhotoVerify';
import SavedPlans from './SavedPlans';
import SharedPackingList from './SharedPackingList';
import ShareStats from './ShareStats';
import ShoreExcursions from './ShoreExcursions';
import SignOff from './SignOff';
import SignupVerification from './SignupVerification';
import SocialSharing from './SocialSharing';
import SplitPayment from './SplitPayment';
import TierBenefits from './TierBenefits';
import TravelerMatch from './TravelerMatch';
import TravelJournal from './TravelJournal';
import TravelMemories from './TravelMemories';
import TravelModeCompare from './TravelModeCompare';
import TripConflictManager from './TripConflictManager';
import VideoChat from './VideoChat';
import VideoPreview from './VideoPreview';
import VIPEvaluation from './VIPEvaluation';
import VIPMeetGreet from './VIPMeetGreet';
import WeatherGear from './WeatherGear';

// THE 6.104+ HIGH FIDELITY DISCOVERY ADDITIONS
import ActivitiesDiscoveryPage from './ActivitiesDiscoveryPage';
import ActivityBookingVoucherQR from './ActivityBookingVoucherQR';
import AIPersonalizedItineraryUI from './AIPersonalizedItineraryUI';
import AllergySafeRestaurantMenu from './AllergySafeRestaurantMenu';
import PlaceholderScreen from './PlaceholderScreen';

const screenMap: Record<Screen, React.ComponentType<any>> = {
  // 🔥 CORE MAPPING
  HOME: Home,
  DETAILS: ActivityDetails,
  BOOKING: Booking,
  PLANNER: AdvancedAIPlanner,
  CHAT: Chat,
  COMMUNITY: Community,
  FEED: ActivityFeed,
  PROFILE: Profile,
  SAFETY: AllergyCardNew,
  ALLERGY_PROFILE: AllergyProfile,
  ADVENTURE_SUGGESTIONS: AdventureSuggestions,
  CHECKOUT: Checkout,
  CONFIRMATION: MyTrips,
  FORUM: Forum,
  FORUM_THREAD: ForumThread,
  LEADERBOARD: Leaderboard,
  SPOTLIGHT: Spotlight,
  EDIT_HISTORY: CompareVersions,
  CHAUFFEUR: Chauffeur,
  CLAIM_SUBMISSION: ClaimSubmission,
  COMPARE_VERSIONS: CompareVersions,
  FORGOT_PASSWORD_SUCCESS: ForgotPasswordSuccess,
  LOGIN: Login,
  GIFT_PLUS: GiftPlus,
  GROUP_BUCKET: GroupBucket,
  GROUP_CHECKLIST: GroupChecklist,
  GROUP_HUB: GroupHub,
  HALL_OF_FAME: HallOfFame,
  HOF_WINNERS: HOFWinners,
  HOLIDAY_GUIDE: HolidayGuide,
  EXPENSE_HISTORY: SharedExpenses,
  PHOTO_GALLERY: PhotoGallery,
  SEARCH_RESULTS: SearchResults,
  SAVINGS_EVENT: SavingsEvent,
  PLUS_DASHBOARD: PlusDashboard,
  MY_TRIPS: MyTrips,
  HOST_DASHBOARD: HostDashboard,
  HOST_CALENDAR: HostCalendar,
  HOST_PRICING: HostPricing,
  HOST_ONBOARDING_PHOTO: HostOnboardingPhoto,
  HOST_ONBOARDING_TYPE: HostOnboardingType,
  SAFETY_CERT: SafetyCert,
  LEADERBOARD_REWARDS: LeaderboardRewards,
  LEVEL_UP: LevelUp,
  LOUNGE_PASS: LoungePass,
  MILESTONE_CELEBRATION: MilestoneCelebration,
  MODERATOR_APPEAL: ModeratorAppeal,
  MODERATOR_HOF: ModeratorHOF,
  MODERATOR_PERFORMANCE: ModeratorPerformance,
  FORGOT_PASSWORD: ForgotPasswordSuccess,
  MODERATOR_WEEK: ModeratorWeek,
  PACKAGE_CHECKOUT: PackageCheckout,
  PACKAGE_DETAILS: PackageDetails,
  PARTNER_SPOTLIGHT: PartnerSpotlight,
  PARTNER_VOUCHER: PartnerVoucher,
  PERKS_MAP: PerksMap,
  SAVINGS_REPORT: SavingsReport,
  SAVINGS_CALCULATOR: SavingsCalculator,
  PLUS_GIFT_CARD_REDEEM: PlusGiftCardRedeem,
  PLUS_REWARDS: PlusRewards,
  POLL: Poll,
  RECEIPT_SCANNER: ReceiptScanner,
  REFER_BRAND: ReferBrand,
  REFER_EARN: ReferEarn,
  REWARDS_WALLET: RewardsWallet,
  TRAVEL_GOALS: TravelGoals,
  STATS: Stats,
  SAFE_DINING_MAP: SafeDiningMap,
  ULTRA_RARE_UNLOCK: UltraRareUnlock,
  ALLERGY_CARD: AllergyCardNew,
  DOCUMENTS_VAULT: Profile,
  REWARD_REVEAL: RewardReveal,
  VOTING_RESULTS: VotingResults,
  SHARED_EXPENSES: SharedExpenses,
  SCAN_REVIEW: ScanReview,
  RESOLUTION_CARD: ResolutionCard,
  RESOLUTION_PROGRESS: ResolutionProgress,
  ROOM_SELECTION: RoomSelection,
  SAFETY_CHECKLIST: SafetyChecklist,
  SAFETY_PHOTO_VERIFY: SafetyPhotoVerify,
  SAVED_PLANS: SavedPlans,
  SHARED_PACKING_LIST: SharedPackingList,
  SHARE_STATS: ShareStats,
  SHORE_EXCURSIONS: ShoreExcursions,
  SIGN_OFF: SignOff,
  SIGNUP_VERIFICATION: SignupVerification,
  SOCIAL_SHARING: SocialSharing,
  SPLIT_PAYMENT: SplitPayment,
  TIER_BENEFITS: TierBenefits,
  TRAVELER_MATCH: TravelerMatch,
  MATCH_SUCCESS: TravelerMatch,
  TRAVEL_JOURNAL: TravelJournal,
  TRAVEL_MEMORIES: TravelMemories,
  TRAVEL_MODE_COMPARE: TravelModeCompare,
  TRIP_CONFLICT_MANAGER: TripConflictManager,
  VIDEO_CHAT: VideoChat,
  VIDEO_PREVIEW: VideoPreview,
  VIP_EVALUATION: VIPEvaluation,
  VIP_MEET_GREET: VIPMeetGreet,
  WEATHER_GEAR: WeatherGear,

  // 🔥 178 LIST SPECIFIC MAPPING
  ACTIVITIES_DISCOVERY_PAGE: ActivitiesDiscoveryPage,
  ACTIVITY_BOOKING_VOUCHER_QR: ActivityBookingVoucherQR,
  ACTIVITY_RATE_AND_REVIEW: PlaceholderScreen,
  ACTIVITY_SLOT_SELECTION: PlaceholderScreen,
  ACTIVITY_SPLIT_PAYMENT_CHECKOUT: PlaceholderScreen,
  ADVENTURE_COMPLETION_CELEBRATION: MilestoneCelebration,
  AI_JOURNAL_DRAFTING_ASSISTANT: TravelJournal,
  AI_PERSONALIZED_ITINERARY_UI: AIPersonalizedItineraryUI,
  AI_SHAREABLE_ITINERARY_MAP: PlaceholderScreen,
  AI_TASTE_SHORTLISTING: PlaceholderScreen,
  AIRPORT_ARRIVAL_WELCOME_HUB: PlaceholderScreen,
  ALLERGY_SAFE_RESTAURANT_MENU: AllergySafeRestaurantMenu,
  BADGE_COLLECTION_SOCIAL_SHARE_CARD: ShareStats,
  ACTIVITY_BOOKING_AND_DATE_SELECTION: Booking,
  BADGE_DISCOVERY_REVEAL_ANIMATION: RewardReveal,
  BADGE_LEVEL_UP_ANIMATION: LevelUp,
  BADGE_SHOWCASE_ACHIEVEMENTS_GRID: PlaceholderScreen,
  BADGE_TIER_PROGRESSION_GUIDE: TierBenefits,
  BOOKING_AND_PAYMENT_1: Checkout,
  BOOKING_AND_PAYMENT_2: Checkout,
  BOOKING_CONFIRMATION: MyTrips,
  BRAND_AMBASSADOR_APPLICATION_FORM: PlaceholderScreen,
  BUCKET_LIST_TRAVEL_PLANNER: TravelGoals,
  CHALLENGE_SUCCESS_CELEBRATION: MilestoneCelebration,
  CHAT_DETAIL_VIEW: Chat,
  CHECK_IN_SUCCESS_CONFIRMATION: PlaceholderScreen,
  CHEF_INGREDIENT_INQUIRY_CHAT: Chat,
  CLAIM_STATUS_TRACKER: ClaimSubmission,
  COMMUNITY_EXPERT_BADGE_REWARD: HallOfFame,
  COMMUNITY_EXPERT_PUBLIC_PROFILE: Spotlight,
  COMMUNITY_INBOX_MESSAGE_LIST: Chat,
  COMMUNITY_MODERATOR_DASHBOARD: PlaceholderScreen,
  COMMUNITY_WARNING_NOTIFICATION: PlaceholderScreen,
  CRUISE_BOOKING_AND_PAYMENT: PlaceholderScreen,
  CRUISE_CABIN_SELECTION: RoomSelection,
  CRUISE_ITINERARY_DETAILS: PlaceholderScreen,
  CRUISE_SEARCH_RESULTS: SearchResults,
  CUSTOMIZE_PACKAGE_SELECTION: PackageDetails,
  DESERT_SAFARI_DETAILS: ActivityDetails,
  DETAILED_DISCUSSION_THREAD_VIEW: ForumThread,
  DETAILED_TRIP_PROPOSAL_VIEW: AIPersonalizedItineraryUI,
  DIGITAL_ALLERGY_SAFETY_CARD: AllergyCardNew,
  DIGITAL_BOOKING_VOUCHER: ActivityBookingVoucherQR,
  DIGITAL_ID_AND_MEETING_TOKEN: PlaceholderScreen,
  DINING_SAFETY_FEEDBACK: VIPEvaluation,
  DIRECT_MESSAGE_CHAT_VIEW: Chat,
  DISCUSSION_THREAD_DETAILS: ForumThread,
  EMERGENCY_CONTACTS_MAP_VIEW: SafeDiningMap,
  FINAL_TRIP_COUNTDOWN: PlaceholderScreen,
  FIRST_TIME_FLYER_GUIDE_FAQ: PlaceholderScreen,
  FLIGHT_HOTEL_RESULTS: SearchResults,
  FOOD_AND_ALLERGY_PROFILE_EDITOR: AllergyProfile,
  FORGOT_PASSWORD_INPUT: PlaceholderScreen,
  // Fix: Removed duplicate FORGOT_PASSWORD_SUCCESS mapping here (line 264 in original)
  FRIENDS_ACTIVITY_FEED: ActivityFeed,
  FRIENDS_BADGE_LEADERBOARD: Leaderboard,
  GIFT_A_PLUS_MEMBERSHIP_FLOW: GiftPlus,
  GLOBAL_PERKS_INTERACTIVE_MAP: PerksMap,
  GLOBAL_TRAVEL_STATISTICS_MAP: Stats,
  GROUP_BOOKING_FINALIZED_CELEBRATION_1: GroupHub,
  GROUP_BOOKING_FINALIZED_CELEBRATION_2: GroupHub,
  GROUP_BUCKET_LIST_PLANNER: GroupBucket,
  GROUP_EXPENSE_HISTORY: SharedExpenses,
  GROUP_ITINERARY_FINAL_SIGN_OFF: SignOff,
  GROUP_ITINERARY_POLL: Poll,
  GROUP_PLANNING_VIDEO_CHAT: VideoChat,
  GROUP_SHARED_PHOTO_GALLERY: PhotoGallery,
  GROUP_SPLIT_PAYMENT_CHECKOUT: SplitPayment,
  GROUP_TRAVEL_INSURANCE_ADD_ON: Insurance,
  GROUP_TRIP_PROPOSAL_CHAT_CARD: PlaceholderScreen,
  GROUP_TRIP_VOTING_RESULTS: VotingResults,
  HALL_OF_FAME_INDUCTION_NOTIFICATION: HallOfFame,
  HALL_OF_FAME_PROFILE_RECOGNITION: Spotlight,
  HOLIDAY_GIFT_GUIDE_LANDING: HolidayGuide,
  HOLIDAY_SAVINGS_EVENT_LANDING: SavingsEvent,
  HOLIDAY_SAVINGS_EVENT_PROMOTION: SavingsEvent,
  HOME_WITH_AI_ASSISTANT_BUBBLE: Home,
  HOMESTAY_SEARCH_RESULTS: SearchResults,
  HOST_BOOKING_CALENDAR_VIEW: HostCalendar,
  HOST_DASHBOARD_OVERVIEW: HostDashboard,
  HOST_ONBOARDING_PHOTO_UPLOAD: HostOnboardingPhoto,
  HOST_ONBOARDING_PROPERTY_TYPE: HostOnboardingType,
  HOST_PRICING_AND_AVAILABILITY: HostPricing,
  HOST_SAFETY_CERTIFICATION_FLOW: SafetyCert,
  HOTEL_PROPERTY_DETAILS: ActivityDetails,
  HOTEL_SEARCH_RESULTS_1: SearchResults,
  HOTEL_SEARCH_RESULTS_2: SearchResults,
  INBOX_LIST_VIEW: Chat,
  INVITE_FRIENDS_TO_COLLABORATE: PlaceholderScreen,
  ITINERARY_VERSION_HISTORY_TRACKER: CompareVersions,
  LIVE_CHAUFFEUR_TRACKING_MAP: Chauffeur,
  LOGIN_SCREEN: Login,
  LOST_FOUND_CONCIERGE_ASSISTANT: Chat,
  LOST_AND_FOUND_ASSISTANCE: PlaceholderScreen,
  LUXURY_AIRPORT_TRANSFER_BOOKING: VIPMeetGreet,
  MATCH_CHAT_AI_ICEBREAKERS: Chat,
  MEDICAL_CLAIM_SUBMISSION: ClaimSubmission,
  MEETING_POINT_ARRIVAL_CHECK_IN: PlaceholderScreen,
  MEETING_POINT_DIRECTIONS_MAP: PlaceholderScreen,
  MEMBER_BADGE_COLLECTION_SUMMARY: PlaceholderScreen,
  MEMBER_OF_THE_MONTH_SPOTLIGHT: Spotlight,
  MEMBER_TRAVEL_DISCUSSION_FORUM: Forum,
  MILESTONE_ACHIEVEMENT_CELEBRATION: MilestoneCelebration,
  MODERATOR_APPEAL_REVIEW_TOOL: ModeratorAppeal,
  MODERATOR_HALL_OF_FAME_LEGACY: ModeratorHOF,
  MODERATOR_OF_THE_WEEK_BANNER: ModeratorWeek,
  MODERATOR_PERFORMANCE_ANALYTICS: ModeratorPerformance,
  MONTHLY_LEADERBOARD_REWARDS_PRIZES: LeaderboardRewards,
  MY_TRIPS_DASHBOARD: MyTrips,
  NEW_YEAR_TRAVEL_GOALS_PLANNER: TravelGoals,
  ON_SITE_SAFETY_PHOTO_VERIFICATION: SafetyPhotoVerify,
  PACKAGE_CHECKOUT_PAYMENT: PackageCheckout,
  PACKAGE_DETAILS_VIEW: PackageDetails,
  PARAGLIDING_ACTIVITY_DETAILS: ActivityDetails,
  PARTNER_OFFER_DIGITAL_VOUCHER: PartnerVoucher,
  PARTNER_SPOTLIGHT_LUXURY_DEEP_DIVE: PartnerSpotlight,
  PERK_SAVINGS_CALCULATOR: SavingsCalculator,
  PERSONALIZED_NEXT_ADVENTURE_SUGGESTIONS: AdventureSuggestions,
  PLUS_GIFT_CARD_REDEMPTION: PlusGiftCardRedeem,
  PLUS_LOUNGE_DIGITAL_PASS: LoungePass,
  PLUS_MEMBER_PERSONALIZED_DASHBOARD: PlusDashboard,
  PLUS_MONTHLY_SAVINGS_REPORT: SavingsReport,
  POST_BOOKING_GROUP_CHECKLIST_HUB: GroupChecklist,
  POST_TRIP_SUMMARY_INFOGRAPHIC: ShareStats,
  PREMIUM_PARTNER_BENEFITS_HUB: PlusRewards,
  PRIORITY_CONCIERGE_SUPPORT_CHAT: Chat,
  PRIVATE_MESSAGE_CHAT_INTERFACE: Chat,
  PROFESSIONAL_PILOT_SAFETY_PROFILE: PlaceholderScreen,
  RECEIPT_SCANNER_INTERFACE: ReceiptScanner,
  REFER_A_BRAND_SUGGESTION_FORM: ReferBrand,
  REFER_A_FELLOW_ADVENTURER_REWARD: ReferEarn,
  REWARDS_AND_LOYALTY_DASHBOARD: PlusRewards,
  REWARDS_TIER_BENEFITS_COMPARISON: TierBenefits,
  ROOM_SELECTION_PAGE: RoomSelection,
  SAFE_DINING_VERIFIED_MAP: SafeDiningMap,
  SAFETY_EQUIPMENT_CHECKLIST: SafetyChecklist,
  SAVED_AI_PLANS_PROFILE_SECTION: SavedPlans,
  SCAN_REVIEW_AND_SPLIT: ScanReview,
  SHARED_GROUP_EXPENSES_TRACKER: SharedExpenses,
  SHARED_GROUP_PACKING_LIST: SharedPackingList,
  SHARED_TRAVEL_JOURNAL: TravelJournal,
  SHORE_EXCURSIONS_BOOKING: ShoreExcursions,
  SIDE_BY_SIDE_VERSION_COMPARISON: CompareVersions,
  SIGN_UP_VERIFICATION_SCREEN: SignupVerification,
  SOCIAL_SHARING_PREVIEW_LINK: SocialSharing,
  SOCIAL_TRAVEL_RESOLUTION_CARD: ResolutionCard,
  STAYNEST_AI_TRIP_PLANNER_CHAT: AdvancedAIPlanner,
  STAYNEST_HALL_OF_FAME_WINNERS: HOFWinners,
  STAYNEST_HOME_NAVIGATION_1: Home,
  STAYNEST_HOME_NAVIGATION_2: Home,
  STAYNEST_HOST_OVERVIEW_DASHBOARD: HostDashboard,
  STAYNEST_PLUS_IMPACT_REPORT: SavingsReport,
  STAYNEST_PLUS_MEMBERSHIP_LANDING: PlaceholderScreen,
  STAYNEST_REWARDS_WALLET_DETAIL: RewardsWallet,
  STAYNEST_SUPER_APP_HOME_VARIANT_A: Home,
  STAYNEST_SUPER_APP_HOME_VARIANT_B: Home,
  TRANSFERS_AND_ADD_ONS_SELECTION: VIPMeetGreet,
  TRAVEL_MEMORIES_DIGITAL_SCRAPBOOK: TravelMemories,
  TRAVEL_MODE_COMPARISON: TravelModeCompare,
  TRAVEL_RESOLUTION_PROGRESS_TRACKER: ResolutionProgress,
  TRAVEL_WRAPPED_SOCIAL_INFOGRAPHIC: ShareStats,
  TRAVELER_DOCUMENTS_VAULT: PlaceholderScreen,
  TRAVELER_MATCH_DISCOVERY_FEED: TravelerMatch,
  TRAVELER_MATCH_SUCCESS_INVITATION: TravelerMatch,
  TRIP_DEPARTURE_FINAL_REMINDER: PlaceholderScreen,
  TRIP_EDIT_HISTORY_TRACKER: CompareVersions,
  TRIP_HIGHLIGHTS_VIDEO_PREVIEW: VideoPreview,
  TRIP_RATE_AND_REVIEW: VIPEvaluation,
  TRIP_RESOLUTION_CONFLICT_MANAGER: TripConflictManager,
  ULTRA_RARE_BADGE_UNLOCK_ANIMATION: UltraRareUnlock,
  USER_PROFILE: Profile,
  VIP_MEET_GREET_SERVICE_ADDITION: VIPMeetGreet,
  VIP_SERVICE_RATING_FEEDBACK: VIPEvaluation,
  WEATHER_AI_GEAR_TIPS: WeatherGear,
  WEEKLY_COMMUNITY_CHALLENGE_HUB: PlaceholderScreen,
  WINNING_GROUP_BOOKING_SUMMARY: GroupHub,
  WINNING_ITINERARY_POLL_RESULTS: VotingResults,
  WISHLIST_PAGE: PlaceholderScreen,
};

export const RenderScreen = ({ 
  currentScreen, 
  navigate, 
  activity, 
  prefs, 
  setPrefs 
}: { 
  currentScreen: Screen; 
  navigate: (s: Screen) => void; 
  activity?: any; 
  prefs?: any; 
  setPrefs?: any; 
}) => {
  const ScreenComponent = screenMap[currentScreen] || PlaceholderScreen;
  
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <ScreenComponent
        navigate={navigate}
        activity={activity}
        prefs={prefs}
        setPrefs={setPrefs}
        screenKey={currentScreen}
      />
    </div>
  );
};

export default screenMap;
