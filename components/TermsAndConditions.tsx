import React from "react";
import { Scale, BookOpen, ShieldCheck, UserCheck, AlertCircle, Gavel } from "lucide-react";

const TermsAndConditions = () => {
  const lastUpdated = "February 25, 2026";

  return (
    <div className="bg-white min-h-screen text-slate-800">
      {/* HEADER SECTION */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20 border-b border-blue-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-sm border border-blue-200 mb-6">
            <Scale className="text-blue-600 w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Please read these terms carefully before using our IT and Legal consultancy platform.
          </p>
          <p className="text-sm text-slate-400 mt-4 uppercase tracking-widest font-semibold">
            Effective Date: {lastUpdated}
          </p>
        </div>
      </section>

      {/* MAIN CONTENT AREA */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="space-y-12">
          
          {/* 1. AGREEMENT */}
          <section className="p-8 rounded-3xl border border-blue-100 bg-blue-50/30">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="text-blue-600 w-6 h-6" />
              <h2 className="text-2xl font-bold text-slate-900">1. Acceptance of Terms</h2>
            </div>
            <p className="text-slate-700 leading-relaxed">
              By accessing TechVision, you agree to be bound by these Terms and Conditions. Our services are intended for business entities and individuals seeking professional IT and Legal consultancy. If you do not agree, please refrain from using our services.
            </p>
          </section>

          {/* 2. SERVICES GRID */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl border border-slate-200 bg-white shadow-sm">
              <UserCheck className="text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-slate-900 mb-3">User Obligations</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                You agree to provide accurate, current, and complete information for GST, Trademark, or Company registrations. TechVision is not liable for delays caused by incorrect data provided by the user.
              </p>
            </div>

            <div className="p-8 rounded-3xl border border-slate-200 bg-white shadow-sm">
              <ShieldCheck className="text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Service Limitations</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We act as a bridge between you and professional experts. While we strive for 100% accuracy, final approvals for legal filings depend on government authorities.
              </p>
            </div>
          </div>

          {/* 3. DETAILED SECTIONS */}
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <AlertCircle className="text-orange-500" size={24} /> 2. Payments & Professional Fees
              </h2>
              <p className="text-slate-600 leading-relaxed">
                All fees must be paid in advance. For IT projects, payment milestones will be defined in the specific project agreement. For legal services, the fee includes our consultancy charges but may exclude dynamic government taxes or stamp duties unless specified.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Gavel className="text-blue-600" size={24} /> 3. Governing Law
              </h2>
              <p className="text-slate-600 leading-relaxed">
                These terms are governed by the laws of India. Any disputes arising out of the use of our services shall be subject to the exclusive jurisdiction of the courts in <strong>Muzaffarpur, Bihar</strong>.
              </p>
            </section>
          </div>

          {/* 4. FOOTER NOTE */}
          <div className="bg-slate-900 rounded-[2.5rem] p-10 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Questions about our Terms?</h3>
            <p className="text-slate-400 mb-8 max-w-md mx-auto">
              Our legal department is available to clarify any sections of this agreement.
            </p>
            <a 
              href="mailto:legal@techvisionnext.com" 
              className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-2xl font-bold transition-all"
            >
              Contact Legal Team
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;