import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Muhammad Arif Khan",
    location: "Lahore",
    review: "معجون جوان نے میری توانائی بالکل بدل دی۔ صرف 2 ہفتوں میں فرق محسوس ہوا۔ زعفران کا ذائقہ بالکل اصلی ہے!",
    rating: 5,
    product: "Majoon-E-Jawan",
  },
  {
    id: 2,
    name: "Haji Abdul Rauf",
    location: "Karachi",
    review: "میں برسوں سے یونانی ادویات استعمال کر رہا ہوں۔ Gillani Herb's کی خالص اور اصلی پراڈکٹس بہترین ہیں۔",
    rating: 5,
    product: "Saffron Vitality Syrup",
  },
  {
    id: 3,
    name: "Dr. Naseem Ahmad",
    location: "Islamabad",
    review: "بطور ڈاکٹر میں بہت کم جڑی بوٹیوں کی مصنوعات پر بھروسہ کرتا ہوں۔ Gillani Herb's کی معجون میں بھروسہ ہے۔",
    rating: 5,
    product: "Herbal Energy Majoon",
  },
  {
    id: 4,
    name: "Zainab Fatima",
    location: "Multan",
    review: "پیکنگ بہت شاندار ہے — شیشے کے جار۔ پراڈکٹ کا معیار ہر بار ایک جیسا ملا۔ بہت تجویز کرتی ہوں!",
    rating: 5,
    product: "Majoon-E-Jawan",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-forest">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="divider-ornament mb-4">
            <span className="text-gold font-crimson text-base tracking-widest uppercase">
              صارفین کی آراء
            </span>
          </div>
          <h2 className="font-playfair font-bold text-4xl text-cream mb-4">
            ہمارے صارفین کیا کہتے ہیں
          </h2>
          <p className="text-cream/70 font-crimson text-lg max-w-xl mx-auto">
            ہزاروں مطمئن صارفین Gillani Herb's پر اعتماد کرتے ہیں۔
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial-card bg-forest-light/40 rounded-xl p-6 relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-gold/20" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>

              <p className="text-cream/85 font-crimson text-base leading-relaxed mb-4 italic" dir="rtl">
                "{t.review}"
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-playfair font-semibold text-gold text-sm">{t.name}</p>
                  <p className="text-cream/60 text-xs font-crimson">{t.location}</p>
                </div>
                <span className="text-xs bg-gold/20 text-gold border border-gold/30 px-3 py-1 rounded-full font-crimson">
                  {t.product}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
