import { ShieldCheck, Lock, Eye, FileText } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read the TechVisionNext Privacy Policy to understand how we collect, use, and protect your data.",
};

export default function PrivacyPolicy() {
  const lastUpdated = "October 2023"; // Update as needed

  return (
    <div className="bg-white">
   

      {/* Header Section */}
      <section className="bg-slate-50 border-b py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-4">
            <ShieldCheck size={16} /> Data Protection & Privacy
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-500 italic">Last Updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-slate max-w-none space-y-12">
            
            <div>
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <Eye className="text-blue-500" /> 1. Introduction
              </h2>
              <p className="text-slate-600 leading-relaxed mt-4">
                At <strong>TechVisionNext</strong>, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website for Legal or IT services. By using our site, you consent to the practices described here.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h3 className="font-bold text-slate-900 flex items-center gap-2 mb-3">
                  <FileText className="text-blue-500" size={18} /> Information We Collect
                </h3>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Name and contact details (Email/Phone)</li>
                  <li>• Business information for registration services</li>
                  <li>• Payment information for processed orders</li>
                  <li>• Technical data (IP address, browser type)</li>
                </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h3 className="font-bold text-slate-900 flex items-center gap-2 mb-3">
                  <Lock className="text-blue-500" size={18} /> How We Use Data
                </h3>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• To provide legal and IT consultancy</li>
                  <li>• To process GST/Company registrations</li>
                  <li>• To improve our website performance</li>
                  <li>• To send important service updates</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">2. Data Security</h2>
              <p className="text-slate-600 leading-relaxed mt-4">
                We implement a variety of security measures to maintain the safety of your personal information. Your sensitive data is encrypted via Secure Socket Layer (SSL) technology and is only accessible by persons authorized with special access rights to our systems.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">3. Third-Party Disclosure</h2>
              <p className="text-slate-600 leading-relaxed mt-4">
                We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website or conducting our business, so long as those parties agree to keep this information confidential.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-100 p-8 rounded-3xl">
              <h2 className="text-2xl font-bold text-blue-900">4. Contact Us</h2>
              <p className="text-blue-800 mt-2">
                If you have any questions regarding this privacy policy, you may contact our legal team:
              </p>
              <div className="mt-4 space-y-1 text-blue-900 font-medium">
                <p>Email: legal@techvisionnext.com</p>
                <p>Location: New Delhi, India</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}