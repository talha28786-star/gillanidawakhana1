import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sliderHerbs from "@/assets/slider-herbs.jpg";
import sliderSaffron from "@/assets/slider-saffron.jpg";
import sliderApothecary from "@/assets/slider-apothecary.jpg";

const slides = [
  {
    id: 1,
    image: sliderHerbs,
    subtitle: "روایتی یونانی حکمت",
    title: "100% خالص اور آرگینک یونانی نسخے",
    description: "بہترین جڑی بوٹیوں اور ماہر حکیموں کے نسل در نسل نسخوں سے تیار۔",
    cta: "Explore Products",
    ctaLink: "/shop",
  },
  {
    id: 2,
    image: sliderSaffron,
    subtitle: "پریمیم زعفران کلیکشن",
    title: "معجون جوان — خالص زعفران کے ساتھ",
    description: "ہماری خاص معجون میں خالص زعفران کی طاقت کا تجربہ کریں۔",
    cta: "Shop Now",
    ctaLink: "/shop",
  },
  {
    id: 3,
    image: sliderApothecary,
    subtitle: "نسلوں سے قابلِ اعتماد",
    title: "Gillani Herb's — قدرتی جڑی بوٹیوں کا اعتماد",
    description: "آپ کی صحت ہماری میراث ہے۔ ہر پراڈکٹ خالص اور قدرتی اجزاء سے تیار کی جاتی ہے۔",
    cta: "Shop Now",
    ctaLink: "/shop",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const go = (index: number) => {
    if (animating) return;
    setAnimating(true);
    setCurrent(index);
    setTimeout(() => setAnimating(false), 800);
  };

  const prev = () => go((current - 1 + slides.length) % slides.length);
  const next = () => go((current + 1) % slides.length);

  useEffect(() => {
    const timer = setInterval(next, 2000);
    return () => clearInterval(timer);
  }, [current]);

  const slide = slides[current];

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background */}
      <div
        key={slide.id}
        className="absolute inset-0 slide-active"
        style={{
          backgroundImage: `url(${slide.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Ornate pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(43 85% 50% / 0.3) 0%, transparent 40%), radial-gradient(circle at 80% 50%, hsl(43 85% 50% / 0.2) 0%, transparent 40%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Subtitle */}
            <div className="flex items-center justify-center gap-3 mb-4 animate-fade-in-up">
              <div className="h-px w-12 bg-gold" />
              <span className="text-gold font-crimson text-lg tracking-widest uppercase">
                {slide.subtitle}
              </span>
              <div className="h-px w-12 bg-gold" />
            </div>

            {/* Title */}
            <h1 className="font-playfair font-bold text-cream text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 animate-fade-in-up">
              {slide.title}
            </h1>

            {/* Description */}
            <p className="text-cream/80 font-crimson text-xl leading-relaxed mb-8 animate-fade-in-up">
              {slide.description}
            </p>

            {/* CTA Button */}
            <div className="flex justify-center gap-4 animate-fade-in-up">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-accent-foreground px-10 py-4 rounded-lg font-playfair font-semibold text-lg transition-all duration-200 shadow-gold hover:shadow-lg hover:-translate-y-0.5"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* No arrow buttons - auto scroll only */}

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? "w-8 h-2.5 bg-gold"
                : "w-2.5 h-2.5 bg-cream/40 hover:bg-cream/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
