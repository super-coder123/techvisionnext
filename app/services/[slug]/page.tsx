// import Footer from "@/components/Footer";
// import Navbar from "@/components/Navbar";

// export default async function ServicePage({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params;

//   const title = slug.replace(/-/g, " ");

//    const serviceExplanations: { [key: string]: string } = {
//     "gst-registration":
//       "GST registration is a legal requirement for businesses in India, enabling compliance under the unified tax system. It helps businesses claim input tax credit and expand their operations legally.",
//     "company-registration":
//       "Company registration is the first step to starting a legal business entity in India. It provides a separate legal identity and protects your personal assets.",
//     "trademark-filing":
//       "Trademark filing ensures your brand name or logo is legally protected, preventing others from copying your intellectual property.",
//     // add more services here
//   };

//   const explanation = serviceExplanations[slug] || 
//     "This service helps businesses manage legal compliance and business growth effectively.";


//   return (
//     <div className="bg-gray-50">

//      <Navbar/>

//       {/* ================= HERO SECTION ================= */}
//       <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">

//         {/* Left Content */}
//         <div>
//           <h1 className="text-4xl font-bold text-black leading-tight">
//             {title.toUpperCase()}
//           </h1>


//           <p className="mt-4 text-gray-600 text-sm leading-relaxed">
//             GST registration is essential for businesses in India,
//             ensuring compliance under the unified tax system.
//           </p>

//           {/* Info Box */}
//           <div className="flex flex-wrap items-center gap-6 mt-8 bg-white shadow-md p-6 rounded-xl">

//             <div className="text-center">
//               <p className="font-bold text-lg text-gray-900" >10,000+</p>
//               <p className="text-sm text-gray-500">Clients Served</p>
//             </div>

//             <div className="h-10 w-px bg-gray-300"></div>

//             <div className="text-center">
//               <p className="font-bold text-lg text-gray-900">10,000+</p>
//               <p className="text-sm text-gray-500">Businesses Registered</p>
//             </div>

//             <div className="h-10 w-px bg-gray-300"></div>

//             <div className="text-center">
//               <p className="font-bold text-lg text-gray-900">10,000+</p>
//               <p className="text-sm text-gray-500">Legal Advices</p>
//             </div>
//           </div>

//           {/* Reviews */}
//           <div className="flex items-center gap-4 mt-6">
//             <div>
//               <p className="font-semibold text-gray-900">Google Reviews</p>
//               <p className="text-sm text-gray-500">4.1/5 | 50+ Happy Reviews</p>
//             </div>
//           </div>
//         </div>

//         {/* Right Form */}
//         <div className="bg-white shadow-xl rounded-2xl p-8">
//           <h2 className="text-2xl font-bold text-center text-gray-900">Need Help?</h2>
//           <p className="text-center text-gray-500 mb-6">
//             Fill the Form Below
//           </p>

//           <form className="space-y-4">
//             <input
//               type="text"
//               placeholder="Enter Your Name"
//               className="w-full border text-gray-900 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
//             />
//             <input
//               type="email"
//               placeholder="Email Address"
//               className="w-full border  text-gray-900 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
//             />
//             <input
//               type="number"
//               placeholder="Phone Number"
//               className="w-full border text-gray-900  p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
//             />
//             <input
//               type="text"
//               placeholder="Your Location"
//               className="w-full border text-gray-900 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
//             />

//             <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
//               Request A Callback
//             </button>
//           </form>
//         </div>
//       </section>

//          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
//             {explanation}
//           </p>


//       {/* ================= FEATURE SECTION ================= */}
//       <section className="bg-cyan-50 py-14">
//         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

//           <div>
//             <ul className="space-y-3 text-gray-700">
//               <li>✔ Guaranteed Registration</li>
//               <li>✔ Cost Effective Rates</li>
//               <li>✔ 24x7 Support</li>
//               <li>✔ 10K+ Businesses Registered</li>
//             </ul>

//             <h3 className="mt-6 font-bold text-lg text-gray-900">
//               Documents Required
//             </h3>

//             <ul className="space-y-2 mt-3 text-gray-600">
//               <li>• PAN, Aadhaar, Photo</li>
//               <li>• Bank Statement</li>
//               <li>• Company Name</li>
//               <li>• Address Proof</li>
//             </ul>
//           </div>

