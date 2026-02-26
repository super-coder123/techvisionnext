"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Mr. Munir Quraishi",
    content:
      "I got my company registration completed smoothly by TechVision. The entire process was handled professionally and quickly. I highly recommend TechVision for reliable and efficient services.",
  },
  {
    name: "Mr. Suresh Kudadiya",
    content:
      "I’ve been working with TechVision for the past two years. Their team handles everything with accuracy and professionalism. Highly recommended for anyone looking for dependable tech services.",
  },
  {
    name: "Ajay Kumar",
    content:
      "When I started my venture, I wasn’t sure about the process. The TechVision team guided me throughout and made everything simple. Excellent support and experience.",
  },
  {
    name: "Mr. Mithun Kumar",
    content:
      "TechVision assisted me with complete documentation and compliance. The team is knowledgeable and very supportive. I truly appreciate their dedication.",
  },
  {
    name: "Mr. Avijeet Bose",
    content:
      "The TechVision team is polite, experienced, and efficient. They handled my requirements quickly and professionally. Highly recommended.",
  },
  {
    name: "Mr. Ashok Agarwal",
    content:
      "I approached TechVision online and have been using their services since. They deliver on time with 100% accuracy. Completely satisfied.",
  },
];


export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="relative py-32 bg-fixed bg-cover bg-center bg-no-repeat"
      style={{ 
        // Using a professional business/tech background from Unsplash
        backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000')` 
      }}
    >
      {/* Dark Overlay to make text readable */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">

        <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-white drop-shadow-md">
          What Our Customers Say
        </h2>

        <div className="relative overflow-hidden">
          {/* Slider Wrapper */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="min-w-full px-6"
              >
                {/* Glassmorphism Card */}
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-3xl shadow-2xl">
                  
                  <h3 className="text-2xl font-bold mb-6 text-white">
                    {item.name}
                  </h3>

                  <div className="flex justify-center mb-6">
                    <span className="text-6xl text-orange-400 font-serif leading-none">“</span>
                  </div>

                  <p className="text-gray-100 text-lg leading-relaxed italic">
                    {item.content}
                  </p>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                current === index
                  ? "w-10 bg-orange-500"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}