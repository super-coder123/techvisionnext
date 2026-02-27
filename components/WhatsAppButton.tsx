"use client";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "919031675840"; 
  const message = "Hello TechVision! I'm interested in your services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-center">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group animate-shaky"
        aria-label="Contact us on WhatsApp"
      >
        {/* Tooltip */}
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-bold px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
          Need Help? Chat with us
        </span>

        {/* Ping Animation */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25"></span>

        {/* Main Button */}
        <div className="relative bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-[0_15px_30px_-5px_rgba(37,211,102,0.4)] transition-all duration-300 transform group-hover:scale-110 flex items-center justify-center">
          <MessageCircle size={28} className="fill-current" />
        </div>
      </a>

      {/* Ground Shadow - This stays relatively still while the icon shakes above it */}
      <div className="w-6 h-1 bg-slate-900/10 blur-sm rounded-full mt-2 animate-pulse" />
    </div>
  );
}