//           <div>
//             <img
//               src="/hero/photo-1.jpg"
//               alt="Certificate"
//               className="rounded-xl shadow-md"
//             />
//           </div>

//         </div>
//       </section>


//       {/* ================= CONTENT SECTION ================= */}
//       <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">

//         {/* Main Content */}
//         <div className="md:col-span-2 space-y-6">

//           <h2 className="text-3xl font-bold text-gray-900">
//             GST Registration in India
//           </h2>

//           <p className="text-gray-600 leading-relaxed">
//             GST is one of the most significant tax reforms in India...
//           </p>

//           <h3 className="text-xl font-semibold mt-8 text-gray-900">
//             Benefits of GST Registration
//           </h3>

//           <ul className="list-disc pl-6 text-gray-600 space-y-2">
//             <li>Legal Compliance</li>
//             <li>Input Tax Credit</li>
//             <li>Ease of Interstate Trade</li>
//             <li>Enhanced Credibility</li>
//           </ul>
//         </div>

//         {/* Sidebar */}
//         <div className="space-y-6">
//           <input
//             type="text"
//             placeholder="Search here..."
//             className="w-full text-gray-900 border p-3 rounded-lg"
//           />

//           <div className="bg-white shadow-md p-4 rounded-xl">
//             <h4 className="font-semibold mb-3 text-gray-900">
//               Topics You Should Read
//             </h4>
//             <ul className="text-sm text-gray-600 space-y-2">
//               <li>Company Registration</li>
//               <li>Trademark Filing</li>
//               <li>Tax Advisory</li>
//             </ul>
//           </div>
//         </div>

//       </section>


//       {/* ================= FAQ SECTION ================= */}
//       <section className="bg-white py-16">
//         <div className="max-w-6xl mx-auto px-6">

//           <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
//             Frequently Asked Questions
//           </h2>

//           <div className="grid md:grid-cols-2 gap-6">
//             <div className="border p-6 rounded-xl shadow-sm">
//               <h4 className="font-semibold text-gray-900">
//                 What is GST registration?
//               </h4>
//               <p className="text-sm text-gray-600 mt-2">
//                 GST registration is mandatory for businesses...
//               </p>
//             </div>

//             <div className="border p-6 rounded-xl shadow-sm">
//               <h4 className="font-semibold text-gray-900">
//                 Who needs GST registration?
//               </h4>
//               <p className="text-sm text-gray-600 mt-2">
//                 Businesses exceeding turnover threshold...
//               </p>
//             </div>
//           </div>

//         </div>
//       </section>


//       {/* ================= STATES SECTION ================= */}
//     <Footer/>

//     </div>
//   );
// }


// import { serviceData } from "@/app/services/data";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { 
//   CheckCircle2, 
//   FileCheck, 
//   ShieldCheck, 
//   Clock, 
//   Users, 
//   Star, 
//   Search,
//   ChevronRight,
//   HelpCircle
// } from "lucide-react";

// export default async function ServicePage({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params;
//   const content = serviceData[slug];

//   // Fallback if the slug is missing from your data
//   if (!content) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center">
//         <h1 className="text-2xl font-bold">Service Not Found</h1>
//         <a href="/" className="text-orange-500 mt-4 underline">Back to Home</a>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white selection:bg-orange-100">
//       <Navbar />

//       {/* ================= HERO SECTION ================= */}
//       <section className="relative bg-gradient-to-b from-slate-50 to-white border-b overflow-hidden">
//         <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-16 items-center">
          
//           {/* Left Content */}
//           <div className="space-y-8">
//             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-sm font-medium">
//               <ShieldCheck size={16} /> 100% Secure & Govt. Recognized
//             </div>

//             <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
//               {content.title}
//             </h1>

//             <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
//               {content.heroDescription}
//             </p>

//             {/* Trust Stats Card */}
//             <div className="grid grid-cols-3 gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
//               <div className="text-center p-2">
//                 <p className="text-2xl font-bold text-slate-900">10k+</p>
//                 <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Clients</p>
//               </div>
//               <div className="w-px h-10 bg-slate-200 self-center mx-auto" />
//               <div className="text-center p-2">
//                 <p className="text-2xl font-bold text-slate-900">4.8/5</p>
//                 <div className="flex justify-center text-orange-400"><Star size={10} fill="currentColor"/><Star size={10} fill="currentColor"/><Star size={10} fill="currentColor"/><Star size={10} fill="currentColor"/><Star size={10} fill="currentColor"/></div>
//               </div>
//               <div className="w-px h-10 bg-slate-200 self-center mx-auto" />
//               <div className="text-center p-2">
//                 <p className="text-2xl font-bold text-slate-900">24/7</p>
//                 <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Support</p>
//               </div>
//             </div>
//           </div>

