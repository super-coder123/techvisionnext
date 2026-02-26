// "use client";

// import Image from "next/image";

// const clientsData = [
//   { name: "Airbnb", logo: "/logos/airbnb.svg" },
//   { name: "Spotify", logo: "/logos/spotify.svg" },
//   { name: "Uber", logo: "/logos/uber.svg" },
//   { name: "Slack", logo: "/logos/slackware.svg" },
//   { name: "Dropbox", logo: "/logos/dropbox.svg" },
//   { name: "Stripe", logo: "/logos/stripe.svg" },
//   { name: "Shopify", logo: "/logos/shopify.svg" },
//   { name: "Zoom", logo: "/logos/zoom.svg" },
//   { name: "Netflix", logo: "/logos/netflix.svg" },
//   { name: "Amazon", logo: "/logos/maze.svg" },
//   { name: "Adobe", logo: "/logos/acode.svg" },
//   { name: "Intel", logo: "/logos/intel.svg" },
// ];

// export default function ClientSection() {
//   return (
//     <section className="bg-gradient-to-b from-slate-100 to-slate-200 py-24">
//       <div className="max-w-7xl mx-auto px-6 text-center">

//         {/* HEADING */}
//         <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide text-gray-900">
//           WE ARE LOVED BY THOUSANDS CLIENTS
//         </h2>

//         <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-pink-500 mx-auto mt-6 mb-20 rounded-full"></div>

//         {/* LOGO GRID */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 items-center">
          
//           {clientsData.map((client, index) => (
//             <div
//               key={index}
//               className="group bg-white rounded-xl p-6 flex justify-center items-center
//                          shadow-sm hover:shadow-xl transition-all duration-300"
//             >
//               <img
//                 src={client.logo}
//                 alt={client.name}
//                 width={120}
//                 height={60}
                
//                 className="object-contain grayscale opacity-70
//                            group-hover:grayscale-0
//                            group-hover:opacity-100
//                            group-hover:scale-110
//                            transition-all duration-500"
//               />
//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";

const clientsData = [
  // { name: "Airbnb", logo: "/logos/airbnb.svg" },
  // { name: "Spotify", logo: "/logos/spotify.svg" },
  // { name: "Uber", logo: "/logos/uber.svg" },
  // { name: "Slack", logo: "/logos/slackware.svg" },
  // { name: "Dropbox", logo: "/logos/dropbox.svg" },
  // { name: "Stripe", logo: "/logos/stripe.svg" },
  // { name: "Shopify", logo: "/logos/shopify.svg" },
  // { name: "Zoom", logo: "/logos/zoom.svg" },
  // { name: "Netflix", logo: "/logos/netflix.svg" },
  // { name: "Amazon", logo: "/logos/maze.svg" },
  // { name: "Adobe", logo: "/logos/acode.svg" },
  // { name: "Intel", logo: "/logos/intel.svg" },
  { name: "runjhun", logo: "/logos/runjhun.webp" },
  { name: "breem", logo: "/logos/breem.webp" },
  { name: "grv", logo: "/logos/grv.webp" },
  { name: "sadhani", logo: "/logos/sadhani.webp" },
  { name: "summerIndia", logo: "/logos/summerIndia.webp" },
  { name: "micro-tech", logo: "/logos/micro-tech.webp" },
  { name: "grv", logo: "/logos/grv.webp" },
];

export default function ClientSection() {
  return (
    <section className="bg-gradient-to-b from-slate-100 to-slate-200 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide text-gray-900">
          WE ARE LOVED BY HUNDREDS CLIENTS
        </h2>

        <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-pink-500 mx-auto mt-6 mb-20 rounded-full"></div>

        {/* CAROUSEL */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll gap-20">
            {[...clientsData, ...clientsData].map((client, index) => (
              // <div
              //   key={index}
              //   className="min-w-[180px] bg-white rounded-xl p-6 flex justify-center items-center
              //              shadow-sm hover:shadow-xl transition-all duration-300"
              // >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-20  object-contain grayscale opacity-70
                             hover:grayscale-0 hover:opacity-100
                             hover:scale-110 transition-all duration-500"
                />
              // </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}