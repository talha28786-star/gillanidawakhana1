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
import { Minus, Plus } from "lucide-react";

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
  const [quantity, setQuantity] = useState(1);
  const [submitting, setSubmitting] = useState(false);

  const totalPrice = product.price * quantity;

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.phone.trim() || !form.address.trim() || !form.city.trim()) {
      toast.error("تمام فیلڈز پُر کریں");
      return;
    }

    setSubmitting(true);

    const orderText = `🛒 *New Order - Gillani Herb's*%0A%0A📦 *Product:* ${encodeURIComponent(product.name)}%0A📊 *Quantity:* ${quantity}%0A💰 *Unit Price:* Rs. ${product.price.toLocaleString()}%0A💵 *Total:* Rs. ${totalPrice.toLocaleString()}%0A%0A👤 *Customer:* ${encodeURIComponent(form.name)}%0A📞 *Phone:* ${encodeURIComponent(form.phone)}%0A🏙 *City:* ${encodeURIComponent(form.city)}%0A📍 *Address:* ${encodeURIComponent(form.address)}`;

    // Send via WhatsApp
    window.open(`https://wa.me/923137942009?text=${orderText}`, "_blank");

    // Also send via email with full details
    const emailSubject = encodeURIComponent(`New Order: ${product.name} x${quantity} - ${form.name}`);
    const emailBody = encodeURIComponent(
      `New Order - Gillani Herb's\n\n--- Product Details ---\nProduct: ${product.name}\nQuantity: ${quantity}\nUnit Price: Rs. ${product.price.toLocaleString()}\nTotal Amount: Rs. ${totalPrice.toLocaleString()}\n\n--- Customer Details ---\nCustomer Name: ${form.name}\nPhone: ${form.phone}\nCity: ${form.city}\nComplete Address: ${form.address}`
    );
    window.open(`mailto:talha28786@gmail.com?subject=${emailSubject}&body=${emailBody}`, "_blank");

    toast.success("آرڈر کامیابی سے بھیج دیا گیا!", {
      description: "ہم جلد WhatsApp پر آپ کے آرڈر کی تصدیق کریں گے۔",
      style: {
        background: "hsl(152 50% 18%)",
        color: "hsl(42 30% 96%)",
        border: "1px solid hsl(43 85% 50%)",
      },
    });

    setForm({ name: "", phone: "", city: "", address: "" });
    setQuantity(1);
    setSubmitting(false);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-background border-border max-w-md">
        <DialogHeader>
          <DialogTitle className="font-playfair text-xl text-foreground">
            آرڈر کریں
          </DialogTitle>
          <DialogDescription className="font-crimson text-muted-foreground">
            {product.name} — Rs. {product.price.toLocaleString()}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Quantity Selector */}
          <div>
            <Label className="font-crimson text-foreground">تعداد (Quantity)</Label>
            <div className="flex items-center gap-3 mt-1">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:bg-muted transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="font-playfair font-bold text-lg text-foreground w-12 text-center">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:bg-muted transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
              <span className="text-muted-foreground font-crimson ml-auto">
                Total: <strong className="text-foreground">Rs. {totalPrice.toLocaleString()}</strong>
              </span>
            </div>
          </div>

          <div>
            <Label className="font-crimson text-foreground">پورا نام (Full Name) *</Label>
            <Input
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="آپ کا پورا نام"
              className="mt-1 font-crimson"
              maxLength={100}
            />
          </div>
          <div>
            <Label className="font-crimson text-foreground">فون نمبر (Phone) *</Label>
            <Input
              value={form.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              placeholder="03XX XXXXXXX"
              className="mt-1 font-crimson"
              maxLength={15}
            />
          </div>
          <div>
            <Label className="font-crimson text-foreground">شہر (City) *</Label>
            <Input
              value={form.city}
              onChange={(e) => handleChange("city", e.target.value)}
              placeholder="آپ کا شہر"
              className="mt-1 font-crimson"
              maxLength={50}
            />
          </div>
          <div>
            <Label className="font-crimson text-foreground">مکمل پتہ (Address) *</Label>
            <Input
              value={form.address}
              onChange={(e) => handleChange("address", e.target.value)}
              placeholder="مکان نمبر، گلی، علاقہ"
              className="mt-1 font-crimson"
              maxLength={200}
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-gold hover:bg-gold-dark text-accent-foreground px-6 py-3.5 rounded-lg font-playfair font-bold text-lg transition-all duration-200 shadow-gold disabled:opacity-50"
          >
            {submitting ? "آرڈر بھیجا جا رہا ہے..." : "آرڈر جمع کریں"}
          </button>

          <p className="text-xs text-muted-foreground font-crimson text-center">
            آپ کا آرڈر WhatsApp اور Email پر تصدیق کے لیے بھیجا جائے گا
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default OrderForm;