//           {/* Right Lead Form */}
//           <div className="relative group">
//             <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-rose-400 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
//             <div className="relative bg-white shadow-2xl rounded-3xl p-8 border border-slate-100">
//               <h2 className="text-2xl font-bold text-slate-900 mb-2">Get Started Now</h2>
//               <p className="text-slate-500 text-sm mb-6">Expert assistance just a click away.</p>
              
//               <form className="space-y-4">
//                 <div className="grid grid-cols-2 gap-4">
//                   <input type="text" placeholder="Full Name" className="col-span-2 w-full  text-gray-900   border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition-all" />
//                   <input type="email" placeholder="Email Address" className="w-full border text-gray-900   border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition-all" />
//                   <input type="tel" placeholder="Phone Number" className="w-full border    text-gray-900 border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition-all" />
//                 </div>
//                 <select className="w-full border border-slate-200  text-gray-900 p-3 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition-all appearance-none bg-white">
//                   <option>Select City</option>
//                   <option>Delhi</option>
//                   <option>Mumbai</option>
//                   <option>Bangalore</option>
//                 </select>
//                 <button className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-orange-600 transition-colors shadow-lg shadow-slate-200">
//                   Request Free Consultation
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ================= FEATURES & DOCS ================= */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid lg:grid-cols-2 gap-20">
            
//             {/* Benefits Grid */}
//             <div>
//               <h3 className="text-3xl font-bold text-slate-900 mb-8">Why Choose Us?</h3>
//               <div className="grid sm:grid-cols-2 gap-6">
//                 {content.features.map((feature, idx) => (
//                   <div key={idx} className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
//                     <div className="h-10 w-10 shrink-0 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center">
//                       <CheckCircle2 size={20} />
//                     </div>
//                     <p className="font-medium text-slate-700">{feature}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Documents Required */}
//             <div className="bg-slate-900 rounded-3xl p-10 text-white relative overflow-hidden">
//                <FileCheck className="absolute -right-4 -bottom-4 text-slate-800 h-40 w-40" />
//                <div className="relative z-10">
//                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
//                    <Clock className="text-orange-400" /> Documents Required
//                  </h3>
//                  <div className="grid grid-cols-1 gap-4">
//                     {content.docsRequired.map((doc, idx) => (
//                       <div key={idx} className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-xl border border-slate-700">
//                         <div className="h-2 w-2 bg-orange-500 rounded-full" />
//                         <span className="text-slate-300">{doc}</span>
//                       </div>
//                     ))}
//                  </div>
//                </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ================= CONTENT & SIDEBAR ================= */}
//       <section className="py-20 bg-slate-50">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid lg:grid-cols-3 gap-12">
            
//             {/* Left: Deep Dive Content */}
//             <div className="lg:col-span-2 prose prose-slate max-w-none">
//               <h2 className="text-4xl font-bold text-slate-900 mb-6 underline decoration-orange-500 underline-offset-8">
//                 Detailed Overview
//               </h2>
//               <p className="text-xl text-slate-600 leading-relaxed mb-8">
//                 {content.mainParagraph}
//               </p>

//               <div className="bg-white p-8 rounded-3xl border border-slate-200 mb-10">
//                 <h3 className="text-2xl font-bold text-slate-900 mb-6">Key Advantages</h3>
//                 <div className="space-y-4">
//                   {content.benefits.map((benefit, i) => (
//                     <div key={i} className="flex items-start gap-3">
//                       <div className="mt-1.5 h-2 w-2 rounded-full bg-orange-500 shrink-0" />
//                       <p className="text-slate-700 font-medium">{benefit}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Right: Sidebar */}
//             <aside className="space-y-8">
//               <div className="bg-white p-2 rounded-2xl border border-slate-200 flex items-center shadow-sm">
//                 <Search className="ml-3 text-slate-400" size={20} />
//                 <input type="text" placeholder="Search services..." className="w-full p-3 outline-none text-slate-700" />
//               </div>

