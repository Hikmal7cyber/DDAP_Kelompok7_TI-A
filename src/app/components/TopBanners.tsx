import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";

export default function TopBanners() {
  return (
    <div className="mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Banner 1 */}
        <div className="relative rounded-xl overflow-hidden h-56 sm:h-48 group cursor-pointer">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1680674774705-90b4904b3a7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwdHJhZGl0aW9uYWwlMjBmb29kJTIwbmFzaSUyMGdvcmVuZ3xlbnwxfHx8fDE3Nzk2OTQ4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Traditional Indonesian Food"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
            <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">Haloo, Guest</h3>
            <p className="text-white/90 text-xs sm:text-sm mb-3">
              Selamat datang di MoodFoodPicker! Temukan makanan favoritmu
            </p>
            <button className="bg-primary text-primary-foreground px-4 sm:px-6 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-2">
              Lihat Menu
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Banner 2 */}
        <div className="relative rounded-xl overflow-hidden h-56 sm:h-48 group cursor-pointer">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZm9vZCUyMHNhbGFkJTIwYm93bHxlbnwxfHx8fDE3Nzk1ODY2NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Healthy Food Promotion"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-primary text-primary-foreground px-3 sm:px-4 py-1 rounded-full font-bold text-xs sm:text-sm">
            -30%
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
            <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">Promo Spesial!</h3>
            <p className="text-white/90 text-xs sm:text-sm mb-3">
              Diskon 30% untuk menu healthy food
            </p>
            <button className="bg-primary text-primary-foreground px-4 sm:px-6 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-2">
              Pesan Sekarang
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}