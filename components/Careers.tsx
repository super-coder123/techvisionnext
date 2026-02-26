import React from "react";
import { Briefcase, Users, Laptop, Scale, GraduationCap, ArrowRight } from "lucide-react";

const Careers = () => {
  const openPositions = [
    {
      title: "Full Stack Developer",
      department: "IT Services",
      type: "Full-Time",
      location: "Remote / Muzaffarpur",
      icon: <Laptop className="text-blue-500" />,
    },
    {
      title: "Legal Consultant (GST/Tax)",
      department: "Legal Dept",
      type: "Full-Time",
      location: "Hybrid",
      icon: <Scale className="text-orange-500" />,
    },
    {
      title: "Business Development Associate",
      department: "Growth",
      type: "Contract",
      location: "Remote",
      icon: <Briefcase className="text-green-500" />,
    },
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800">
      {/* HERO SECTION */}
      <section className="bg-slate-950 py-24 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Build the Future of <span className="text-orange-500">Consultancy</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Join a team where technology meets legal excellence. We are looking for innovators, 
            thinkers, and problem solvers to help us redefine business services.
          </p>
          <a href="#openings" className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-2xl font-bold transition-all inline-flex items-center gap-2">
            View Openings <ArrowRight size={20} />
          </a>
        </div>
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 blur-[120px] rounded-full"></div>
      </section>

      {/* WHY JOIN US SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Great Culture</h3>
            <p className="text-slate-600 text-sm">A collaborative environment where every voice matters and creativity is encouraged.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <GraduationCap size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Learning & Growth</h3>
            <p className="text-slate-600 text-sm">Continuous learning opportunities through workshops and real-world project exposure.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Laptop size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Flexible Work</h3>
            <p className="text-slate-600 text-sm">We value work-life balance with remote-friendly policies and flexible timings.</p>
          </div>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section id="openings" className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Current Openings</h2>
          <div className="space-y-4">
            {openPositions.map((job, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 hover:border-orange-500 hover:shadow-xl transition-all group">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-orange-50 transition-colors">
                    {job.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900">{job.title}</h4>
                    <p className="text-sm text-slate-500">{job.department} • {job.type} • {job.location}</p>
                  </div>
                </div>
                <button className="w-full md:w-auto px-6 py-3 rounded-xl border-2 border-slate-900 font-bold hover:bg-slate-900 hover:text-white transition-all">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT HR */}
      <section className="py-20 text-center">
        <h3 className="text-2xl font-bold mb-4">Don't see a fit?</h3>
        <p className="text-slate-600 mb-8">Send us your resume anyway at <span className="text-orange-600 font-bold">careers@techvisionnext.com</span></p>
      </section>
    </div>
  );
};

export default Careers;