import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Leaf } from "lucide-react";
import { CartDrawer } from "@/components/CartDrawer";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Shop", path: "/shop" },
    { label: "About Us", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-forest shadow-green" : "bg-forest/95 backdrop-blur-sm"
      }`}
    >
      {/* Top strip */}
      <div className="bg-gold text-accent-foreground text-center py-1 text-sm font-crimson">
        ✦ 100% Pure & Organic Unani Formulations — Free Delivery on Orders Above Rs. 2000 ✦
      </div>

      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gold/20 border-2 border-gold/60 flex items-center justify-center group-hover:bg-gold/30 transition-colors">
              <Leaf className="w-5 h-5 text-gold" />
            </div>
            <div>
              <div className="font-playfair font-bold text-lg text-gold leading-tight">
                Gillani Dawakhana
              </div>
              <div className="text-cream/70 text-xs font-crimson tracking-wider">
                Pure Organic Unani Remedies
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-crimson text-base transition-all duration-200 relative group ${
                  isActive(link.path)
                    ? "text-gold"
                    : "text-cream/85 hover:text-gold"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gold transition-all duration-200 ${
                    isActive(link.path) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Cart Drawer + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <CartDrawer />
            <button
              className="md:hidden text-cream hover:text-gold transition-colors"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gold/20 pt-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileOpen(false)}
                className={`font-crimson text-base px-2 py-1 transition-colors ${
                  isActive(link.path) ? "text-gold" : "text-cream/85 hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
