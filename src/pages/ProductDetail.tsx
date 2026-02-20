import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Loader2 } from "lucide-react";
import { fetchProductByHandle, ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

const ProductDetail = () => {
  const { handle } = useParams<{ handle: string }>();
  const [product, setProduct] = useState<ShopifyProduct["node"] | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedVariantId, setSelectedVariantId] = useState<string>("");
  const [adding, setAdding] = useState(false);
  const { addItem, isLoading } = useCartStore();

  useEffect(() => {
    if (!handle) return;
    setLoading(true);
    fetchProductByHandle(handle).then((p) => {
      setProduct(p);
      if (p?.variants?.edges?.[0]) {
        setSelectedVariantId(p.variants.edges[0].node.id);
      }
      setLoading(false);
    });
  }, [handle]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background pt-24 flex items-center justify-center">
        <Loader2 className="w-10 h-10 text-gold animate-spin" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background pt-24 flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-playfair font-bold text-2xl text-foreground mb-4">
            Product not found
          </h2>
          <Link to="/shop" className="text-gold font-crimson hover:underline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const selectedVariant = product.variants.edges.find(
    (e) => e.node.id === selectedVariantId
  )?.node ?? product.variants.edges[0]?.node;

  const handleAddToCart = async () => {
    if (!selectedVariant) return;
    setAdding(true);
    await addItem({
      product: { node: product },
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity: 1,
      selectedOptions: selectedVariant.selectedOptions,
    });
    toast.success(`${product.title} added to cart!`, {
      style: {
        background: "hsl(152 50% 18%)",
        color: "hsl(42 30% 96%)",
        border: "1px solid hsl(43 85% 50%)",
      },
      position: "top-center",
    });
    setAdding(false);
  };

  const images = product.images.edges;

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-4 py-12">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold font-crimson text-sm mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Shop
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-xl overflow-hidden bg-parchment border border-border">
              {images[0] ? (
                <img
                  src={images[0].node.url}
                  alt={images[0].node.altText || product.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-secondary" />
              )}
            </div>
            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {images.slice(1).map((img, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-lg overflow-hidden border border-border bg-parchment"
                  >
                    <img
                      src={img.node.url}
                      alt={img.node.altText || product.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            <h1 className="font-playfair font-bold text-3xl text-foreground mb-3">
              {product.title}
            </h1>
            <p className="text-3xl font-playfair font-bold text-forest mb-6">
              {selectedVariant?.price.currencyCode}{" "}
              {parseFloat(selectedVariant?.price.amount || "0").toFixed(2)}
            </p>

            {product.description && (
              <p className="text-muted-foreground font-crimson leading-relaxed mb-6">
                {product.description}
              </p>
            )}

            {/* Variant selector */}
            {product.variants.edges.length > 1 && (
              <div className="mb-6">
                <p className="font-playfair font-semibold text-foreground mb-2 text-sm">
                  Variant
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.variants.edges.map(({ node: v }) => (
                    <button
                      key={v.id}
                      onClick={() => setSelectedVariantId(v.id)}
                      disabled={!v.availableForSale}
                      className={`px-4 py-2 rounded-lg border font-crimson text-sm transition-all ${
                        selectedVariantId === v.id
                          ? "border-gold bg-gold/10 text-foreground"
                          : "border-border text-muted-foreground hover:border-gold/50"
                      } disabled:opacity-40 disabled:cursor-not-allowed`}
                    >
                      {v.title}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <button
              onClick={handleAddToCart}
              disabled={isLoading || adding || !selectedVariant?.availableForSale}
              className="w-full flex items-center justify-center gap-2 bg-forest hover:bg-forest-light text-cream py-4 rounded-xl font-playfair font-semibold text-lg transition-all duration-200 hover:shadow-green disabled:opacity-60"
            >
              {adding ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <ShoppingCart className="w-5 h-5" />
                  {selectedVariant?.availableForSale
                    ? "Add to Cart"
                    : "Out of Stock"}
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
