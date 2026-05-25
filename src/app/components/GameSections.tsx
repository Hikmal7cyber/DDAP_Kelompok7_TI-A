import { MapPin, Star, Clock, DollarSign, Tag } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface RestaurantListingsProps {
  userName: string;
  weather: string;
}

export default function RestaurantListings({ userName, weather }: RestaurantListingsProps) {
  // Generate greeting based on weather
  const getWeatherGreeting = () => {
    if (weather.includes('Panas')) {
      return `Wah ${userName}, di luar lagi panas banget ya! 🥵`;
    } else if (weather.includes('Hujan')) {
      return `Halooo ${userName}, di luar lagi hujan nih! 🌧️`;
    } else if (weather.includes('Berawan')) {
      return `Halooo ${userName}, cuaca lagi mendung ya! ☁️`;
    }
    return `Halooo ${userName}! 👋`;
  };

  const getWeatherMessage = () => {
    if (weather.includes('Panas')) {
      return 'Yuk cari makanan yang segar dan bikin adem! Kami punya rekomendasi yang pas buat kamu!';
    } else if (weather.includes('Hujan')) {
      return 'Enaknya makan yang anget-anget! Yuk coba rekomendasi hangat dari kami!';
    } else if (weather.includes('Berawan')) {
      return 'Cuaca lagi enak buat makan apapun nih! Yuk coba rekomendasi terbaru dari kami!';
    }
    return 'Yuk coba yang lainnya, kami akan memilih rekomendasi terbaru untuk kamu!';
  };
  const restaurants = [
    {
      name: "Seblak Dowerr",
      cuisine: "Indonesian Traditional",
      distance: "1.2 km",
      rating: 4.8,
      reviews: 234,
      price: "Rp 10.000 - 20.000",
      deliveryTime: "20-30 min",
      promo: "Diskon 20%",
      image: "https://images.unsplash.com/photo-1680674774705-90b4904b3a7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwdHJhZGl0aW9uYWwlMjBmb29kJTIwbmFzaSUyMGdvcmVuZ3xlbnwxfHx8fDE3Nzk2OTQ4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Nasi Goreng Spesial",
      cuisine: "Indonesian Traditional",
      distance: "1.8 km",
      rating: 4.9,
      reviews: 412,
      price: "Rp 15.000 - 30.000",
      deliveryTime: "25-35 min",
      image: "https://images.unsplash.com/photo-1672933036331-e27ffae157bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwcmVuZGFuZyUyMGN1cnJ5fGVufDF8fHx8MTc3OTY5NDgyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Pizza Paradise",
      cuisine: "Italian & Fast Food",
      distance: "2.3 km",
      rating: 4.7,
      reviews: 321,
      price: "Rp 50.000 - 100.000",
      deliveryTime: "30-40 min",
      promo: "Gratis Ongkir",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMGRlbGl2ZXJ5JTIwZm9vZHxlbnwxfHx8fDE3Nzk2OTQ4Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Ramen House",
      cuisine: "Japanese Cuisine",
      distance: "3.1 km",
      rating: 4.9,
      reviews: 567,
      price: "Rp 40.000 - 80.000",
      deliveryTime: "35-45 min",
      image: "https://images.unsplash.com/photo-1614563637806-1d0e645e0940?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYW1lbiUyMGJvd2wlMjBqYXBhbmVzZXxlbnwxfHx8fDE3Nzk2OTQ4Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Nearby Restaurants */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl sm:text-2xl font-bold">Restoran Terdekat</h2>
          <button className="text-primary hover:underline font-medium text-sm sm:text-base">Lihat Semua</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {restaurants.map((restaurant, index) => (
            <div
              key={index}
              className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group"
            >
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <ImageWithFallback
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-white/95 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-bold text-xs sm:text-sm">{restaurant.rating}</span>
                </div>
                {restaurant.promo && (
                  <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-primary text-primary-foreground px-2 sm:px-3 py-1 rounded-full flex items-center gap-1">
                    <Tag className="w-3 h-3" />
                    <span className="text-xs font-bold">{restaurant.promo}</span>
                  </div>
                )}
              </div>

              <div className="p-3 sm:p-4">
                <h3 className="font-bold text-base sm:text-lg mb-1">{restaurant.name}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-3">{restaurant.cuisine}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-xs sm:text-sm">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                    <span>{restaurant.distance}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                    <span>{restaurant.deliveryTime}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm">
                    <DollarSign className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                    <span>{restaurant.price}</span>
                  </div>
                </div>

                <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                  Pilih
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Picker Bot Say */}
      <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-4 sm:p-6 border-2 border-primary/20">
        <h3 className="text-lg sm:text-xl font-bold mb-2" style={{ color: '#CC5500' }}>
          PICKER BOT SAY
        </h3>
        <p className="text-foreground mb-4 text-sm sm:text-base">
          {getWeatherGreeting()}<br />
          {getWeatherMessage()}
        </p>
        <button className="bg-primary text-primary-foreground px-4 sm:px-6 py-2 rounded-lg text-sm sm:text-base font-medium hover:opacity-90 transition-opacity">
          Lihat Rekomendasi Lainnya
        </button>
      </div>
    </div>
  );
}