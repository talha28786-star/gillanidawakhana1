import { Star } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: number;
  name: string;
  subtitle?: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
  rating?: number;
  reviews?: number;
  freeShipping?: boolean;
}

const ProductCard = ({
  id,
  name,
  subtitle,
  description,
  price,
  originalPrice,
  image,
  badge,
  rating = 4.8,
  reviews = 124,
  freeShipping,
}: ProductCardProps) => {
  return (
    <Link to={`/product/${id}`} className="block">
      <div className="product-card bg-gradient-card rounded-xl overflow-hidden border border-border shadow-card group">
        {/* Image */}
        <div className="relative overflow-hidden aspect-square bg-parchment">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {badge && (
            <div className="absolute top-3 left-3 bg-gold text-accent-foreground text-xs font-bold px-3 py-1 rounded-full font-crimson">
              {badge}
            </div>
          )}
          {originalPrice && (
            <div className="absolute top-3 right-3 bg-forest text-cream text-xs font-bold px-2 py-1 rounded-full font-crimson">
              Save Rs. {(originalPrice - price).toLocaleString()}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Rating */}
          <div className="flex items-center gap-1.5 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < Math.floor(rating) ? "text-gold fill-gold" : "text-muted-foreground"
                }`}
              />
            ))}
            <span className="text-muted-foreground text-xs ml-1">({reviews})</span>
          </div>

          <h3 className="font-playfair font-bold text-lg text-foreground leading-tight mb-1">
            {name}
          </h3>
          {subtitle && (
            <p className="text-gold text-sm font-crimson italic mb-2">{subtitle}</p>
          )}
          <p className="text-muted-foreground text-sm font-crimson leading-relaxed mb-4">
            {description}
          </p>

          {/* Price + CTA */}
          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-playfair font-bold text-forest">
                Rs. {price.toLocaleString()}
              </span>
              {originalPrice && (
                <span className="text-muted-foreground line-through text-sm ml-2 font-crimson">
                  Rs. {originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            <span className="flex items-center gap-2 bg-gold hover:bg-gold-dark text-accent-foreground px-4 py-2.5 rounded-lg text-sm font-crimson font-semibold transition-all duration-200 shadow-gold group-hover:shadow-lg">
              Buy Now
            </span>
          </div>
          {freeShipping && (
            <p className="text-forest text-xs font-crimson font-semibold mt-2">🚚 Free Shipping</p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
