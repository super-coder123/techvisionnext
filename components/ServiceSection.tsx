const servicesData = [
  { title: "Startup Combo", icon: "🚀", color: "from-orange-400 to-pink-500" },
  { title: "One Person Company (OPC)", icon: "👨‍💼", color: "from-blue-400 to-indigo-500" },
  { title: "Farmer Producer Companies (FPCs)", icon: "🌾", color: "from-green-400 to-emerald-500" },
  { title: "Section 8 Microfinance", icon: "💰", color: "from-yellow-400 to-orange-500" },
  { title: "NBFC Registration", icon: "🌳", color: "from-teal-400 to-cyan-500" },
  { title: "Trademark Filing", icon: "🔵", color: "from-indigo-400 to-purple-500" },
  { title: "FSSAI Registration", icon: "🍽️", color: "from-rose-400 to-red-500" },
  { title: "MSME Registration", icon: "🏛️", color: "from-gray-400 to-slate-500" },
  { title: "ISO Certificate", icon: "🏅", color: "from-amber-400 to-yellow-500" },
  { title: "GST Registration", icon: "📊", color: "from-sky-400 to-blue-500" },
];

const legalServicesData = [
  {
    title: "Lawyer's Appointment",
    slug: "lawyer-appointment",
    icon: "👨‍⚖️",
    color: "from-indigo-400 to-blue-500",
  },
  {
    title: "Legal Notice",
    slug: "legal-notice",
    icon: "📄",
    color: "from-purple-400 to-indigo-500",
  },
  {
    title: "Rent Agreement",
    slug: "rent-agreement",
    icon: "🏠",
    color: "from-green-400 to-emerald-500",
  },
  {
    title: "Drafting of Agreements",
    slug: "drafting-agreements",
    icon: "📝",
    color: "from-orange-400 to-amber-500",
  },
  {
    title: "Divorce Petition",
    slug: "divorce-petition",
    icon: "⚖️",
    color: "from-red-400 to-rose-500",
  },
  {
    title: "Marriage Registration",
    slug: "marriage-registration",
    icon: "💍",
    color: "from-pink-400 to-rose-500",
  },
];

const itServicesData = [
  { title: "Website Development", slug: "web-dev", icon: "🌐", color: "from-blue-500 to-cyan-400" },
  { title: "Mobile App Development", slug: "app-dev", icon: "📱", color: "from-violet-500 to-purple-400" },
  { title: "E-commerce Development", slug: "ecommerce", icon: "🛒", color: "from-orange-500 to-yellow-400" },
  { title: "Software Development", slug: "software-dev", icon: "💻", color: "from-slate-700 to-slate-900" },
  { title: "UI/UX Design", slug: "ui-ux", icon: "🎨", color: "from-pink-500 to-rose-400" },
  { title: "Digital Marketing", slug: "digital-marketing", icon: "📈", color: "from-emerald-500 to-teal-400" },
];

export default function ServicesSection() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-20">
      
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-4xl font-extrabold mb-14  text-gray-900">
          IT Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          
          {itServicesData.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-300 rounded-2xl p-7 text-center border border-gray-200
                        shadow-sm hover:shadow-2xl hover:-translate-y-2
                        transition-all duration-300
                        flex flex-col h-full"   
            >
              
              {/* ICON */}
              <div
                className={`mx-auto mb-6 w-20 h-20 flex items-center justify-center rounded-full 
                            bg-gradient-to-r ${service.color} text-white text-4xl
                            group-hover:scale-110 transition`}
              >
                {service.icon}
              </div>

              {/* TITLE (Fixed Height Area) */}
              <h3 className="font-bold text-gray-900 text-lg mb-6 min-h-[60px]">
                {service.title}
              </h3>

              {/* BUTTON pushed to bottom */}
              <button
                className="mt-auto w-full py-3 rounded-lg font-semibold text-white
                          bg-gradient-to-r from-gray-800 to-gray-900
                          hover:from-orange-500 hover:to-orange-600
                          transition-all duration-300"
              >
                GET STARTED
              </button>

            </div>
          ))}

        </div>

      </div>
      
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-4xl font-extrabold mb-14 mt-20 text-gray-900">
          Registration & Licenses
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-7 text-center border border-gray-200
                         shadow-sm hover:shadow-2xl hover:-translate-y-2
                         transition-all duration-300
                         flex flex-col h-full"   // ✅ IMPORTANT
            >
              
              {/* ICON */}
              <div
                className={`mx-auto mb-6 w-20 h-20 flex items-center justify-center rounded-full 
                            bg-gradient-to-r ${service.color} text-white text-4xl
                            group-hover:scale-110 transition`}
              >
                {service.icon}
              </div>

              {/* TITLE (Fixed Height Area) */}
              <h3 className="font-bold text-gray-900 text-lg mb-6 min-h-[60px]">
                {service.title}
              </h3>

              {/* BUTTON pushed to bottom */}
              <button
                className="mt-auto w-full py-3 rounded-lg font-semibold text-white
                           bg-gradient-to-r from-gray-800 to-gray-900
                           hover:from-orange-500 hover:to-orange-600
                           transition-all duration-300"
              >
                GET STARTED
              </button>

            </div>
          ))}

        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-4xl font-extrabold mb-14 mt-10 text-gray-900">
          Legal Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          
          {legalServicesData.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-300 rounded-2xl p-7 text-center border border-gray-200
                         shadow-sm hover:shadow-2xl hover:-translate-y-2
                         transition-all duration-300
                         flex flex-col h-full"   
            >
              
              {/* ICON */}
              <div
                className={`mx-auto mb-6 w-20 h-20 flex items-center justify-center rounded-full 
                            bg-gradient-to-r ${service.color} text-white text-4xl
                            group-hover:scale-110 transition`}
              >
                {service.icon}
              </div>

              {/* TITLE (Fixed Height Area) */}
              <h3 className="font-bold text-gray-900 text-lg mb-6 min-h-[60px]">
                {service.title}
              </h3>

              {/* BUTTON pushed to bottom */}
              <button
                className="mt-auto w-full py-3 rounded-lg font-semibold text-white
                           bg-gradient-to-r from-gray-800 to-gray-900
                           hover:from-orange-500 hover:to-orange-600
                           transition-all duration-300"
              >
                GET STARTED
              </button>

            </div>
          ))}

        </div>

      </div>

   
    </section>
  );
}