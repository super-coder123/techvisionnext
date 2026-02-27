"use client";

import React, { useState } from "react";
import { 
  ShieldCheck, User, Landmark, Building2, Car, 
  Cpu, ChevronRight, Zap, Search, Code2, 
  CheckCircle2, Globe, ArrowRight, Lock
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const verificationCategories = [
  {
    id: "identity",
    title: "Identity Verification",
    icon: User,
    color: "text-orange-500",
    bg: "bg-orange-50",
    items: [
      { name: "Digilocker E-Aadhaar", desc: "Securely fetch XML/PDF Aadhaar data via Digilocker." },
      { name: "Aadhaar eKYC", desc: "Real-time biometric or OTP based authentication." },
      { name: "PAN Basic/Plus", desc: "Verify PAN card details against NSDL records." },
      { name: "PAN-Aadhaar Linkage", desc: "Check if PAN and Aadhaar are successfully seeded." },
      { name: "DL Verification", desc: "Validate Driving License with Sarathi database." },
      { name: "VoterId Verification", desc: "Fetch electoral roll data for ID verification." },
      { name: "Passport Verification", desc: "Instant validation of Passport credentials." },
    ]
  },
  {
    id: "finance",
    title: "Banking & Finance",
    icon: Landmark,
    color: "text-blue-500",
    bg: "bg-blue-50",
    items: [
      { name: "Bank Account Verif.", desc: "Penny-drop validation to verify account ownership." },
      { name: "Bank Aadhaar Seeding", desc: "Check NPCI status for Aadhaar-Bank mapping." },
      { name: "UPI Verification", desc: "Verify VPA (UPI ID) and fetch account holder name." },
      { name: "Bank Statement Analyser", desc: "AI analysis of PDF statements for credit health." },
    ]
  },
  {
    id: "business",
    title: "Business & Compliance",
    icon: Building2,
    color: "text-emerald-500",
    bg: "bg-emerald-50",
    items: [
      { name: "GSTIN Basic/Adv", desc: "Verify GST status, address, and filing frequency." },
      { name: "DIN Verification", desc: "Validate Director Identification Number records." },
      { name: "PAN To GSTIN", desc: "Map PAN numbers to all associated GST entities." },
      { name: "FSSAI Verification", desc: "Verify Food Safety license validity and type." },
    ]
  },
  {
    id: "automotive",
    title: "Vehicle & Logistics",
    icon: Car,
    color: "text-blue-500",
    bg: "bg-blue-50",
    items: [
      { name: "Vehicle RC-Basic", desc: "Fetch essential vehicle registration data (Owner name, Model)." },
      { name: "Vehicle RC-Advanced", desc: "Get detailed specs including Hypothecation & Insurance info." },
      { name: "Vehicle RC Challan", desc: "Real-time check for pending traffic violations and court cases." },
    ]
  },
  {
    id: "ai",
    title: "Advanced AI & Security",
    icon: Cpu,
    color: "text-purple-500",
    bg: "bg-purple-50",
    items: [
      { name: "Aadhaar / PAN OCR", desc: "Extract text data from images with 99.9% accuracy." },
      { name: "Aadhaar Masking", desc: "Mask first 8 digits for RBI/UIDAI compliance." },
      { name: "Face Match", desc: "Compare live selfie against document photo." },
    ]
  }
];

export default function VerificationAPIPage() {
  const [activeTab, setActiveTab] = useState("identity");

  return (
    <div className="bg-white font-sans selection:bg-orange-100">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="bg-slate-900 pt-10 pb-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest mb-6">
                <Zap size={14} className="fill-orange-400" /> Latency: &lt; 200ms
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                One API. <br /><span className="text-orange-500">Total Trust.</span>
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed max-w-lg mb-8">
                The most comprehensive verification stack in India. 20+ endpoints, 99.9% uptime, and direct Govt. pipeline integration.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-bold transition-all flex items-center gap-2">
                  Start Integration <ArrowRight size={18} />
                </button>
                <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-2xl font-bold transition-all">
                  Documentation
                </button>
              </div>
            </div>
            {/* Live Code Preview Mockup */}
            <div className="hidden lg:block bg-slate-800 rounded-3xl p-1 border border-white/10 shadow-2xl">
              <div className="bg-slate-900 rounded-[1.4rem] p-6 font-mono text-sm">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                </div>
                <p className="text-blue-400">POST <span className="text-emerald-400">/v1/verify/aadhaar</span></p>
                <div className="mt-4 text-slate-300">
                  <p>{"{"}</p>
                  <p className="pl-4">"aadhaar_number": <span className="text-orange-400">"xxxx-xxxx-xxxx"</span>,</p>
                  <p className="pl-4">"consent": <span className="text-orange-400">true</span>,</p>
                  <p className="pl-4">"otp": <span className="text-orange-400">"123456"</span></p>
                  <p>{"}"}</p>
                </div>
                <div className="mt-6 pt-6 border-t border-white/5">
                  <p className="text-slate-500">// Response</p>
                  <p className="text-emerald-400">200 OK - Verified</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- DYNAMIC CATALOG SECTION --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Navigation Sidebar */}
          <aside className="lg:w-1/4">
            <div className="sticky top-24 space-y-2">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-4 mb-4">Service Groups</p>
              {verificationCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`w-full flex items-center gap-4 p-4 rounded-2xl font-bold transition-all ${
                    activeTab === cat.id 
                    ? "bg-orange-50 text-orange-600 shadow-sm" 
                    : "text-slate-500 hover:bg-slate-50"
                  }`}
                >
                  <cat.icon size={20} />
                  {cat.title}
                </button>
              ))}
              
              <div className="mt-12 p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
                <Lock className="text-orange-500 mb-4" size={24} />
                <h5 className="font-bold text-slate-900 mb-2">Security First</h5>
                <p className="text-xs text-slate-500 leading-relaxed">
                  All data is encrypted via AES-256 and processed through ISO 27001 certified environments.
                </p>
              </div>
            </div>
          </aside>

          {/* Main Grid */}
          <div className="lg:w-3/4">
            {verificationCategories.map((cat) => (
              <div key={cat.id} className={activeTab === cat.id ? "block animate-slide-up" : "hidden"}>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-slate-900">{cat.title}</h2>
                  <div className="flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-xs font-bold">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span> Operational
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {cat.items.map((item, i) => (
                    <div 
                      key={i} 
                      className="group bg-white border border-slate-100 p-8 rounded-[2.5rem] hover:border-orange-200 hover:shadow-2xl hover:shadow-orange-500/5 transition-all duration-500"
                    >
                      <div className={`w-12 h-12 ${cat.bg} ${cat.color} rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                        <CheckCircle2 size={24} />
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">{item.name}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed mb-6">
                        {item.desc}
                      </p>
                      <div className="flex items-center gap-4 pt-2 border-t border-slate-50">
                         <span className="text-[10px] font-black text-slate-400 uppercase">API Endpoint</span>
                         <div className="h-1 flex-1 bg-slate-50 rounded-full overflow-hidden">
                            <div className="h-full bg-orange-500 w-1/3 group-hover:w-full transition-all duration-1000"></div>
                         </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- STATS BAR --- */}
      <section className="bg-slate-50 py-12 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Successful Hits", val: "500M+" },
            { label: "Avg Response", val: "180ms" },
            { label: "Uptime", val: "99.99%" },
            { label: "Partners", val: "2500+" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl font-black text-slate-900">{stat.val}</p>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-tighter">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}