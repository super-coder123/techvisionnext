"use client";

import { Phone, MessageCircle } from "lucide-react";

const features = [
  {
    title: "LARGEST NETWORK",
    desc: "Our strong network gives you more strength to solve all queries and meet with relevant professionals.",
    icon: "🌐",
  },
  {
    title: "PROFESSIONAL TEAM",
    desc: "We have 100+ Legal & Professional Experts engaged with us to cater better advice.",
    icon: "👨‍⚖️",
  },
  {
    title: "BEST PRICE GUARANTEE",
    desc: "We guarantee you'll get top-notch comfort at an affordable price.",
    icon: "💰",
  },
  {
    title: "24/7 SUPPORT",
    desc: "Our WhatsApp group strategy enables you to update anytime.",
    icon: "📞",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-gray-900">
          Why TechVision?
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT COLUMN */}
          <div>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Choose Vakilkaro for unparalleled legal expertise and personalized
              service, ensuring your business navigates the legal landscape with
              confidence and success.
            </p>

            {/* Contact Box */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-md border border-gray-100 text-gray-900">
              <h5 className="text-2xl font-bold mb-2">
                Have any question about us?
              </h5>
              <p className="text-gray-600 mb-6">
                Don't hesitate to contact us.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+919828123489"
                  target="_blank"
                  className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition"
                >
                  <Phone size={18} />
                  CALL US
                </a>

                <a
                  href="https://wa.me/9166901305"
                  target="_blank"
                  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition"
                >
                  <MessageCircle size={18} />
                  WHATSAPP
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="grid sm:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300"
              >
                <div className="text-4xl mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}