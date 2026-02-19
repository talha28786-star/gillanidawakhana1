import { useCart } from "@/hooks/useCart";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Cart = () => {
  const { items, removeItem, updateQuantity, total, clearCart } = useCart();
  const [ordered, setOrdered] = useState(false);

  const shipping = total >= 2000 ? 0 : 200;
  const grandTotal = total + shipping;

  const handleOrder = () => {
    setOrdered(true);
    clearCart();
  };

  if (ordered) {
    return (
      <div className="min-h-screen bg-background pt-24 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-20 h-20 rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-9 h-9 text-gold" />
          </div>
          <h2 className="font-playfair font-bold text-3xl text-foreground mb-4">Order Placed!</h2>
          <p className="text-muted-foreground font-crimson text-lg mb-2">
            Thank you for your order. We will contact you shortly via WhatsApp or phone to confirm.
          </p>
          <p className="text-gold font-crimson text-base italic mb-8">
            Gillani Dawakhana — Pure Organic Herbal Products
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-forest hover:bg-forest-light text-cream px-8 py-3.5 rounded-lg font-playfair font-semibold transition-all duration-200"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-24">
      {/* Header */}
      <div className="bg-forest py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-playfair font-bold text-4xl text-cream mb-2">Your Cart</h1>
          <p className="text-cream/70 font-crimson">
            {items.length === 0 ? "Your cart is empty" : `${items.length} item(s) in your cart`}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {items.length === 0 ? (
          <div className="text-center py-20">
            <ShoppingBag className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="font-playfair font-bold text-2xl text-foreground mb-3">
              Your cart is empty
            </h2>
            <p className="text-muted-foreground font-crimson text-lg mb-6">
              Explore our premium Unani herbal products
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-accent-foreground px-8 py-3.5 rounded-lg font-playfair font-semibold transition-all"
            >
              Shop Now <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-card rounded-xl border border-border shadow-card p-5 flex gap-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-playfair font-bold text-foreground mb-1 truncate">
                      {item.name}
                    </h3>
                    <p className="text-gold font-crimson text-sm mb-3">
                      Rs. {item.price.toLocaleString()} each
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 border border-border rounded-lg overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-1.5 hover:bg-secondary transition-colors text-foreground"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-3 py-1.5 font-playfair font-semibold text-foreground">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-1.5 hover:bg-secondary transition-colors text-foreground"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="font-playfair font-bold text-forest">
                          Rs. {(item.price * item.quantity).toLocaleString()}
                        </span>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-muted-foreground hover:text-destructive transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-xl border border-border shadow-card p-6 sticky top-24">
                <h3 className="font-playfair font-bold text-xl text-foreground mb-5 pb-4 border-b border-border">
                  Order Summary
                </h3>
                <div className="space-y-3 mb-5">
                  <div className="flex justify-between font-crimson text-muted-foreground">
                    <span>Subtotal</span>
                    <span>Rs. {total.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between font-crimson text-muted-foreground">
                    <span>Shipping</span>
                    <span className={shipping === 0 ? "text-forest font-semibold" : ""}>
                      {shipping === 0 ? "FREE" : `Rs. ${shipping}`}
                    </span>
                  </div>
                  {shipping > 0 && (
                    <p className="text-xs text-muted-foreground font-crimson italic">
                      Free shipping on orders above Rs. 2000
                    </p>
                  )}
                  <div className="h-px bg-border" />
                  <div className="flex justify-between font-playfair font-bold text-lg text-foreground">
                    <span>Total</span>
                    <span className="text-forest">Rs. {grandTotal.toLocaleString()}</span>
                  </div>
                </div>

                <button
                  onClick={handleOrder}
                  className="w-full bg-gold hover:bg-gold-dark text-accent-foreground py-3.5 rounded-lg font-playfair font-semibold transition-all duration-200 shadow-gold mb-3"
                >
                  Place Order (COD)
                </button>
                <a
                  href={`https://wa.me/923000000000?text=I'd like to order: ${items.map(i => `${i.name} x${i.quantity}`).join(", ")}. Total: Rs. ${grandTotal.toLocaleString()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 border-2 border-forest text-forest hover:bg-forest hover:text-cream py-3.5 rounded-lg font-playfair font-semibold transition-all duration-200"
                >
                  Order via WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
