import { useState } from "react";
import { Phone, MapPin, Mail, MessageCircle, Clock } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background pt-24">
      {/* Header */}
      <div className="bg-forest py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="divider-ornament mb-3">
            <span className="text-gold font-crimson text-sm tracking-widest uppercase">Get In Touch</span>
          </div>
          <h1 className="font-playfair font-bold text-4xl text-cream mb-3">Contact Us</h1>
          <p className="text-cream/70 font-crimson text-lg">
            We're here to help with your herbal wellness journey
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-playfair font-bold text-3xl text-foreground mb-2">
                Reach Out to Us
              </h2>
              <div className="h-0.5 w-16 bg-gold mb-6" />
              <p className="text-muted-foreground font-crimson text-lg leading-relaxed mb-8">
                Whether you have questions about our products, need dosage guidance from our expert herbalist, 
                or want to place a custom order — we're just a message away.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    title: "Phone / WhatsApp",
                    info: "+92 300 000 0000",
                    sub: "Available 9am – 9pm daily",
                  },
                  {
                    icon: MapPin,
                    title: "Store Location",
                    info: "Main Bazaar, Gillani Chowk",
                    sub: "City, Pakistan",
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    info: "info@gillanidawakhana.com",
                    sub: "Response within 24 hours",
                  },
                  {
                    icon: Clock,
                    title: "Business Hours",
                    info: "Mon – Sat: 9am to 9pm",
                    sub: "Sunday: 10am to 6pm",
                  },
                ].map(({ icon: Icon, title, info, sub }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold/15 border-2 border-gold/30 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-playfair font-semibold text-foreground">{title}</p>
                      <p className="text-muted-foreground font-crimson">{info}</p>
                      <p className="text-muted-foreground font-crimson text-sm">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/923000000000?text=Assalam%20o%20Alaikum%2C%20I%20would%20like%20to%20inquire%20about%20your%20products."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 px-6 py-3.5 rounded-xl font-playfair font-semibold transition-all duration-200 shadow-lg"
                style={{ backgroundColor: "hsl(142 70% 40%)", color: "hsl(0 0% 100%)" }}
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-2xl border border-border shadow-elegant p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="font-playfair font-bold text-2xl text-foreground mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground font-crimson text-lg">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="font-playfair font-bold text-2xl text-foreground mb-6">
                    Send a Message
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {[
                      { label: "Your Name", key: "name", type: "text", placeholder: "Muhammad Ali" },
                      { label: "Phone Number", key: "phone", type: "tel", placeholder: "+92 300 000 0000" },
                      { label: "Email Address", key: "email", type: "email", placeholder: "your@email.com" },
                    ].map(({ label, key, type, placeholder }) => (
                      <div key={key}>
                        <label className="block font-playfair text-sm font-semibold text-foreground mb-2">
                          {label}
                        </label>
                        <input
                          type={type}
                          placeholder={placeholder}
                          value={form[key as keyof typeof form]}
                          onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background font-crimson text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                          required
                        />
                      </div>
                    ))}
                    <div>
                      <label className="block font-playfair text-sm font-semibold text-foreground mb-2">
                        Your Message
                      </label>
                      <textarea
                        placeholder="Tell us about your inquiry or order..."
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background font-crimson text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors resize-none"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gold hover:bg-gold-dark text-accent-foreground py-3.5 rounded-lg font-playfair font-semibold transition-all duration-200 shadow-gold hover:-translate-y-0.5"
                    >
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
