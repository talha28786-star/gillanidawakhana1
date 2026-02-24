import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { ChevronLeft, Star, Truck, Shield, Leaf } from "lucide-react";
import OrderForm from "@/components/OrderForm";
import productMajoon from "@/assets/product-majoon.jpg";
import productEnergy from "@/assets/product-energy.jpg";
import productSyrup from "@/assets/product-syrup.jpg";

const allProducts = [
  {
    id: 1,
    name: "Majoon-E-Jawan",
    subtitle: "With Zafraan – Pure Organic",
    description: "Premium saffron Unani herbal formulation for vitality and strength.",
    price: 5999,
    originalPrice: 6999,
    images: [productMajoon, productEnergy, productSyrup],
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
    images: [productEnergy, productMajoon, productSyrup],
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
    images: [productSyrup, productMajoon, productEnergy],
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
    images: [productMajoon, productSyrup, productEnergy],
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
    images: [productSyrup, productEnergy, productMajoon],
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
    images: [productEnergy, productMajoon, productSyrup],
    badge: "Combo Deal",
    rating: 5.0,
    reviews: 31,
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = allProducts.find((p) => p.id === Number(id));
  const [selectedImage, setSelectedImage] = useState(0);
  const [showOrderForm, setShowOrderForm] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-background pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-playfair text-2xl text-foreground mb-4">Product not found</h1>
          <Link to="/shop" className="text-gold hover:underline font-crimson">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold font-crimson mb-8 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Shop
        </Link>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Images */}
          <div>
            <div className="aspect-square rounded-xl overflow-hidden bg-parchment border border-border mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    i === selectedImage ? "border-gold" : "border-border hover:border-gold/50"
                  }`}
                >
                  <img src={img} alt={`${product.name} ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            {product.badge && (
              <span className="inline-block bg-gold text-accent-foreground text-xs font-bold px-3 py-1 rounded-full font-crimson mb-3">
                {product.badge}
              </span>
            )}
            <h1 className="font-playfair font-bold text-3xl text-foreground mb-2">{product.name}</h1>
            {product.subtitle && (
              <p className="text-gold text-lg font-crimson italic mb-4">{product.subtitle}</p>
            )}

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating) ? "text-gold fill-gold" : "text-muted-foreground"
                  }`}
                />
              ))}
              <span className="text-muted-foreground text-sm font-crimson">({product.reviews} reviews)</span>
            </div>

            <p className="text-muted-foreground font-crimson text-lg mb-6">{product.description}</p>

            {/* Price */}
            <div className="mb-6">
              <span className="text-3xl font-playfair font-bold text-forest">
                Rs. {product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-muted-foreground line-through text-lg ml-3 font-crimson">
                    Rs. {product.originalPrice.toLocaleString()}
                  </span>
                  <span className="ml-3 bg-forest text-cream text-sm font-bold px-2 py-1 rounded-full font-crimson">
                    Save Rs. {(product.originalPrice - product.price).toLocaleString()}
                  </span>
                </>
              )}
            </div>

            {/* Free shipping */}
            {(product as any).freeShipping && (
              <div className="flex items-center gap-2 text-forest font-crimson font-semibold mb-6">
                <Truck className="w-5 h-5" />
                Free Shipping All Over Pakistan
              </div>
            )}

            {/* Buy Now */}
            <button
              onClick={() => setShowOrderForm(true)}
              className="w-full bg-gold hover:bg-gold-dark text-accent-foreground px-8 py-4 rounded-lg font-playfair font-bold text-lg transition-all duration-200 shadow-gold hover:shadow-lg hover:-translate-y-0.5 mb-6"
            >
              Buy Now
            </button>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
              {[
                { icon: Leaf, label: "100% Organic" },
                { icon: Shield, label: "Quality Tested" },
                { icon: Truck, label: "Fast Delivery" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center text-center">
                  <Icon className="w-5 h-5 text-gold mb-1" />
                  <span className="text-xs font-crimson text-muted-foreground">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Order Form Dialog */}
      <OrderForm
        open={showOrderForm}
        onClose={() => setShowOrderForm(false)}
        product={product}
      />
    </div>
  );
};

export default ProductDetail;
