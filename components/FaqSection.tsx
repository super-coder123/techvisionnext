"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "01 What is TechVision?",
    answer:
      "TechVision is a comprehensive technology and digital solutions platform offering expert consulting, software development, IT services, and strategic guidance for businesses and individuals.",
  },
  {
    question: "02 What services does TechVision provide?",
    answer:
      "TechVision provides software development, web and mobile app development, IT consulting, cloud solutions, cybersecurity services, and digital transformation support.",
  },
  {
    question: "03 How do I book a consultation?",
    answer:
      "You can fill out the online form on our website or contact us directly via phone or email to schedule a consultation at your convenience.",
  },
  {
    question: "04 Are services available online?",
    answer:
      "Yes, TechVision offers remote consultations, online support, and digital services for clients across different locations.",
  },
  {
    question: "05 How is confidentiality maintained?",
    answer:
      "At TechVision, client confidentiality is a top priority. We follow strict security protocols and use secure communication channels to protect your data.",
  },
  {
    question: "06 What industries does TechVision specialize in?",
    answer:
      "TechVision works across multiple industries including startups, fintech, healthcare, e-commerce, and enterprise technology solutions.",
  },
  {
    question: "07 Can TechVision help startups?",
    answer:
      "Absolutely. TechVision supports startups with product development, MVP creation, cloud setup, scalability planning, and ongoing technical support.",
  },
  {
    question: "08 How does pricing work?",
    answer:
      "We offer transparent pricing models including project-based pricing, hourly rates, and customized service packages depending on your requirements.",
  },
  {
    question: "09 How quickly can I get assistance?",
    answer:
      "TechVision aims to respond within 24 hours and can often schedule consultations within a few business days depending on availability.",
  },
  {
    question: "10 Why choose TechVision?",
    answer:
      "TechVision combines innovation, expertise, and personalized service to deliver scalable and future-ready technology solutions tailored to your needs.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 4);

  return (
    <section className="py-20 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
              Your Questions, Answered
            </h2>

            <Image
              src="/faq.png"
              alt="FAQ Illustration"
              width={500}
              height={500}
              className="rounded-xl"
            />
          </div>

          {/* RIGHT SIDE */}
          <div  className={`space-y-5 pr-3 transition-all duration-300 ${
                showAll
                  ? "max-h-[500px] overflow-y-auto"
                  : ""
              }`}>
            {visibleFaqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                  className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold text-lg hover:bg-gray-50 transition"
                >
                  {faq.question}
                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`px-6 transition-all duration-300 overflow-hidden ${
                    activeIndex === index
                      ? "max-h-40 pb-5"
                      : "max-h-0"
                  }`}
                >
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              </div>
            ))}

            <button
              onClick={() => setShowAll(!showAll)}
              className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
            >
              {showAll ? "See Less" : "See More"}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}