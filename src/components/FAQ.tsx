import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    q: "What is Majoon-E-Jawan?",
    a: "Majoon-E-Jawan is a traditional Unani herbal formulation made with premium saffron (Zafraan) and a blend of natural organic herbs. It is designed to support vitality, strength, and overall wellness using ancient herbal wisdom.",
  },
  {
    q: "Are your products 100% organic and chemical-free?",
    a: "Yes. All products at Gillani Dawakhana are formulated using 100% natural, organic ingredients. We do not use artificial preservatives, synthetic colors, or chemical additives. Our formulations follow classical Unani standards.",
  },
  {
    q: "How should I take Majoon-E-Jawan?",
    a: "The recommended dosage is 1-2 teaspoons (5-10g) once or twice daily, preferably with warm milk or as directed by a qualified herbalist. For personalized guidance, contact our expert herbalist via WhatsApp.",
  },
  {
    q: "Do you offer Cash on Delivery?",
    a: "Yes, we offer Cash on Delivery (COD) across Pakistan. We also accept online bank transfers and EasyPaisa/JazzCash for your convenience.",
  },
  {
    q: "How long does delivery take?",
    a: "Orders are typically delivered within 2-5 working days across Pakistan. Express delivery options are available for major cities.",
  },
  {
    q: "Can I return a product if I'm not satisfied?",
    a: "We stand behind the quality of our products. If you receive a damaged or incorrect item, please contact us within 48 hours of delivery and we will arrange a replacement.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="divider-ornament mb-4">
            <span className="text-gold font-crimson text-base tracking-widest uppercase">
              Help Center
            </span>
          </div>
          <h2 className="font-playfair font-bold text-4xl text-foreground mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-card rounded-xl border border-border overflow-hidden shadow-card transition-shadow hover:shadow-elegant"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left font-playfair font-semibold text-foreground hover:text-forest transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span>{faq.q}</span>
                {openIndex === i ? (
                  <ChevronUp className="w-5 h-5 text-gold flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gold flex-shrink-0" />
                )}
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 text-muted-foreground font-crimson text-base leading-relaxed border-t border-border/50 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
