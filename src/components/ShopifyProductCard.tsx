import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCart, Star, Loader2 } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import { ShopifyProduct } from "@/lib/shopify";
import { toast } from "sonner";

interface ShopifyProductCardProps {
  product: ShopifyProduct;
}

const ShopifyProductCard = ({ product }: ShopifyProductCardProps) => {
  const { addItem, isLoading } = useCartStore();
  const navigate = useNavigate();
  const [adding, setAdding] = useState(false);

  const { node } = product;
  const image = node.images?.edges?.[0]?.node;
  const firstVariant = node.variants?.edges?.[0]?.node;
  const price = node.priceRange.minVariantPrice;

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!firstVariant) return;
    setAdding(true);
    await addItem({
      product,
      variantId: firstVariant.id,
      variantTitle: firstVariant.title,
      price: firstVariant.price,
      quantity: 1,
      selectedOptions: firstVariant.selectedOptions,
    });
    toast.success(`${node.title} added to cart!`, {
      description: "Your item has been added successfully.",
      style: {
        background: "hsl(152 50% 18%)",
        color: "hsl(42 30% 96%)",
        border: "1px solid hsl(43 85% 50%)",
      },
      position: "top-center",
    });
    setAdding(false);
  };

  return (
    <div
      className="product-card bg-gradient-card rounded-xl overflow-hidden border border-border shadow-card group cursor-pointer"
      onClick={() => navigate(`/product/${node.handle}`)}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-square bg-parchment">
        {image ? (
          <img
            src={image.url}
            alt={image.altText || node.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-secondary flex items-center justify-center">
            <span className="text-muted-foreground font-crimson text-sm">No image</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Rating placeholder */}
        <div className="flex items-center gap-1.5 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 text-gold fill-gold" />
          ))}
        </div>

        <h3 className="font-playfair font-bold text-lg text-foreground leading-tight mb-1">
          {node.title}
        </h3>
        {node.description && (
          <p className="text-muted-foreground text-sm font-crimson leading-relaxed mb-4 line-clamp-3">
            {node.description}
          </p>
        )}

        {/* Price + CTA */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-playfair font-bold text-forest">
              {price.currencyCode} {parseFloat(price.amount).toFixed(2)}
            </span>
          </div>
          <button
            onClick={handleAddToCart}
            disabled={isLoading || adding}
            className="flex items-center gap-2 bg-forest hover:bg-forest-light text-cream px-4 py-2.5 rounded-lg text-sm font-crimson font-semibold transition-all duration-200 hover:shadow-green group/btn disabled:opacity-60"
          >
            {adding ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <ShoppingCart className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
            )}
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopifyProductCard;
