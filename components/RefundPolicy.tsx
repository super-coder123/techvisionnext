import React from "react";
import { RefreshCcw, ShieldAlert, CreditCard, Clock, CheckCircle, Mail } from "lucide-react";

const RefundPolicy = () => {
  const lastUpdated = "February 25, 2026";

  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans">
      {/* HEADER SECTION - Light Gradient */}
      <section className="bg-gradient-to-b from-orange-50 to-white py-20 border-b border-orange-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-sm border border-orange-200 mb-6">
            <RefreshCcw className="text-orange-600 w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Refund Policy
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Transparent and fair cancellation guidelines for our IT and Legal consultancy services.
          </p>
          <p className="text-sm text-slate-400 mt-4 uppercase tracking-widest font-semibold">
            Last Updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* MAIN CONTENT AREA */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="space-y-16">
          
          {/* 1. OVERVIEW SECTION */}
          <section className="relative p-8 rounded-3xl border border-orange-100 bg-orange-50/30">
            <div className="flex items-center gap-3 mb-4">
              <ShieldAlert className="text-orange-600 w-6 h-6" />
              <h2 className="text-2xl font-bold text-slate-900">1. Overview</h2>
            </div>
            <p className="text-slate-700 leading-relaxed text-lg">
              At <span className="font-bold text-orange-700">TechVision</span>, we are committed to professional excellence. Because our services involve government filings and custom technical labor, refunds are processed based on the actual work completed and external costs incurred.
            </p>
          </section>

          {/* 2. POLICY CARDS - Improved Contrast */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group p-8 rounded-3xl border border-l- border-slate-200 bg-white hover:border-orange-400 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                <Clock size={24} className="text-orange-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Cancellations</h3>
              <p className="text-slate-600 leading-relaxed">
                Requests made within <span className="font-semibold text-slate-900">24 hours</span> of payment are eligible for a full refund, provided no professional work has been initiated and no government fees have been paid.
              </p>
            </div>

            <div className="group p-8 rounded-3xl border border-slate-200 bg-white hover:border-orange-400 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                <CreditCard size={24} className="text-slate-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Non-Refundable Items</h3>
              <p className="text-slate-600 leading-relaxed">
                Fees paid to government authorities, stamp duties, and taxes are <span className="font-semibold text-red-600">strictly non-refundable</span> as these are third-party costs beyond our control.
              </p>
            </div>
          </div>

          {/* 3. REQUEST PROCESS */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-8 border-l-4 border-orange-500 pl-4">
              Refund Request Process
            </h2>
            <div className="grid gap-6">
              {[
                { title: "Email Request", text: "Send an email to support@techvisionnext.com with your Order ID and reason." },
                { title: "Service Review", text: "Our team evaluates the current status of your filing or IT project." },
                { title: "Approval Status", text: "We determine the eligible refund amount after deducting initiated work costs." },
                { title: "Credit Back", text: "Approved funds are credited to your original source within 5-7 business days." }
              ].map((step, idx) => (
                <div key={idx} className="flex items-center gap-6 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{step.title}</h4>
                    <p className="text-slate-600 text-sm">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 4. HELP BOX - Clear Call to Action */}
          <div className="bg-slate-900 rounded-[2.5rem] p-10 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-orange-500 rounded-full blur-[100px]"></div>
            </div>
            
            <CheckCircle className="mx-auto mb-6 text-orange-400 w-12 h-12" />
            <h3 className="text-3xl font-bold mb-4">Need Billing Assistance?</h3>
            <p className="text-slate-400 mb-10 max-w-lg mx-auto">
              Our support team is available 24/7 to resolve any transaction or service-related queries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:billing@techvisionnext.com" 
                className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-2xl font-bold transition-all transform hover:scale-105"
              >
                <Mail size={20} /> Contact Billing Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;