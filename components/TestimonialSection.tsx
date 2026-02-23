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
    <section className="py-24 bg-gray-50 text-gray-900">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-extrabold mb-16">
          What Our Customers Say
        </h2>

        <div className="relative overflow-hidden">

          {/* Slider Wrapper */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="min-w-full px-6"
              >
                <div className="bg-white p-10 rounded-2xl shadow-xl">

                  <h3 className="text-xl font-semibold mb-6">
                    {item.name}
                  </h3>

                  <div className="flex justify-center mb-6">
                    <Image
                      src="/comma.png"
                      alt="Quote"
                      width={40}
                      height={40}
                    />
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    {item.content}
                  </p>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition ${
                current === index
                  ? "bg-black scale-125"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}