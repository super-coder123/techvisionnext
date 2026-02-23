"use client";

import Image from "next/image";

const processSteps = [
  {
    title: "Request a Quote",
    desc: "Fill out our consultation form. Our specialists will provide personalized advice for your legal needs.",
    icon: "/process/work-1.png",
  },
  {
    title: "Document Submission",
    desc: "Submit the necessary documents through our secure portal for swift and accurate legal processing.",
    icon: "/process/work-2.png",
  },
  {
    title: "Payment Processing",
    desc: "Experience seamless and secure payments through our reliable gateway for hassle-free transactions.",
    icon: "/process/work-3.png",
  },
  {
    title: "Receive your Work",
    desc: "Our team ensures timely completion and delivers legal documents as per deadlines.",
    icon: "/process/work-4.png",
  },
];

export default function WorkingProcess() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2
          id="Work"
          className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900"
        >
          Working Process
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto mb-16 text-lg">
          Seeking legal help is a breeze with VakilKaro. Just a few clicks
          stand between you and expert guidance. Your solution is just a click away!
        </p>

        {/* Process Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {processSteps.map((step, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-sm 
                         hover:shadow-2xl hover:-translate-y-3
                         transition-all duration-300
                         flex flex-col"
            >
              {/* Icon */}
              <div className="mb-6 flex justify-center text-gray-900">
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h5 className="text-xl font-bold mb-4 text-gray-900">
                {step.title}
              </h5>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                {step.desc}
              </p>

              {/* Animated Underline */}
              <div className="h-1 w-0 bg-gradient-to-r from-blue-500 to-indigo-500 
                              group-hover:w-full transition-all duration-500 rounded-full">
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}