import ProductCard from "@/components/ProductCard";
import productMajoon from "@/assets/product-majoon.jpg";
import productEnergy from "@/assets/product-energy.jpg";
import productSyrup from "@/assets/product-syrup.jpg";
import { Filter } from "lucide-react";

const allProducts = [
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
  {
    id: 4,
    name: "Majoon-E-Jawan (Large)",
    subtitle: "500g Premium Pack",
    description: "Our flagship Majoon in a large economy pack. Same premium quality with pure zafraan, ideal for families or extended treatment courses.",
    price: 3200,
    originalPrice: 3800,
    image: productMajoon,
    badge: "Value Pack",
    rating: 4.9,
    reviews: 67,
  },
  {
    id: 5,
    name: "Zafraan Herbal Tonic",
    subtitle: "Daily Wellness Formula",
    description: "A concentrated herbal tonic blend for immune support, energy, and natural vitality. Premium saffron meets classic Unani botanicals.",
    price: 1100,
    image: productSyrup,
    rating: 4.6,
    reviews: 43,
  },
  {
    id: 6,
    name: "Herbal Wellness Combo",
    subtitle: "Complete Unani Pack",
    description: "Get Majoon-E-Jawan + Saffron Vitality Syrup together at a special price. A complete wellness routine from Gillani Herb's.",
    price: 2500,
    originalPrice: 2750,
    image: productEnergy,
    badge: "Combo Deal",
    rating: 5.0,
    reviews: 31,
  },
];

const Shop = () => {
  return (
    <div className="min-h-screen bg-background pt-24">
      {/* Page Header */}
      <div className="bg-forest py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="divider-ornament mb-3">
            <span className="text-gold font-crimson text-sm tracking-widest uppercase">
              Gillani Herb's
            </span>
          </div>
          <h1 className="font-playfair font-bold text-4xl text-cream mb-3">Our Products</h1>
          <p className="text-cream/70 font-crimson text-lg">
            Pure, organic Unani herbal formulations crafted with traditional wisdom
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Filter bar */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-muted-foreground font-crimson">
            Showing <strong className="text-foreground">{allProducts.length}</strong> products
          </p>
          <div className="flex items-center gap-2 text-muted-foreground font-crimson text-sm border border-border rounded-lg px-3 py-2">
            <Filter className="w-4 h-4" />
            <span>All Products</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProducts.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
