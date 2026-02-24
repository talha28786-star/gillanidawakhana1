import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    q: "معجون جوان کیا ہے؟",
    a: "معجون جوان ایک روایتی یونانی جڑی بوٹیوں کا نسخہ ہے جو خالص زعفران اور قدرتی آرگینک جڑی بوٹیوں سے تیار کیا جاتا ہے۔ یہ طاقت، توانائی اور مجموعی صحت کے لیے بنایا گیا ہے۔",
  },
  {
    q: "کیا آپ کی مصنوعات 100% آرگینک ہیں؟",
    a: "جی ہاں۔ Gillani Herb's کی تمام مصنوعات 100% قدرتی اور آرگینک اجزاء سے بنائی جاتی ہیں۔ ہم کوئی مصنوعی رنگ، کیمیکل یا preservatives استعمال نہیں کرتے۔",
  },
  {
    q: "معجون جوان کیسے استعمال کریں؟",
    a: "روزانہ 1-2 چمچ (5-10 گرام) گرم دودھ کے ساتھ لیں۔ مزید رہنمائی کے لیے ہمارے ماہر حکیم سے WhatsApp پر رابطہ کریں۔",
  },
  {
    q: "کیا کیش آن ڈلیوری دستیاب ہے؟",
    a: "جی ہاں، پورے پاکستان میں کیش آن ڈلیوری (COD) دستیاب ہے۔ آن لائن بینک ٹرانسفر اور EasyPaisa/JazzCash بھی قبول ہے۔",
  },
  {
    q: "ڈلیوری میں کتنا وقت لگتا ہے؟",
    a: "آرڈر عام طور پر 2-5 کام کے دنوں میں پورے پاکستان میں ڈلیور ہو جاتے ہیں۔ بڑے شہروں کے لیے ایکسپریس ڈلیوری بھی دستیاب ہے۔",
  },
  {
    q: "کیا واپسی ممکن ہے؟",
    a: "اگر آپ کو خراب یا غلط پراڈکٹ ملے تو ڈلیوری کے 48 گھنٹوں کے اندر ہم سے رابطہ کریں اور ہم فوری تبدیلی کا بندوبست کریں گے۔",
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
              مدد
            </span>
          </div>
          <h2 className="font-playfair font-bold text-4xl text-foreground mb-4">
            اکثر پوچھے جانے والے سوالات
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
                dir="rtl"
              >
                <span>{faq.q}</span>
                {openIndex === i ? (
                  <ChevronUp className="w-5 h-5 text-gold flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gold flex-shrink-0" />
                )}
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 text-muted-foreground font-crimson text-base leading-relaxed border-t border-border/50 pt-4" dir="rtl">
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
