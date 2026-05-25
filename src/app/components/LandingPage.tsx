import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Search, MapPin, Menu } from "lucide-react";

interface LandingPageProps {
  onFoodClick: () => void;
}

export default function LandingPage({ onFoodClick }: LandingPageProps) {
  const previewFoods = [
    {
      id: 1,
      name: "Nasi Goreng Special",
      restaurant: "Warung Pak Haji",
      price: "Rp 25.000",
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop",
      category: "Traditional"
    },
    {
      id: 2,
      name: "Sate Ayam",
      restaurant: "Sate Madura Asli",
      price: "Rp 30.000",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1529563021893-cc83c992d75d?w=400&h=300&fit=crop",
      category: "Traditional"
    },
    {
      id: 3,
      name: "Buddha Bowl",
      restaurant: "Healthy Kitchen",
      price: "Rp 45.000",
      rating: "4.7",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
      category: "Healthy"
    },
    {
      id: 4,
      name: "Burger Premium",
      restaurant: "Burger House",
      price: "Rp 50.000",
      rating: "4.6",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
      category: "Fast Food"
    },
    {
      id: 5,
      name: "Dimsum Selection",
      restaurant: "Oriental Kitchen",
      price: "Rp 35.000",
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&h=300&fit=crop",
      category: "Chinese"
    },
    {
      id: 6,
      name: "Salad Bowl",
      restaurant: "Fresh Greens",
      price: "Rp 40.000",
      rating: "4.5",
      image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop",
      category: "Healthy"
    }
  ];

  return (
    <div className="min-h-screen bg-[#EBEBEB]">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#CC5500] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">MF</span>
              </div>
              <div>
                <h1 className="font-bold text-xl text-gray-900">MoodFoodPicker</h1>
                <p className="text-xs text-gray-500">Find your perfect meal</p>
              </div>
            </div>

            {/* Menu Icon */}
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Menu className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#CC5500] to-[#994000] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Discover Your Perfect Meal
          </h2>
          <p className="text-lg sm:text-xl mb-8 text-white/90">
            Based on your mood, budget, and preferences
          </p>

          {/* Search Bar Preview */}
          <div className="max-w-2xl mx-auto bg-white rounded-full shadow-lg p-2 flex items-center gap-2">
            <div className="flex-1 flex items-center gap-2 px-4">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for restaurants or dishes..."
                className="flex-1 outline-none text-gray-700 placeholder-gray-400"
                readOnly
              />
            </div>
            <div className="flex items-center gap-2 px-4 border-l border-gray-200">
              <MapPin className="w-5 h-5 text-[#CC5500]" />
              <span className="text-gray-600 text-sm">Jakarta</span>
            </div>
          </div>

          <p className="mt-6 text-white/80 text-sm">
            🔒 Sign in to unlock personalized recommendations
          </p>
        </div>
      </div>

      {/* Preview Foods Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Popular Dishes Near You
          </h3>
          <p className="text-gray-600">
            Click any dish to sign in and explore more
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewFoods.map((food) => (
            <div
              key={food.id}
              onClick={onFoodClick}
              className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-200 hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={food.image}
                  alt={food.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full shadow-md">
                  <span className="text-sm font-medium text-gray-900">⭐ {food.rating}</span>
                </div>
                <div className="absolute top-3 left-3 bg-[#CC5500] text-white px-3 py-1 rounded-full text-xs font-medium">
                  {food.category}
                </div>
              </div>

              <div className="p-4">
                <h4 className="font-bold text-lg text-gray-900 mb-1">{food.name}</h4>
                <p className="text-gray-600 text-sm mb-3">{food.restaurant}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[#CC5500] font-bold text-lg">{food.price}</span>
                  <button className="bg-[#CC5500] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#b34900] transition-colors">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Want to see more?
          </h3>
          <p className="text-gray-600 mb-6">
            Sign in to get personalized recommendations based on your mood and budget
          </p>
          <button
            onClick={onFoodClick}
            className="bg-[#CC5500] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#b34900] transition-colors inline-flex items-center gap-2"
          >
            Sign In to Continue
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-500 text-sm">
            <p>&copy; 2026 MoodFoodPicker. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
