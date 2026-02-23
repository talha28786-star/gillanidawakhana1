import HeroSlider from "@/components/HeroSlider";
import HeroFeatures from "@/components/HeroFeatures";
import ProductCard from "@/components/ProductCard";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import { Link } from "react-router-dom";
import { Leaf, Shield, Truck, Phone } from "lucide-react";
import productMajoon from "@/assets/product-majoon.jpg";
import productEnergy from "@/assets/product-energy.jpg";
import productSyrup from "@/assets/product-syrup.jpg";

const products = [
  {
    id: 1,
    name: "Majoon-E-Jawan",
    subtitle: "With Zafraan – Pure Organic",
    description: "Traditional Unani herbal formulation made with premium saffron and natural ingredients to support vitality and strength. Packaged in premium glass herbal jars.",
    price: 1800,
    originalPrice: 2200,
    image: productMajoon,
    badge: "Best Seller",
    rating: 4.9,
    reviews: 248,
  },
  {
    id: 2,
    name: "Herbal Energy Majoon",
    subtitle: "Organic & Chemical-Free",
    description: "Natural herbal blend crafted for stamina, daily wellness and sustained energy. Made with ashwagandha, shilajit, and other powerful Unani herbs.",
    price: 1400,
    image: productEnergy,
    badge: "New",
    rating: 4.7,
    reviews: 89,
  },
  {
    id: 3,
    name: "Saffron Vitality Syrup",
    subtitle: "Enriched with Pure Zafraan",
    description: "Herbal syrup enriched with pure zafraan to promote overall well-being, digestive health, and natural vitality. A daily tonic for the whole family.",
    price: 950,
    originalPrice: 1200,
    image: productSyrup,
    rating: 4.8,
    reviews: 156,
  },
];

const trustBadges = [
  { icon: Leaf, title: "100% Organic", desc: "Pure natural ingredients" },
  { icon: Shield, title: "Quality Tested", desc: "Lab verified formulas" },
  { icon: Truck, title: "Fast Delivery", desc: "All across Pakistan" },
  { icon: Phone, title: "Expert Support", desc: "Herbalist consultation" },
];

const Index = () => {
  return (
    <div>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Trust Badges Strip */}
      <div className="bg-forest py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustBadges.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-center gap-3 text-cream">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-playfair font-semibold text-gold text-sm">{title}</p>
                  <p className="text-cream/70 text-xs font-crimson">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Hero Product */}
      <HeroFeatures />

      {/* Featured Products */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="divider-ornament mb-4">
              <span className="text-gold font-crimson text-base tracking-widest uppercase">
                Premium Collection
              </span>
            </div>
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-foreground mb-4">
              Our Featured Products
            </h2>
            <p className="text-muted-foreground font-crimson text-lg max-w-2xl mx-auto">
              Each product is a testament to the purity and efficacy of traditional Unani medicine, 
              crafted with the finest organic ingredients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p) => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 border-2 border-forest text-forest hover:bg-forest hover:text-cream px-8 py-3.5 rounded-lg font-playfair font-semibold transition-all duration-200"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="divider-ornament mb-4">
              <span className="text-gold font-crimson text-base tracking-widest uppercase">
                About Us
              </span>
            </div>
            <h2 className="font-playfair font-bold text-4xl text-foreground mb-6">
              Gillani Herb's
            </h2>
            <div className="h-0.5 w-24 bg-gold mx-auto mb-6" />
            <p className="text-muted-foreground font-crimson text-lg leading-relaxed mb-4">
              Gillani Herb's is a trusted name in traditional Unani herbal medicine, 
              dedicated to providing pure, organic remedies crafted from high-quality natural ingredients. 
              Our expert herbalist brings decades of experience in classical Unani formulation.
            </p>
            <p className="text-muted-foreground font-crimson text-lg leading-relaxed mb-8">
              We believe in the healing power of nature and the timeless wisdom of Unani medicine — 
              bringing you remedies that are not only effective but completely free from synthetic chemicals.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-accent-foreground px-8 py-3.5 rounded-lg font-playfair font-semibold transition-all duration-200 shadow-gold"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* CTA Banner */}
      <section className="py-16 bg-gold">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-accent-foreground mb-4">
            Ready to Experience Pure Unani Wellness?
          </h2>
          <p className="text-accent-foreground/80 font-crimson text-lg mb-8">
            Order now and get free delivery on orders above Rs. 2000
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 bg-forest hover:bg-forest-light text-cream px-8 py-3.5 rounded-lg font-playfair font-semibold transition-all duration-200 shadow-green"
            >
              Shop Now
            </Link>
            <a
              href="https://wa.me/923000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-forest text-forest hover:bg-forest/10 px-8 py-3.5 rounded-lg font-playfair font-semibold transition-all duration-200"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
