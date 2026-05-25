import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-12">
      <div className="p-8">
        <div className="grid grid-cols-3 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="font-bold mb-3">Let Us Help You</h3>
            <p className="text-sm opacity-90">Your Account</p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-bold mb-3">Partnership</h3>
            <p className="text-sm opacity-90">Bene Your Partner</p>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-bold mb-3">Connect With Us</h3>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-white/20 rounded-md flex items-center justify-center hover:bg-white/30 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/20 rounded-md flex items-center justify-center hover:bg-white/30 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/20 rounded-md flex items-center justify-center hover:bg-white/30 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/20 rounded-md flex items-center justify-center hover:bg-white/30 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