//               <div className="bg-slate-900 p-8 rounded-3xl text-white">
//                 <h4 className="text-xl font-bold mb-6">Popular Services</h4>
//                 <ul className="space-y-4">
//                   {["Company Registration", "GST Filing", "Trademark Search", "Tax Planning"].map((item, i) => (
//                     <li key={i}>
//                       <a href="#" className="flex items-center justify-between group text-slate-400 hover:text-white transition-colors">
//                         <span>{item}</span>
//                         <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </aside>
//           </div>
//         </div>
//       </section>

//       {/* ================= FAQ SECTION ================= */}
//       <section className="py-24 bg-white">
//         <div className="max-w-4xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-slate-900 mb-4">Common Questions</h2>
//             <p className="text-slate-500 italic">Everything you need to know about {content.title}</p>
//           </div>

//           <div className="space-y-6">
//             {content.faqs.map((faq, idx) => (
//               <div key={idx} className="group border border-slate-200 p-6 rounded-2xl hover:border-orange-500 transition-all duration-300">
//                 <h4 className="flex items-center gap-3 font-bold text-slate-900 mb-3 text-lg">
//                   <HelpCircle className="text-orange-500" size={20} />
//                   {faq.q}
//                 </h4>
//                 <p className="text-slate-600 leading-relaxed pl-8">
//                   {faq.a}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }

"use client"; // Note: Use client if you want to handle accordion states or animations

