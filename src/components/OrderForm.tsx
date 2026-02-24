import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface OrderFormProps {
  open: boolean;
  onClose: () => void;
  product: {
    id: number;
    name: string;
    price: number;
    subtitle?: string;
  };
}

const OrderForm = ({ open, onClose, product }: OrderFormProps) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    address: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.phone.trim() || !form.address.trim() || !form.city.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    setSubmitting(true);

    const orderText = `🛒 *New Order - Gillani Herb's*%0A%0A📦 *Product:* ${encodeURIComponent(product.name)}%0A💰 *Price:* Rs. ${product.price.toLocaleString()}%0A%0A👤 *Customer:* ${encodeURIComponent(form.name)}%0A📞 *Phone:* ${encodeURIComponent(form.phone)}%0A🏙 *City:* ${encodeURIComponent(form.city)}%0A📍 *Address:* ${encodeURIComponent(form.address)}`;

    // Send via WhatsApp
    window.open(`https://wa.me/923137942009?text=${orderText}`, "_blank");

    // Also send via email
    const emailSubject = encodeURIComponent(`New Order: ${product.name} - ${form.name}`);
    const emailBody = encodeURIComponent(
      `New Order - Gillani Herb's\n\nProduct: ${product.name}\nPrice: Rs. ${product.price.toLocaleString()}\n\nCustomer: ${form.name}\nPhone: ${form.phone}\nCity: ${form.city}\nAddress: ${form.address}`
    );
    window.open(`mailto:talha28786@gmail.com?subject=${emailSubject}&body=${emailBody}`, "_blank");

    toast.success("Order placed successfully!", {
      description: "We will confirm your order shortly via WhatsApp.",
      style: {
        background: "hsl(152 50% 18%)",
        color: "hsl(42 30% 96%)",
        border: "1px solid hsl(43 85% 50%)",
      },
    });

    setForm({ name: "", phone: "", city: "", address: "" });
    setSubmitting(false);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-background border-border max-w-md">
        <DialogHeader>
          <DialogTitle className="font-playfair text-xl text-foreground">
            Place Your Order
          </DialogTitle>
          <DialogDescription className="font-crimson text-muted-foreground">
            {product.name} — Rs. {product.price.toLocaleString()}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label className="font-crimson text-foreground">Full Name *</Label>
            <Input
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="Your full name"
              className="mt-1 font-crimson"
              maxLength={100}
            />
          </div>
          <div>
            <Label className="font-crimson text-foreground">Phone Number *</Label>
            <Input
              value={form.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              placeholder="03XX XXXXXXX"
              className="mt-1 font-crimson"
              maxLength={15}
            />
          </div>
          <div>
            <Label className="font-crimson text-foreground">City *</Label>
            <Input
              value={form.city}
              onChange={(e) => handleChange("city", e.target.value)}
              placeholder="Your city"
              className="mt-1 font-crimson"
              maxLength={50}
            />
          </div>
          <div>
            <Label className="font-crimson text-foreground">Complete Address *</Label>
            <Input
              value={form.address}
              onChange={(e) => handleChange("address", e.target.value)}
              placeholder="House #, Street, Area"
              className="mt-1 font-crimson"
              maxLength={200}
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-gold hover:bg-gold-dark text-accent-foreground px-6 py-3.5 rounded-lg font-playfair font-bold text-lg transition-all duration-200 shadow-gold disabled:opacity-50"
          >
            {submitting ? "Placing Order..." : "Submit Order"}
          </button>

          <p className="text-xs text-muted-foreground font-crimson text-center">
            Your order will be sent via WhatsApp & Email for confirmation
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default OrderForm;
