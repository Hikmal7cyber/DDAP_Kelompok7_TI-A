import { useState } from "react";
import NavigationSidebar from "./components/NavigationSidebar";
import PersonalizationSidebar from "./components/GlobalChat";
import SearchBar from "./components/SearchBar";
import QuickFilters from "./components/QuickFilters";
import TopBanners from "./components/TopBanners";
import FoodCategories from "./components/RecentWins";
import RestaurantListings from "./components/GameSections";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import LoginModal from "./components/LoginModal";
import PersonalizationPage from "./components/PersonalizationPage";
import { ScrollArea } from "./components/ui/scroll-area";
import { Sparkles } from "lucide-react";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isPersonalized, setIsPersonalized] = useState(false);
  const [userName, setUserName] = useState("");
  const [preferences, setPreferences] = useState<{
    taste: string;
    hunger: string;
    weather: string;
  } | null>(null);

  const handleFoodClick = () => {
    setShowLoginModal(true);
  };

  const handleLoginSuccess = (name: string) => {
    setIsAuthenticated(true);
    setShowLoginModal(false);
    setUserName(name);
  };

  const handleCloseModal = () => {
    setShowLoginModal(false);
  };

  const handlePersonalizationComplete = (prefs: {
    taste: string;
    hunger: string;
    weather: string;
  }) => {
    setPreferences(prefs);
    setIsPersonalized(true);
  };

  const handleRepersonalize = () => {
    setIsPersonalized(false);
  };

  // Tampilan Landing Page (sebelum login)
  if (!isAuthenticated) {
    return (
      <>
        <LandingPage onFoodClick={handleFoodClick} />
        <LoginModal
          isOpen={showLoginModal}
          onClose={handleCloseModal}
          onLoginSuccess={handleLoginSuccess}
        />
      </>
    );
  }

  // Tampilan Personalisasi (setelah login, sebelum personalisasi)
  if (!isPersonalized) {
    return <PersonalizationPage userName={userName} onComplete={handlePersonalizationComplete} />;
  }

  // Tampilan Full App (setelah personalisasi)
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex flex-col lg:flex-row h-screen">
        {/* Left Sidebar - Navigation - Hidden on mobile, shown on desktop */}
        <div className="hidden lg:block">
          <NavigationSidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-hidden">
          <ScrollArea className="h-full">
            <div className="p-4 sm:p-6">
              {/* Mobile Header */}
              <div className="lg:hidden mb-4 flex items-center justify-between bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#CC5500] rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">MF</span>
                  </div>
                  <div>
                    <h1 className="font-bold text-lg">MoodFoodPicker</h1>
                    <p className="text-xs text-gray-500">Halooo {userName}!</p>
                  </div>
                </div>
                <button
                  onClick={handleRepersonalize}
                  className="bg-[#CC5500] text-white px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-[#b34900] transition-colors"
                >
                  <Sparkles className="w-4 h-4" />
                  <span className="hidden sm:inline">Personalize</span>
                </button>
              </div>

              {/* Personalize Again Button - Desktop */}
              <div className="hidden lg:flex justify-between items-center mb-4 bg-gradient-to-r from-[#CC5500] to-[#FF8C42] rounded-xl p-4 text-white shadow-lg">
                <div>
                  <h3 className="font-bold text-lg">Halooo {userName}! 👋</h3>
                  <p className="text-sm text-white/90">
                    Rekomendasi berdasarkan: {preferences?.taste} • {preferences?.hunger} •{" "}
                    {preferences?.weather}
                  </p>
                </div>
                <button
                  onClick={handleRepersonalize}
                  className="bg-white text-[#CC5500] px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-100 transition-colors"
                >
                  <Sparkles className="w-5 h-5" />
                  Personalize Ulang
                </button>
              </div>

              <SearchBar />
              <QuickFilters />
              <TopBanners />
              <FoodCategories />
              <RestaurantListings userName={userName} weather={preferences?.weather || ""} />
              <Footer />
            </div>
          </ScrollArea>
        </div>

        {/* Right Sidebar - Personalization Summary - Hidden on mobile */}
        <div className="hidden xl:block">
          <PersonalizationSidebar />
        </div>
      </div>
    </div>
  );
}