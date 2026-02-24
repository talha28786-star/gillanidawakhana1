import { Link } from "react-router-dom";
import { Shield, Leaf, Award, Clock } from "lucide-react";
import majoonHero from "@/assets/majoon-product-1.jpg";

const features = [
  { icon: Leaf, title: "100% Natural", desc: "Pure organic ingredients sourced from trusted farms" },
  { icon: Shield, title: "Certified Safe", desc: "All products tested for purity and quality" },
  { icon: Award, title: "Expert Formula", desc: "Crafted by experienced Unani herbalists" },
  { icon: Clock, title: "Time-Honored", desc: "Traditional recipes perfected over generations" },
];

const HeroFeatures = () => {
  return (
    <>
      {/* Featured Hero Product */}
      <section className="bg-gradient-section py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gold/10 rounded-2xl blur-3xl" />
              <div className="relative rounded-2xl overflow-hidden border-2 border-gold/30 shadow-elegant">
                <img
                  src={majoonHero}
                  alt="Majoon-E-Jawan with Zafraan"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-forest border-2 border-gold text-cream rounded-xl px-5 py-3 shadow-green">
                <p className="font-playfair font-bold text-gold text-lg">Majoon-E-Jawan</p>
                <p className="text-cream/70 text-sm font-crimson">With Zafraan – Pure Organic</p>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-gold" />
                <span className="text-gold font-crimson text-base tracking-widest uppercase">
                  Signature Product
                </span>
              </div>
              <h2 className="font-playfair font-bold text-4xl md:text-5xl text-foreground mb-2 leading-tight">
                Majoon-E-Jawan
              </h2>
              <p className="text-gold font-crimson text-xl italic mb-6">
                With Zafraan (Pure Organic)
              </p>
              <div className="h-0.5 w-20 bg-gold mb-6" />
              <p className="text-muted-foreground font-crimson text-lg leading-relaxed mb-4">
                ہماری سب سے مشہور یونانی جڑی بوٹیوں کی معجون جو خالص زعفران اور قدرتی جڑی بوٹیوں سے تیار کی جاتی ہے۔ 
                معجون جوان طاقت، توانائی اور قدرتی صحت کے لیے بہترین ہے۔
              </p>
              <p className="text-muted-foreground font-crimson text-base leading-relaxed mb-8">
                ہر بیچ تازہ تیار کیا جاتا ہے — بغیر کسی کیمیکل یا مصنوعی اجزاء کے۔
              </p>

              {/* Features grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {features.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-gold" />
                    </div>
                    <div>
                      <p className="font-playfair font-semibold text-foreground text-sm">{title}</p>
                      <p className="text-muted-foreground text-xs font-crimson">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-accent-foreground px-8 py-3.5 rounded-lg font-playfair font-semibold transition-all duration-200 shadow-gold hover:-translate-y-0.5"
                >
                  ابھی خریدیں — Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroFeatures;
