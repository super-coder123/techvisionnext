"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const heroSlides = [
  {
    img: "/hero/photo-1.jpg",
    title: "Har Legal Kaam,",
    highlight: " Ab Smart Tareeke Se.",
    desc: "Business Registration, Trademark, Taxation & Legal Compliance services in just a few clicks."
  },
  {
    img: "/hero/photo-2.jpg", // Suggested: Use an image of a developer or laptop
    title: "Empowering Your Digital Growth",
    highlight: "with TechVision IT",
    desc: "From Website Development to Custom Mobile Apps, we turn your business ideas into scalable digital products."
  },
  {
    img: "/hero/photo-3.jpg",
    title: "Scale your business",
    highlight: "with expert guidance",
    desc: "Focus on your growth while we handle your GST, Audits, and complex ROC compliances."
  },
  {
    img: "/hero/photo-4.jpg", // Suggested: Use an image of e-commerce/retail
    title: "E-commerce & UI/UX",
    highlight: "Designed for Growth",
    desc: "Launch your online store with high-performance E-commerce solutions and world-class user interfaces."
  },
  {
    img: "/hero/photo-5.jpg",
    title: "Your virtual CA",
    highlight: "available 24/7",
    desc: "Reliable taxation and legal support trusted by over 50,000+ founders across India."
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // Slightly slower to allow users to read IT services
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      
      {/* Background Images */}
      {heroSlides.map((slide, index) => (
        <Image
          key={index}
          src={slide.img}
          alt="Tech and Legal Services"
          fill
          className={`object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          priority={index === 0}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE TEXT (Animated) */}
          <div className="text-white relative h-[350px] flex flex-col justify-center">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 transform ${
                  index === current 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-10 pointer-events-none"
                }`}
              >
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  {slide.title} <br />
                  <span className="text-orange-500">
                    {slide.highlight}
                  </span>
                </h1>

                <p className="mt-6 text-lg text-gray-200 max-w-xl">
                  {slide.desc}
                </p>

                <div className="mt-8 flex gap-4">
                  <button className="bg-orange-500 px-6 py-3 rounded-lg hover:bg-orange-600 transition font-medium">
                    Get Started
                  </button>
                  <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition font-medium">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE FORM (KEPT EXACTLY THE SAME) */}
          <div
            className={`rounded-2xl shadow-2xl p-8 transition-all duration-500 transform
            ${
              isFocused
                ? "bg-white/10 backdrop-blur-lg border border-white/20 scale-100"
                : "bg-white/10 backdrop-blur-lg border border-white/20 scale-100"
            }`}
          >
            <h2 className="text-2xl font-bold mb-4 transition-colors duration-300 text-white">
              Get a Free Consultation
            </h2>

            <form
              method="POST"
              action=""
              target=""
              className="space-y-4"
            >
              <input
                type="text"
                name="SingleLine"
                placeholder="Full Name"
                required
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="w-full bg-white/10 text-white border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              <input
                type="tel"
                name="PhoneNumber_countrycode"
                placeholder="Mobile Number"
                required
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="w-full bg-white/10 text-white border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              <input
                type="email"
                name="Email"
                placeholder="Email Address"
                required
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="w-full bg-white/10 text-white border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              <select
                name="Dropdown"
                required
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="w-full bg-white/10 text-white border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="" className="text-gray-900">Select State</option>
                <option className="text-gray-900">Bihar</option>
                <option className="text-gray-900">Maharashtra</option>
                <option className="text-gray-900">Delhi</option>
                <option className="text-gray-900">Karnataka</option>
                <option className="text-gray-900">Uttar Pradesh</option>
              </select>

              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition font-semibold"
              >
                Get a Detailed Quotation
              </button>

              <p className={`text-sm text-center mt-3 transition-colors duration-300 ${
                  isFocused ? "text-gray-500" : "text-gray-200"
                }`}
              >
                Trusted by 50,000+ Founders Across India
              </p>

              <iframe name="" style={{ display: "none" }} />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}