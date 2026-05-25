import { Home, UtensilsCrossed, User, ShoppingBag, Heart, MapPin, Settings } from "lucide-react";

export default function NavigationSidebar() {
  const menuItems = [
    { icon: Home, label: "Beranda", active: true },
    { icon: UtensilsCrossed, label: "Kategori" },
    { icon: ShoppingBag, label: "Pesanan Saya" },
    { icon: Heart, label: "Favorit" },
    { icon: MapPin, label: "Alamat" },
    { icon: User, label: "Profil" },
    { icon: Settings, label: "Pengaturan" },
  ];

  return (
    <div className="w-64 bg-card border-r border-border flex flex-col h-full">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #CC5500 0%, #FF8C42 100%)' }}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 4C16 4 12 8 12 12C12 14.2091 13.7909 16 16 16C18.2091 16 20 14.2091 20 12C20 8 16 4 16 4Z" fill="white"/>
              <path d="M8 14C8 14 6 16 6 18C6 19.1046 6.89543 20 8 20C9.10457 20 10 19.1046 10 18C10 16 8 14 8 14Z" fill="white"/>
              <path d="M24 14C24 14 22 16 22 18C22 19.1046 22.8954 20 24 20C25.1046 20 26 19.1046 26 18C26 16 24 14 24 14Z" fill="white"/>
              <path d="M8 22H24C24 26.4183 20.4183 30 16 30C11.5817 30 8 26.4183 8 22Z" fill="white"/>
            </svg>
          </div>
          <div>
            <h1 className="font-bold text-lg leading-tight">
              <span style={{ color: '#1a1a1a' }}>MOOD</span>
              <span style={{ color: '#CC5500' }}>FOOD</span>
              <span style={{ color: '#1a1a1a' }}>PICKER</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                item.active
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* User Info */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-3 p-3 rounded-lg bg-accent">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-primary-foreground" />
          </div>
          <div className="flex-1">
            <p className="font-medium text-sm">Haloo, Guest</p>
            <p className="text-xs text-muted-foreground">guest@email.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}