import { 
  CheckCircle2, FileCheck, ShieldCheck, Clock, Star, 
  Search, ChevronRight, HelpCircle, ArrowRight, 
  Award, Zap, Landmark, BadgeCheck, 
  Users
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { serviceData } from "@/app/services/data";
import { use } from "react";

export default function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const content = serviceData[slug];

  if (!content) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold font-sans">Service Not Found</h1>
        <a href="/" className="text-orange-500 mt-4 underline">Back to Home</a>
      </div>
    );
  }

  return (
    <div className="bg-white selection:bg-orange-100 font-sans">
      <Navbar />

      {/* ================= HERO SECTION (Premium Redesign) ================= */}
      <section className="relative bg-[#fdfcfb] pt-12 pb-24 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-orange-50 rounded-full blur-3xl opacity-50" />
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest shadow-sm">
              <Zap size={14} className="fill-current" /> Fast-Track Processing Available
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05]">
              Expert <span className="text-orange-500">{content.title}</span> 
              <br />Made Simple.
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
              {content.heroDescription} We handle the bureaucracy while you focus on building your empire. 100% Paperless & Hassle-free.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-slate-700 font-medium bg-slate-100 px-4 py-2 rounded-lg">
                <BadgeCheck className="text-green-600" size={18} /> ISO Certified
              </div>
              <div className="flex items-center gap-2 text-slate-700 font-medium bg-slate-100 px-4 py-2 rounded-lg">
                <ShieldCheck className="text-blue-600" size={18} /> Govt. Approved
              </div>
            </div>
          </div>

          {/* Right Lead Form with Glassmorphism */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-orange-500/10 to-rose-500/10 rounded-[40px] blur-2xl" />
            <div className="relative bg-white/80 backdrop-blur-xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] rounded-[32px] p-8 border border-white">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-900">Start Your Application</h2>
                <p className="text-slate-500 text-sm">Fill the form to get a customized quotation today.</p>
              </div>
              
              <form className="space-y-4">
                <input type="text" placeholder="Full Name" className="w-full bg-slate-50 border-none p-4 rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none transition-all text-slate-900" />
                <div className="grid grid-cols-2 gap-4">
                  <input type="email" placeholder="Email" className="w-full bg-slate-50 border-none p-4 rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none transition-all text-slate-900" />
                  <input type="tel" placeholder="Phone" className="w-full bg-slate-50 border-none p-4 rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none transition-all text-slate-900" />
                </div>
                <select className="w-full bg-slate-50 border-none p-4 rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none transition-all text-slate-900 appearance-none">
                  <option>Select State</option>
                  <option>Maharashtra</option>
                  <option>Delhi</option>
                  <option>Karnataka</option>
                </select>
                <button className="w-full bg-orange-500 text-white font-bold py-5 rounded-2xl hover:bg-orange-600 transition-all shadow-lg shadow-orange-200 flex items-center justify-center gap-2 group">
                  Get Free Expert Call <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STEP-BY-STEP PROCESS ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">How it Works</h2>
          <p className="text-slate-500">Your journey from application to approval in 4 simple steps.</p>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -z-10" />
          
          {[
            { title: "Consultation", desc: "Speak with our experts to understand requirements." },
            { title: "Documentation", desc: "Upload docs securely on our digital vault." },
            { title: "Filing", desc: "Our team files the application with authorities." },
            { title: "Delivery", desc: "Receive your certificate via email & post." }
          ].map((step, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 hover:border-orange-200 transition-colors shadow-sm">
              <div className="w-12 h-12 bg-orange-500 text-white rounded-2xl flex items-center justify-center text-xl font-bold mb-4 mx-auto md:mx-0">
                0{i + 1}
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= DOCUMENTATION & HIGHLIGHTS ================= */}
      <section className="py-24 bg-slate-900 rounded-[60px] mx-4 my-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10">
          <Landmark size={400} />
        </div>
        <div className="max-w-7xl mx-auto px-10 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h3 className="text-4xl font-bold text-white mb-8">Documentation Check-list</h3>
              <div className="space-y-4">
                {content.docsRequired.map((doc, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 group hover:bg-white/10 transition-all">
                    <div className="h-10 w-10 shrink-0 bg-orange-500/20 text-orange-500 rounded-xl flex items-center justify-center">
                      <FileCheck size={20} />
                    </div>
                    <span className="text-slate-200 font-medium">{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-10 rounded-[40px] shadow-2xl">
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Why TechVision?</h3>
              <div className="grid gap-6">
                {content.features.map((feature, idx) => (
                  <div key={idx} className="flex gap-4 p-2">
                    <div className="h-6 w-6 shrink-0 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                      <CheckCircle2 size={14} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">{feature}</p>
                      <p className="text-sm text-slate-500">Verified and trusted process.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DETAILED OVERVIEW ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-bold text-slate-900 mb-10">Detailed Overview</h2>
              <div className="prose prose-slate prose-lg max-w-none text-slate-600">
                <p className="mb-8 leading-[1.8]">{content.mainParagraph}</p>
                
                <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Key Advantages of {content.title}</h3>
                <div className="grid sm:grid-cols-2 gap-4 not-prose">
                  {content.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-orange-50 rounded-2xl border border-orange-100/50">
                      <Award className="text-orange-500" size={20} />
                      <span className="text-slate-800 font-semibold text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="space-y-8">
              <div className="bg-slate-50 p-8 rounded-[32px] border border-slate-100">
                <h4 className="text-xl font-bold text-slate-900 mb-6">Related Services</h4>
                <div className="space-y-3">
                  {["Private Limited Registration", "GST Compliance", "Trademark Search"].map((item, i) => (
                    <a key={i} href="#" className="flex items-center justify-between p-4 bg-white rounded-xl group hover:bg-orange-500 transition-all border border-slate-100">
                      <span className="font-medium text-slate-700 group-hover:text-white">{item}</span>
                      <ChevronRight size={16} className="text-slate-400 group-hover:text-white" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-orange-500 p-8 rounded-[32px] text-white relative overflow-hidden">
                <Users className="absolute -right-4 -bottom-4 opacity-20 h-32 w-32" />
                <h4 className="text-xl font-bold mb-2">Need Help?</h4>
                <p className="text-orange-100 text-sm mb-6">Talk to our legal experts for a free consultation.</p>
                {/* <button className="w-full bg-white text-orange-600 font-bold py-3 rounded-xl hover:bg-slate-900 hover:text-white transition-colors">
                  Call +91 9031675840
                </button> */}
                 
                <button className="w-full bg-white text-orange-600 font-bold py-3 rounded-xl hover:bg-slate-900 hover:text-white transition-colors">
                  <a
                    href="tel:+919031675840"
                    target="_blank"
                    // className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition"
                  >
                    Call +91 9031675840
                  </a>
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-500 italic">Common queries regarding {content.title}</p>
          </div>

          <div className="space-y-4">
            {content.faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-slate-200 p-8 rounded-3xl hover:shadow-md transition-shadow">
                <h4 className="flex items-start gap-4 font-bold text-slate-900 mb-4 text-xl">
                  <span className="text-orange-500 mt-1"><HelpCircle size={24} /></span>
                  {faq.q}
                </h4>
                <p className="text-slate-600 leading-relaxed pl-10">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}