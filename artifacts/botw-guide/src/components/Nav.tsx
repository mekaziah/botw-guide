import { Link, useLocation } from "wouter";
import { Map, Sword, Castle, Leaf, Utensils, Shield, Lightbulb, Menu, X, MapPin } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home", icon: null },
  { href: "/map", label: "Map", icon: <MapPin size={16} /> },
  { href: "/main-quest", label: "Main Quest", icon: <Map size={16} /> },
  { href: "/shrines", label: "Shrines", icon: <Sword size={16} /> },
  { href: "/divine-beasts", label: "Divine Beasts", icon: <Castle size={16} /> },
  { href: "/korok-seeds", label: "Korok Seeds", icon: <Leaf size={16} /> },
  { href: "/cooking", label: "Cooking", icon: <Utensils size={16} /> },
  { href: "/gear", label: "Gear", icon: <Shield size={16} /> },
  { href: "/tips", label: "Tips", icon: <Lightbulb size={16} /> },
];

function Triforce() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <polygon points="14,2 21,14 7,14" fill="hsl(41 72% 47%)" />
      <polygon points="7,14 14,26 0,26" fill="hsl(41 72% 47%)" />
      <polygon points="21,14 28,26 14,26" fill="hsl(41 72% 47%)" />
    </svg>
  );
}

export default function Nav() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-sidebar/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group" data-testid="nav-logo">
          <Triforce />
          <span className="font-cinzel text-primary font-bold text-lg hidden sm:block tracking-wide">Hyrule Field Guide</span>
          <span className="font-cinzel text-primary font-bold text-base sm:hidden tracking-wide">BotW Guide</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.slice(1).map((link) => {
            const isActive = location === link.href || (link.href !== "/" && location.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                data-testid={`nav-link-${link.href.replace("/", "") || "home"}`}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-card"
                }`}
              >
                {link.icon}
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-card transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          data-testid="nav-mobile-toggle"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-sidebar px-4 py-3 flex flex-col gap-1">
          {navLinks.slice(1).map((link) => {
            const isActive = location === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                data-testid={`nav-mobile-link-${link.href.replace("/", "") || "home"}`}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-card"
                }`}
              >
                {link.icon}
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
