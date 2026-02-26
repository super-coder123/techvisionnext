"use client";

import { Phone, Mail } from "lucide-react";

export default function ConsultationSection() {
  return (
    <section className="bg-cyan-50 border-y-2 border-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE – FORM */}
          <div className="bg-white p-10 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-2 text-gray-900">
              Need Help?
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Fill the Form Below
            </p>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Enter Your Name"
                required
                className="w-full border  text-gray-900 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />

              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full  text-gray-900 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                required
                className="w-full  text-gray-900 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />

              <input
                type="text"
                placeholder="Your Location"
                required
                className="w-full   text-gray-900 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />

              <button
                type="submit"
                className="w-full bg-black text-white font-semibold py-3 rounded-lg hover:bg-gray-800 transition duration-300"
              >
                Request A Callback
              </button>
            </form>
          </div>

          {/* RIGHT SIDE – INFO */}
          <div className="space-y-8">
            <h2 className="text-4xl font-extrabold leading-snug text-gray-900">
              Book a Consultation and Connect With Our Expert Legal Advisors
            </h2>

            <p className="text-gray-700 font-medium text-lg">
              We are one step away—just call us or fill out the enquiry form,
              and one of our representatives will contact you shortly.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 text-lg  text-gray-900 font-semibold">
                <Phone className="text-blue-600" size={22} />
                +91 9031675840
              </div>

              <div className="flex items-center gap-4 text-lg  text-gray-900 font-semibold">
                <Mail className="text-green-600" size={22} />
                help@techvision.co.in
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}