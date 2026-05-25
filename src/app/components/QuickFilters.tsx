import { Filter, TrendingUp, Percent, Clock } from "lucide-react";

export default function QuickFilters() {
  const filters = [
    { icon: TrendingUp, label: "Populer", active: true },
    { icon: Percent, label: "Promo" },
    { icon: Clock, label: "Cepat Saji" },
    { icon: Filter, label: "Filter Lainnya" },
  ];

  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {filters.map((filter, index) => (
          <button
            key={index}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap text-sm ${
              filter.active
                ? "bg-primary text-primary-foreground"
                : "bg-card text-foreground hover:bg-accent border border-border"
            }`}
          >
            <filter.icon className="w-4 h-4 flex-shrink-0" />
            <span className="hidden sm:inline">{filter.label}</span>
            <span className="sm:hidden">{filter.label.split(' ')[0]}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
