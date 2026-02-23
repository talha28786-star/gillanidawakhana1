import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import sliderHerbs from "@/assets/slider-herbs.jpg";
import sliderSaffron from "@/assets/slider-saffron.jpg";
import sliderApothecary from "@/assets/slider-apothecary.jpg";

const slides = [
  {
    id: 1,
    image: sliderHerbs,
    subtitle: "Traditional Unani Wisdom",
    title: "100% Pure & Organic Unani Formulations",
    description: "Crafted with the finest herbs and time-honored recipes passed down through generations of expert herbalists.",
    cta: "Explore Products",
    ctaLink: "/shop",
  },
  {
    id: 2,
    image: sliderSaffron,
    subtitle: "Premium Zafraan Collection",
    title: "Majoon-E-Jawan — With Premium Zafraan",
    description: "Experience the power of pure saffron infused in our signature Majoon formulation for vitality and strength.",
    cta: "Shop Now",
    ctaLink: "/shop",
  },
  {
    id: 3,
    image: sliderApothecary,
    subtitle: "Trusted Since Generations",
    title: "Trusted Herbal Remedies from Gillani Herb's",
    description: "Your health is our heritage. Every product crafted with integrity, purity, and the ancient art of Unani medicine.",
    cta: "Learn More",
    ctaLink: "/about",
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
    const timer = setInterval(next, 6000);
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

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-forest/60 border border-gold/40 flex items-center justify-center text-gold hover:bg-forest hover:border-gold transition-all"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-forest/60 border border-gold/40 flex items-center justify-center text-gold hover:bg-forest hover:border-gold transition-all"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

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
