import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/923000000000?text=Hello%2C%20I%20am%20interested%20in%20your%20herbal%20products."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center whatsapp-pulse transition-all duration-200 hover:scale-110"
      style={{ backgroundColor: "hsl(142 70% 45%)", color: "hsl(0 0% 100%)" }}
      title="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};

export default WhatsAppButton;
