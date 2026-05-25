import { ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";

interface PersonalizationPageProps {
  userName: string;
  onComplete: (preferences: {
    taste: string;
    hunger: string;
    weather: string;
  }) => void;
}

export default function PersonalizationPage({ userName, onComplete }: PersonalizationPageProps) {
  const [selectedTaste, setSelectedTaste] = useState<string | null>(null);
  const [selectedHunger, setSelectedHunger] = useState<string | null>(null);
  const [selectedWeather, setSelectedWeather] = useState<string | null>(null);

  const handleFinish = () => {
    if (selectedTaste && selectedHunger && selectedWeather) {
      onComplete({
        taste: selectedTaste,
        hunger: selectedHunger,
        weather: selectedWeather,
      });
    }
  };

  const isComplete = selectedTaste && selectedHunger && selectedWeather;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#CC5500] to-[#994000] flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-[#CC5500] to-[#FF8C42] p-6 sm:p-8 text-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold">PERSONALIZE PAGE</h1>
                <p className="text-white/90 text-sm sm:text-base">MoodFoodPicker</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="text-base sm:text-lg leading-relaxed">
                <span className="font-bold text-xl sm:text-2xl">Halooo {userName}!</span>
                <br />
                <span className="text-sm sm:text-base">
                  Yuk, Kita cari makanan yang cocok dengan mood-mu saat ini! Isi pertanyaan berikut untuk mendapatkan rekomendasi yang paling sesuai untuk kamu 😊
                </span>
              </p>
            </div>
          </div>

          {/* Questions Section */}
          <div className="p-6 sm:p-8 space-y-6 sm:space-y-8">
            {/* Question 1: Taste */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[#CC5500] text-white rounded-full flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <p className="font-bold text-base sm:text-lg text-gray-900">
                  Lagi pengen rasa apa hari ini? 🍽️
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {['Gurih 🧂', 'Manis 🍰', 'Pedas 🌶️', 'Segar 🥗'].map((taste) => (
                  <button
                    key={taste}
                    onClick={() => setSelectedTaste(taste)}
                    className={`p-4 rounded-xl text-center font-medium transition-all transform hover:scale-105 border-2 ${
                      selectedTaste === taste
                        ? 'bg-[#CC5500] text-white border-[#CC5500] shadow-lg'
                        : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-[#CC5500]/50'
                    }`}
                  >
                    {taste}
                  </button>
                ))}
              </div>
            </div>

            {/* Question 2: Hunger Level */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[#CC5500] text-white rounded-full flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <p className="font-bold text-base sm:text-lg text-gray-900">
                  Seberapa lapar kamu sekarang? 😋
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {['Cuma pengen ngemil 🍪', 'Lapar sedang 🍜', 'Lapar banget 🍕'].map((hunger) => (
                  <button
                    key={hunger}
                    onClick={() => setSelectedHunger(hunger)}
                    className={`p-4 rounded-xl text-center font-medium transition-all transform hover:scale-105 border-2 ${
                      selectedHunger === hunger
                        ? 'bg-[#CC5500] text-white border-[#CC5500] shadow-lg'
                        : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-[#CC5500]/50'
                    }`}
                  >
                    {hunger}
                  </button>
                ))}
              </div>
            </div>

            {/* Question 3: Weather */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[#CC5500] text-white rounded-full flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <p className="font-bold text-base sm:text-lg text-gray-900">
                  Cuaca di tempatmu lagi gimana? ☁️
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {['Panas terik ☀️', 'Hujan 🌧️', 'Berawan ☁️'].map((weather) => (
                  <button
                    key={weather}
                    onClick={() => setSelectedWeather(weather)}
                    className={`p-4 rounded-xl text-center font-medium transition-all transform hover:scale-105 border-2 ${
                      selectedWeather === weather
                        ? 'bg-[#CC5500] text-white border-[#CC5500] shadow-lg'
                        : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-[#CC5500]/50'
                    }`}
                  >
                    {weather}
                  </button>
                ))}
              </div>
            </div>

            {/* Progress Indicator */}
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">Progress</span>
                <span className="text-sm font-bold text-[#CC5500]">
                  {[selectedTaste, selectedHunger, selectedWeather].filter(Boolean).length}/3
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-[#CC5500] to-[#FF8C42] h-2 rounded-full transition-all duration-300"
                  style={{
                    width: `${([selectedTaste, selectedHunger, selectedWeather].filter(Boolean).length / 3) * 100}%`,
                  }}
                />
              </div>
            </div>

            {/* Finish Button */}
            <button
              onClick={handleFinish}
              disabled={!isComplete}
              className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all transform ${
                isComplete
                  ? 'bg-gradient-to-r from-[#CC5500] to-[#FF8C42] text-white hover:scale-105 shadow-lg hover:shadow-xl'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              {isComplete ? (
                <>
                  Lihat Rekomendasi Makanan
                  <ArrowRight className="w-6 h-6" />
                </>
              ) : (
                <>Jawab Semua Pertanyaan Dulu Ya!</>
              )}
            </button>

            <p className="text-xs text-gray-500 text-center italic">
              Opsional: kamu juga boleh pilang urut data pengguna atau isian tambahan.
            </p>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-6">
          <p className="text-white/80 text-sm">
            🔒 Data kamu aman dan hanya digunakan untuk rekomendasi makanan
          </p>
        </div>
      </div>
    </div>
  );
}
