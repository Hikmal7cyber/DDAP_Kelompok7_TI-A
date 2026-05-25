import { Search, MapPin } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="mb-6">
      <div className="bg-card rounded-xl p-4 sm:p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
          {/* Location */}
          <div className="flex items-center gap-2 sm:min-w-[200px]">
            <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
            <div>
              <p className="text-xs text-muted-foreground">Lokasi Anda</p>
              <p className="font-medium text-sm sm:text-base">Jakarta, Indonesia</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Cari restoran atau makanan..."
              className="w-full pl-10 pr-4 py-3 bg-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-all text-sm sm:text-base"
            />
          </div>

          {/* Search Button */}
          <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity whitespace-nowrap">
            Cari
          </button>
        </div>
      </div>
    </div>
  );
}
