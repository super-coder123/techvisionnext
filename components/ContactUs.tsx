"use client";

import React, { useState } from "react";
import { 
  Mail, Phone, MapPin, Send, 
  MessageSquare, Clock, Globe, Linkedin, Facebook 
} from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Legal Consultancy",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., Formspree, Resend, or custom API)
    console.log("Form Submitted:", formData);
    alert("Thank you! Our experts will contact you shortly.");
  };

  return (
    <div className="bg-white min-h-screen text-slate-800">
      
      {/* 1. HEADER SECTION */}
      <section className="bg-slate-950 py-20 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Let's Start a <span className="text-orange-500">Conversation</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Whether you're starting a company or scaling your tech stack, our experts in 
            Muzaffarpur are ready to assist you.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 blur-[100px]"></div>
      </section>

      {/* 2. MAIN INTERACTIVE SECTION */}
      <section className="py-16 max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* LEFT: CONTACT INFO CARDS */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-xl">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <MessageSquare className="text-orange-600" /> Get in Touch
              </h3>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center shrink-0">
                    <Phone className="text-orange-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Call Us</h4>
                    <p className="text-slate-500 text-sm">+91 9031675840</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                    <Mail className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Email Us</h4>
                    <p className="text-slate-500 text-sm">support@techvisionnext.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="text-green-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Our Office</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      Rambagh Road Buddha Colony Musahri, Muzaffarpur,<br/> Bihar, India - 842001
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-slate-100 flex gap-4">
                <a href="https://www.linkedin.com/company/tech-vision-emitting-technology/" target="_blank" className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all"><Linkedin size={18}/></a>
                <a href="https://www.facebook.com/share/17bnZTPY6d/" target="_blank" className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all"><Facebook size={18}/></a>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-200">
               <h4 className="font-bold mb-4 flex items-center gap-2 text-slate-900">
                  <Clock size={18} className="text-orange-600" /> Office Hours
               </h4>
               <ul className="text-sm text-slate-600 space-y-2">
                  <li className="flex justify-between"><span>Mon - Fri:</span> <span>10:00 AM - 06:30 PM</span></li>
                  <li className="flex justify-between"><span>Saturday:</span> <span>10:00 AM - 02:00 PM</span></li>
                  <li className="flex justify-between text-red-500 font-medium"><span>Sunday:</span> <span>Closed</span></li>
               </ul>
            </div>
          </div>

          {/* RIGHT: THE FORM */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="John Doe"
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    required
                    placeholder="john@example.com"
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Interest Service</label>
                <select 
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-orange-500 outline-none transition-all appearance-none bg-slate-50"
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                >
                  <option>Legal Consultancy (GST/Company)</option>
                  <option>IT & Web Development</option>
                  <option>Digital Marketing</option>
                  <option>Cloud Infrastructure</option>
                  <option>Other / General Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">How can we help?</label>
                <textarea 
                  rows={5}
                  required
                  placeholder="Tell us about your project or legal query..."
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-orange-500 outline-none transition-all resize-none"
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold text-lg hover:bg-orange-600 transition-all flex items-center justify-center gap-2 group"
              >
                Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 3. GOOGLE MAPS PLACEHOLDER */}
      <section className="pb-24 max-w-7xl mx-auto px-6">
         <div className="w-full h-[400px] bg-slate-100 rounded-[3rem] border border-slate-200 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
            {/* Replace the iframe src with your actual Google Maps embed link */}
            <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57367.63229871576!2d85.34351656829486!3d26.11585640209668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed10e13936c533%3A0x6334a17387611593!2sMuzaffarpur%2C%20Bihar!5e0!3m2!1sen!2sin!4v1700000000000" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen 
               loading="lazy"
            ></iframe>
         </div>
      </section>
    </div>
  );
};

export default ContactUs;