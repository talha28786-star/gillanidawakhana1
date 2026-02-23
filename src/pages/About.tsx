import sliderApothecary from "@/assets/slider-apothecary.jpg";
import { Leaf, Award, Heart, Users } from "lucide-react";

const stats = [
  { icon: Users, value: "10,000+", label: "Happy Customers" },
  { icon: Award, value: "20+ Years", label: "Herbal Experience" },
  { icon: Leaf, value: "100%", label: "Organic Ingredients" },
  { icon: Heart, value: "50+", label: "Unani Formulas" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background pt-24">
      {/* Header */}
      <div className="bg-forest py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="divider-ornament mb-3">
            <span className="text-gold font-crimson text-sm tracking-widest uppercase">Our Heritage</span>
          </div>
          <h1 className="font-playfair font-bold text-4xl text-cream mb-3">About Us</h1>
          <p className="text-cream/70 font-crimson text-lg max-w-xl mx-auto">
            A legacy of pure Unani medicine rooted in tradition and trust
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden border-2 border-gold/30 shadow-elegant">
              <img
                src={sliderApothecary}
                alt="Gillani Herb's traditional apothecary"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-gold" />
                <span className="text-gold font-crimson text-base tracking-widest uppercase">
                  Our Story
                </span>
              </div>
              <h2 className="font-playfair font-bold text-4xl text-foreground mb-2">
                Gillani Herb's
              </h2>
              <p className="text-gold font-crimson text-xl italic mb-6">
                Trusted Unani Herbalists Since Decades
              </p>
              <div className="h-0.5 w-20 bg-gold mb-6" />
              <div className="space-y-4 text-muted-foreground font-crimson text-lg leading-relaxed">
                <p>
                  Gillani Herb's was founded with a single mission: to bring the ancient healing wisdom 
                  of Unani medicine to every household in Pakistan. Our expert herbalist has spent over 
                  two decades mastering the art of classical Unani formulation.
                </p>
                <p>
                  We source our ingredients from certified organic farms across the subcontinent, 
                  ensuring every batch of our products meets the highest standards of purity. 
                  Our signature product, Majoon-E-Jawan with premium Zafraan, has earned the trust 
                  of thousands of families across Pakistan.
                </p>
                <p>
                  At Gillani Herb's, we believe that true health comes from nature. Every formula 
                  is prepared fresh, using traditional methods, in glass containers to preserve the 
                  potency of each precious ingredient — never with artificial preservatives or chemicals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-forest">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gold/20 border-2 border-gold/40 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-gold" />
                </div>
                <p className="font-playfair font-bold text-3xl text-gold mb-1">{value}</p>
                <p className="text-cream/70 font-crimson text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair font-bold text-4xl text-foreground mb-4">Our Commitment</h2>
            <div className="h-0.5 w-24 bg-gold mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Pure & Authentic",
                desc: "Every ingredient is carefully sourced and verified for authenticity. We never compromise on purity for cost.",
              },
              {
                title: "Traditional Wisdom",
                desc: "Our formulas are rooted in classical Unani texts and refined by decades of practical herbalist experience.",
              },
              {
                title: "Customer Health",
                desc: "Your health and wellness is our primary concern. We stand behind every product we sell with complete confidence.",
              },
            ].map((v) => (
              <div key={v.title} className="bg-card rounded-xl p-8 border border-border shadow-card text-center">
                <div className="w-14 h-14 rounded-full bg-gold/15 border-2 border-gold/30 flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-playfair font-bold text-xl text-foreground mb-3">{v.title}</h3>
                <p className="text-muted-foreground font-crimson leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
