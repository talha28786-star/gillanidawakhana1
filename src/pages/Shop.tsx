import { useEffect, useState } from "react";
import ShopifyProductCard from "@/components/ShopifyProductCard";
import { fetchProducts, ShopifyProduct } from "@/lib/shopify";
import { Loader2 } from "lucide-react";

const Shop = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts(20).then((p) => {
      setProducts(p);
      setLoading(false);
    });
  }, []);

  return (
    <div className="min-h-screen bg-background pt-24">
      {/* Page Header */}
      <div className="bg-forest py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="divider-ornament mb-3">
            <span className="text-gold font-crimson text-sm tracking-widest uppercase">
              Gillani Dawakhana
            </span>
          </div>
          <h1 className="font-playfair font-bold text-4xl text-cream mb-3">Our Products</h1>
          <p className="text-cream/70 font-crimson text-lg">
            Pure, organic Unani herbal formulations crafted with traditional wisdom
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-10 h-10 text-gold animate-spin" />
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-playfair text-2xl text-foreground mb-3">No products found</p>
            <p className="font-crimson text-muted-foreground">
              Add products to your Shopify store to see them here.
            </p>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-8">
              <p className="text-muted-foreground font-crimson">
                Showing{" "}
                <strong className="text-foreground">{products.length}</strong> products
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((p) => (
                <ShopifyProductCard key={p.node.id} product={p} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Shop;
