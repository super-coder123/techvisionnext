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
  
  const GlowWrapper = ({ children }: { children: React.ReactNode }) => (
    <div className="group relative overflow-hidden rounded-2xl bg-white/40 p-[2px] transition-all duration-500 hover:-translate-y-3 backdrop-blur-sm border border-white/60 shadow-sm hover:shadow-2xl">
      {/* 1. THE RGBY GLOW LAYER */}
      <div 
        className="animate-border-spin absolute inset-[-1000%] 
        bg-[conic-gradient(from_90deg_at_50%_50%,transparent_10%,#EF4444_25%,#22C55E_40%,#3B82F6_55%,#FACC15_70%,transparent_90%)] 
        opacity-0 transition-opacity duration-500 group-hover:opacity-100" 
      />

      {/* 2. THE LIGHT GLASS CONTENT MASK */}
      <div className="relative h-full w-full rounded-[14px] bg-white/90 backdrop-blur-md">
        {children}
      </div>
    </div>
  );

  const ServiceCardContent = ({ service }: { service: any }) => (
    <div className="p-7 text-center flex flex-col h-full relative z-10">
      {/* ICON */}
      <div className={`mx-auto mb-6 w-20 h-20 flex items-center justify-center rounded-full 
                      bg-gradient-to-r ${service.color} text-white text-4xl 
                      transition-transform duration-500 group-hover:scale-110 shadow-md`}>
        {service.icon}
      </div>

      {/* TITLE */}
      <h3 className="font-bold text-gray-800 text-lg mb-6 min-h-[60px]">
        {service.title}
      </h3>

      {/* BUTTON */}
      <button className="mt-auto w-full py-3 rounded-lg font-semibold text-white 
                        bg-gray-900 hover:bg-orange-500
                        transition-all duration-300 shadow-sm">
        GET STARTED
      </button>
    </div>
  );

  return (
    <section 
      className="relative py-24 bg-fixed bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ 
        // Using a bright, airy architectural background for Light Mode
        backgroundImage: `url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2000')` 
      }}
    >
      {/* Light Overlay (White tint) to keep it bright but legible */}
      <div className="absolute inset-0 bg-white/60 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* IT Services Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-extrabold mb-14 text-gray-900 drop-shadow-sm">IT Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {itServicesData.map((service, index) => (
              <GlowWrapper key={index}>
                <ServiceCardContent service={service} />
              </GlowWrapper>
            ))}
          </div>
        </div>

        {/* Registration & Licenses Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-extrabold mb-14 text-gray-900 drop-shadow-sm">Registration & Licenses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {servicesData.map((service, index) => (
              <GlowWrapper key={index}>
                <ServiceCardContent service={service} />
              </GlowWrapper>
            ))}
          </div>
        </div>

        {/* Legal Services Section */}
        <div>
          <h2 className="text-4xl font-extrabold mb-14 text-gray-900 drop-shadow-sm">Legal Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {legalServicesData.map((service, index) => (
              <GlowWrapper key={index}>
                <ServiceCardContent service={service} />
              </GlowWrapper>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}