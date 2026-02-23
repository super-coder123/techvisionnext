"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/hero/photo-1.jpg",
  "/hero/photo-2.jpg",
  "/hero/photo-3.jpg",
  "/hero/photo-4.jpg",
  "/hero/photo-5.jpg",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      
      {/* Background Images */}
      {images.map((img, index) => (
        <Image
          key={index}
          src={img}
          alt="Legal Services"
          fill
          className={`object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          priority={index === 0}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE TEXT */}
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Legal mein kuch bhi karo <br />
              <span className="text-orange-500">
                toh TechVision karo
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-200 max-w-xl">
              Business Registration, Trademark, Taxation & Legal Compliance
              services in just a few clicks.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="bg-orange-500 px-6 py-3 rounded-lg hover:bg-orange-600 transition">
                Get Started
              </button>

              <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
                Learn More
              </button>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div
            className={`rounded-2xl shadow-2xl p-8 transition-all duration-500 transform
            ${
              isFocused
                ?
                //  "bg-white scale-105 ring-4 ring-orange-400/40"
                 "bg-white/10 backdrop-blur-lg border border-white/20 scale-100"
                : "bg-white/10 backdrop-blur-lg border border-white/20 scale-100"
            }`}
          >
            <h2
              className={`text-2xl font-bold mb-4 transition-colors duration-300 text-white`}
            >
              Get a Free Consultation
            </h2>

            <form
              method="POST"
              action="https://forms.zohopublic.in/safeledgerprivatelimited/form/PrivateLimitedAds2023V2/formperma/mCsWHxBXzkV5v5e4I4sT2w1I69sx05UPTBjqMaMmzPQ/htmlRecords/submit"
              target="zohoTarget"
              className="space-y-4"
            >
              <input
                type="text"
                name="SingleLine"
                placeholder="Full Name"
                required
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className={`w-full  text-white border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500`}
              />

              <input
                type="tel"
                name="PhoneNumber_countrycode"
                placeholder="Mobile Number"
                required
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className={`w-full  text-white border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500`}
              />

              <input
                type="email"
                name="Email"
                placeholder="Email Address"
                required
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
               className={`w-full  text-white border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500`}
              />

              <select
                name="Dropdown"
                required
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
               className={`w-full  text-white border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500`}
              >
                <option value="">Select State</option>
                <option className="text-gray-900" >Bihar</option>
                <option className="text-gray-900" >Maharashtra</option>
                <option className="text-gray-900" >Delhi</option>
                <option className="text-gray-900" >Karnataka</option>
                <option className="text-gray-900" >Uttar Pradesh</option>
              </select>

              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition font-semibold"
              >
                Get a Detailed Quotation
              </button>

              <p
                className={`text-sm text-center mt-3 transition-colors duration-300 ${
                  isFocused ? "text-gray-500" : "text-gray-200"
                }`}
              >
                Trusted by 50,000+ Founders Across India
              </p>

              <iframe name="zohoTarget" style={{ display: "none" }} />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}