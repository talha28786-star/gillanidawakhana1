import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingCart, Minus, Plus, Trash2, ExternalLink, Loader2 } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import { Link } from "react-router-dom";

export const CartDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { items, isLoading, isSyncing, updateQuantity, removeItem, getCheckoutUrl, syncCart } =
    useCartStore();
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + parseFloat(item.price.amount) * item.quantity,
    0
  );

  useEffect(() => {
    if (isOpen) syncCart();
  }, [isOpen, syncCart]);

  const handleCheckout = () => {
    const checkoutUrl = getCheckoutUrl();
    if (checkoutUrl) {
      window.open(checkoutUrl, "_blank");
      setIsOpen(false);
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button className="relative p-2 text-cream hover:text-gold transition-colors">
          <ShoppingCart className="w-6 h-6" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-gold text-accent-foreground rounded-full text-xs flex items-center justify-center font-bold">
              {totalItems}
            </span>
          )}
        </button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-full sm:max-w-md flex flex-col h-full bg-background border-border"
      >
        <SheetHeader className="flex-shrink-0 border-b border-border pb-4">
          <SheetTitle className="font-playfair text-foreground flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-gold" />
            Your Cart
            {totalItems > 0 && (
              <span className="text-sm font-crimson text-muted-foreground font-normal">
                ({totalItems} item{totalItems !== 1 ? "s" : ""})
              </span>
            )}
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col flex-1 pt-4 min-h-0">
          {items.length === 0 ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <ShoppingCart className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="font-playfair text-foreground mb-1">Your cart is empty</p>
                <p className="font-crimson text-muted-foreground text-sm mb-4">
                  Explore our premium herbal products
                </p>
                <Link
                  to="/shop"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center gap-2 bg-forest hover:bg-forest-light text-cream px-5 py-2.5 rounded-lg font-crimson font-semibold text-sm transition-all"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto pr-1 min-h-0 space-y-3">
                {items.map((item) => {
                  const image = item.product.node.images?.edges?.[0]?.node;
                  return (
                    <div
                      key={item.variantId}
                      className="flex gap-3 p-3 bg-card rounded-lg border border-border"
                    >
                      <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-parchment">
                        {image ? (
                          <img
                            src={image.url}
                            alt={image.altText || item.product.node.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-secondary" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-playfair font-semibold text-foreground text-sm truncate">
                          {item.product.node.title}
                        </h4>
                        {item.variantTitle !== "Default Title" && (
                          <p className="text-xs text-muted-foreground font-crimson">
                            {item.variantTitle}
                          </p>
                        )}
                        <p className="text-gold font-crimson font-semibold text-sm mt-0.5">
                          {item.price.currencyCode}{" "}
                          {parseFloat(item.price.amount).toFixed(2)}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <div className="flex items-center border border-border rounded-lg overflow-hidden">
                            <button
                              onClick={() =>
                                updateQuantity(item.variantId, item.quantity - 1)
                              }
                              className="px-2 py-1 hover:bg-secondary transition-colors text-foreground"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2 py-1 font-playfair font-semibold text-foreground text-sm">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.variantId, item.quantity + 1)
                              }
                              className="px-2 py-1 hover:bg-secondary transition-colors text-foreground"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(item.variantId)}
                            className="ml-auto text-muted-foreground hover:text-destructive transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex-shrink-0 pt-4 border-t border-border space-y-3 mt-4">
                <div className="flex justify-between items-center font-playfair">
                  <span className="text-foreground font-semibold">Total</span>
                  <span className="text-forest font-bold text-lg">
                    {items[0]?.price.currencyCode || "PKR"}{" "}
                    {totalPrice.toFixed(2)}
                  </span>
                </div>
                <button
                  onClick={handleCheckout}
                  disabled={isLoading || isSyncing}
                  className="w-full flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-accent-foreground py-3.5 rounded-lg font-playfair font-semibold transition-all duration-200 shadow-gold disabled:opacity-60"
                >
                  {isLoading || isSyncing ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      <ExternalLink className="w-4 h-4" />
                      Checkout with Shopify
                    </>
                  )}
                </button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
