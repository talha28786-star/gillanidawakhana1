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
    description: "Premium saffron herbal formulation for vitality.",
    price: 5999,
    originalPrice: 6999,
    image: productMajoon,
    badge: "Best Seller",
    rating: 4.9,
    reviews: 248,
    freeShipping: true,
  },
  {
    id: 2,
    name: "Herbal Energy Majoon",
    subtitle: "Organic & Chemical-Free",
    description: "Natural herbal blend for stamina and energy.",
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
    description: "Herbal syrup for well-being and vitality.",
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
    description: "Flagship Majoon in large economy pack.",
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
    description: "Concentrated herbal tonic for immune support.",
    price: 1100,
    image: productSyrup,
    rating: 4.6,
    reviews: 43,
  },
  {
    id: 6,
    name: "Herbal Wellness Combo",
    subtitle: "Complete Unani Pack",
    description: "Majoon + Syrup combo at special price.",
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
