import React from "react";
import { 
  Target, Lightbulb, ShieldCheck, Rocket, Award, 
  CheckCircle2, Users, Zap, Globe, Heart, 
  Code, Scale, Database, FileText, TrendingUp, Handshake
} from "lucide-react";

const AboutUs = () => {
  return (
    <div className="bg-white text-slate-800 font-sans">
      
      {/* 1. COMPACT HERO SECTION */}
      <section className="pt-24 pb-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <h1 className="text-5xl font-black text-slate-900 mb-6 leading-tight">
              One Agency. <br/>
              <span className="text-orange-600 underline decoration-4 underline-offset-8">Total Business Intelligence.</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              TechVision is a hybrid consultancy based in Muzaffarpur, Bihar. We bridge the gap 
              between professional legal compliance and advanced technical architecture. We 
              don't just consult; we build the legal and digital foundations for the next 
              generation of Indian startups.
            </p>
            <div className="flex gap-4">
               <div className="bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm flex items-center gap-2">
                  <CheckCircle2 className="text-green-500" size={18} />
                  <span className="text-sm font-bold">ISO Certified Standards</span>
               </div>
               <div className="bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm flex items-center gap-2">
                  <CheckCircle2 className="text-green-500" size={18} />
                  <span className="text-sm font-bold">Startup India Partner</span>
               </div>
            </div>
          </div>
          
          {/* STATS BENTO BOX */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="bg-slate-900 p-6 rounded-3xl text-white">
                <div className="text-3xl font-bold text-orange-500">100+</div>
                <div className="text-xs text-slate-400 uppercase tracking-widest mt-1">Clients</div>
            </div>
            <div className="bg-orange-600 p-6 rounded-3xl text-white">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-xs text-orange-100 uppercase tracking-widest mt-1">Filings Done</div>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-slate-200 col-span-2">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600"><TrendingUp size={24}/></div>
                    <div>
                        <div className="text-xl font-bold text-slate-900">98% Satisfaction</div>
                        <div className="text-sm text-slate-500">Based on annual client reviews</div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE DUAL CORE (The "Meat" of the content) */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter italic mb-2">Dual Expertise</h2>
            <p className="text-slate-500">Why choose two agencies when you can have one unified team?</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Legal Pillar */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 border-b-2 border-orange-500 pb-4">
                <Scale className="text-orange-600" size={32} />
                <h3 className="text-2xl font-black uppercase">Legal & Compliance</h3>
            </div>
            <p className="text-slate-600 leading-relaxed text-sm">Our legal cell consists of seasoned consultants specializing in Indian corporate law. We handle the paperwork so you can handle the product.</p>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-6 text-sm">
                <li className="flex items-center gap-2"><FileText size={16} className="text-orange-500"/> GST Registration</li>
                <li className="flex items-center gap-2"><FileText size={16} className="text-orange-500"/> MCA Filings</li>
                <li className="flex items-center gap-2"><FileText size={16} className="text-orange-500"/> Trademark Filing</li>
                <li className="flex items-center gap-2"><FileText size={16} className="text-orange-500"/> Tax Planning</li>
                <li className="flex items-center gap-2"><FileText size={16} className="text-orange-500"/> Partnership Deeds</li>
                <li className="flex items-center gap-2"><FileText size={16} className="text-orange-500"/> MSME/Udyam</li>
            </ul>
          </div>

          {/* IT Pillar */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 border-b-2 border-blue-600 pb-4">
                <Code className="text-blue-600" size={32} />
                <h3 className="text-2xl font-black uppercase">Technology & IT</h3>
            </div>
            <p className="text-slate-600 leading-relaxed text-sm">From MVPs to enterprise-grade software, our IT division builds scalable, secure, and modern digital solutions.</p>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-6 text-sm">
                <li className="flex items-center gap-2"><Database size={16} className="text-blue-600"/> Web Development</li>
                <li className="flex items-center gap-2"><Database size={16} className="text-blue-600"/> Cloud Hosting</li>
                <li className="flex items-center gap-2"><Database size={16} className="text-blue-600"/> UI/UX Design</li>
                <li className="flex items-center gap-2"><Database size={16} className="text-blue-600"/> App Development</li>
                <li className="flex items-center gap-2"><Database size={16} className="text-blue-600"/> Cybersecurity</li>
                <li className="flex items-center gap-2"><Database size={16} className="text-blue-600"/> ERP Solutions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. OUR STRATEGIC PROCESS (Adding more density) */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-black mb-12 text-center underline decoration-orange-500 underline-offset-8">How We Deliver</h2>
            <div className="grid md:grid-cols-4 gap-8">
                {[
                    { step: "01", title: "In-Depth Audit", desc: "We analyze your current legal and technical standing." },
                    { step: "02", title: "Custom Roadmap", desc: "A tailored strategy for incorporation and development." },
                    { step: "03", title: "Execution", desc: "Simultaneous handling of filings and software coding." },
                    { step: "04", title: "Scale-Up", desc: "Ongoing support for tax audits and technical updates." }
                ].map((item, i) => (
                    <div key={i} className="border-l border-slate-700 pl-6 space-y-4">
                        <div className="text-4xl font-black text-slate-800">{item.step}</div>
                        <h4 className="text-lg font-bold text-orange-500">{item.title}</h4>
                        <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* 4. WHY WE ARE DIFFERENT (Content-Rich Section) */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        <div className="bg-slate-50 p-8 rounded-3xl">
            <Zap className="text-orange-600 mb-6" size={32} />
            <h4 className="text-xl font-bold mb-4">Zero Communication Gap</h4>
            <p className="text-slate-600 text-sm">Since your legal and tech teams are in the same building, we ensure your tech stack is compliant with data laws (like GDPR or DPDP) from the first line of code.</p>
        </div>
        <div className="bg-slate-50 p-8 rounded-3xl">
            <Handshake className="text-blue-600 mb-6" size={32} />
            <h4 className="text-xl font-bold mb-4">Transparent Pricing</h4>
            <p className="text-slate-600 text-sm">No hidden government processing fees or server maintenance costs. We provide a detailed breakdown of every rupee spent.</p>
        </div>
        <div className="bg-slate-50 p-8 rounded-3xl">
            <Users className="text-green-600 mb-6" size={32} />
            <h4 className="text-xl font-bold mb-4">Regional Focus</h4>
            <p className="text-slate-600 text-sm">We understand the local business landscape of Bihar while applying international technical standards.</p>
        </div>
      </section>

      {/* 5. QUICK CONTACT FOOTER */}
      <section className="pb-24 max-w-7xl mx-auto px-6">
        <div className="bg-orange-600 p-12 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white text-center md:text-left">
                <h3 className="text-3xl font-black mb-2">Let's build something great.</h3>
                <p className="opacity-80">Book a free 15-minute introductory call with our lead consultant.</p>
            </div>
            <button className="bg-slate-950 text-white px-10 py-5 rounded-2xl font-bold hover:bg-white hover:text-slate-950 transition-all">
                Book My Call
            </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;