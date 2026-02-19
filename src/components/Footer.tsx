import { Link } from "react-router-dom";
import { Facebook, Instagram, Phone, MapPin, Mail, Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-forest-dark text-cream/80 font-crimson">
      {/* Top ornate border */}
      <div className="h-1 bg-gradient-gold" />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gold/20 border-2 border-gold/60 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-gold" />
              </div>
              <div>
                <div className="font-playfair font-bold text-lg text-gold">Gillani Dawakhana</div>
                <div className="text-cream/60 text-xs tracking-wider">Herbalist & Unani Specialist</div>
              </div>
            </div>
            <p className="text-cream/70 text-sm leading-relaxed mb-4">
              Providing pure, organic Unani herbal remedies made with high-quality natural ingredients for generations.
            </p>
            <p className="text-gold text-sm font-semibold italic">
              "Pure Organic Herbal Products"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-gold font-semibold text-lg mb-4">Quick Links</h3>
            <div className="h-0.5 w-12 bg-gold/50 mb-4" />
            <div className="flex flex-col gap-2">
              {[
                { label: "Home", path: "/" },
                { label: "Shop", path: "/shop" },
                { label: "About Us", path: "/about" },
                { label: "Contact", path: "/contact" },
                { label: "Cart", path: "/cart" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-cream/70 hover:text-gold transition-colors text-sm flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/40 group-hover:bg-gold transition-colors" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-playfair text-gold font-semibold text-lg mb-4">Our Products</h3>
            <div className="h-0.5 w-12 bg-gold/50 mb-4" />
            <div className="flex flex-col gap-2 text-sm text-cream/70">
              <span>Majoon-E-Jawan (With Zafraan)</span>
              <span>Herbal Energy Majoon</span>
              <span>Saffron Vitality Syrup</span>
              <span>Unani Herbal Tonic</span>
              <span>Premium Zafraan</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-playfair text-gold font-semibold text-lg mb-4">Contact Us</h3>
            <div className="h-0.5 w-12 bg-gold/50 mb-4" />
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-cream/90 text-sm">+92 300 000 0000</p>
                  <p className="text-cream/60 text-xs">Available 9am – 9pm</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <p className="text-cream/70 text-sm">
                  Main Bazaar, Gillani Chowk,<br />City, Pakistan
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <p className="text-cream/70 text-sm">info@gillanidawakhana.com</p>
              </div>

              {/* Social */}
              <div className="flex gap-3 mt-2">
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center hover:bg-gold/40 transition-colors text-gold"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center hover:bg-gold/40 transition-colors text-gold"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/923000000000"
                  className="w-8 h-8 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center hover:bg-gold/40 transition-colors text-gold"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gold/20 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-cream/50">
          <p>© 2024 Gillani Dawakhana. All rights reserved.</p>
          <p>Pure Organic Unani Herbal Products | Made with ♥ in Pakistan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
