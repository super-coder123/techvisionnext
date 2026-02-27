"use client";

import { Phone, MessageCircle, Globe, Users, ShieldCheck, Zap, Server, Settings2, ChevronRight, Activity } from "lucide-react";

const features = [
  {
    title: "Dedicated Infrastructure",
    desc: "Enterprise-grade private servers ensuring 99.9% uptime for your sensitive documents and data.",
    icon: Server,
    color: "text-blue-600",
  },
  {
    title: "Customized Workflows",
    desc: "Modular service structures that adapt to your specific business size and regulatory needs.",
    icon: Settings2,
    color: "text-slate-600",
  },
  {
    title: "100+ Expert Panel",
    desc: "A multidisciplinary team of legal, tax, and IT professionals at your immediate disposal.",
    icon: Users,
    color: "text-blue-600",
  },
  {
    title: "Global Compliance",
    desc: "A vast network capable of handling cross-border regulatory queries and multi-state filings.",
    icon: Globe,
    color: "text-slate-600",
  },
  {
    title: "Price Assurance",
    desc: "Fixed-rate professional fees with no hidden costs, providing institutional quality at scale.",
    icon: ShieldCheck,
    color: "text-blue-600",
  },
  {
    title: "Real-time Ops",
    desc: "Dedicated WhatsApp communication channels for instant project updates and 24/7 support.",
    icon: Zap,
    color: "text-slate-600",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">
              The TechVision Advantage
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Why leading enterprises <br /> trust our platform.
            </h3>
          </div>
          <div className="flex items-center gap-3 bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
            <Activity size={16} className="text-emerald-500 animate-pulse-subtle" />
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
              Server Status: 99.9% Operational
            </span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Feature Cards Grid (8/12 columns) */}
          <div className="lg:col-span-8 grid md:grid-cols-2 gap-x-8 gap-y-12">
            {features.map((feature, index) => (
              <div key={index} className="group border-l-2 border-transparent hover:border-blue-600 pl-6 transition-all duration-300">
                <div className="mb-4">
                  <feature.icon className={`${feature.color}`} size={28} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Contact & CTA Column (4/12 columns) */}
          <div className="lg:col-span-4">
            <div className="bg-slate-900 rounded-lg p-8 text-white sticky top-24">
              <h4 className="text-2xl font-bold mb-4">Ready to scale?</h4>
              <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                Connect with our deployment team to discuss dedicated server setup and custom compliance mapping for your organization.
              </p>
              
              <div className="space-y-4">
                <a 
                  href="tel:+919031675840"
                  className="flex items-center justify-between w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded transition-colors group"
                >
                  <span className="flex items-center gap-3">
                    <Phone size={18} /> Call Consultation
                  </span>
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>

                <a 
                  href="https://wa.me/9031675840"
                  className="flex items-center justify-between w-full bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-6 rounded transition-colors group border border-white/10"
                >
                  <span className="flex items-center gap-3">
                    <MessageCircle size={18} /> WhatsApp Support
                  </span>
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-4">Trusted Support</p>
                <div className="flex gap-4">
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-[95%]"></div>
                  </div>
                </div>
                <p className="text-[10px] text-slate-500 mt-2">Client Satisfaction Rate: 98%</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}