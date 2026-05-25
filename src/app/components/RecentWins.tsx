import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";

export default function FoodCategories() {
  const categories = [
    {
      title: "Traditional",
      description: "Makanan tradisional Indonesia",
      image: "https://images.unsplash.com/photo-1529563021893-cc83c992d75d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwc2F0ZSUyMHNrZXdlcnN8ZW58MXx8fHwxNzc5Njk0ODI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Healthy Food",
      description: "Menu sehat dan bergizi",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZm9vZCUyMHNhbGFkJTIwYm93bHxlbnwxfHx8fDE3Nzk1ODY2NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Junk Food",
      description: "Menu favorit cepat saji",
      image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqdW5rJTIwZm9vZCUyMGJ1cmdlciUyMGZyaWVzfGVufDF8fHx8MTc3OTY5NDgyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Chinese Cuisine",
      description: "Masakan China yang lezat",
      image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwY3Vpc2luZSUyMG5vb2RsZXN8ZW58MXx8fHwxNzc5Njk0ODI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl sm:text-2xl font-bold">Kategori Makanan</h2>
        <button className="text-primary hover:underline font-medium flex items-center gap-1 text-sm sm:text-base">
          Lihat Semua
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
          >
            <div className="relative h-32 sm:h-40 overflow-hidden">
              <ImageWithFallback
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="p-3 sm:p-4">
              <h3 className="font-bold text-base sm:text-lg mb-1">{category.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-3">{category.description}</p>
              <button className="mt-1 w-full bg-primary text-primary-foreground py-2 rounded-lg text-xs sm:text-sm font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-1">
                More
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}