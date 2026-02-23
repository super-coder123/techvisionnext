"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import Logo from "./Logo";

interface MenuItem {
  title: string;
  path?: string;
  children?: MenuItem[];
}

const menuData: MenuItem[] = [
  {
    title: "Registrations & Licenses",
    children: [
      {
        title: "Business Registrations",
        children: [
          { title: "Private Limited Company", path: "/services/private-limited-company-registration" },
          { title: "Public Limited Company", path: "/services/public-limited-company-registration" },

          { title: "One Person Company (OPC)", path: "/services/one-person-company-registration" },
          { title: "LLP Registration", path: "/services/limited-liability-partnership" },

          { title: "Farmer Producer Companies", path: "/services/farmer-producer-company-registration" },

          { title: "Section-8 NGO Registration", path: "/services/section-8-ngo-registration" },
          { title: "Section-8 Microfinance Company Registration", path: "/services/section-8-microfinance-company-registration" },

          { title: "Non Banking Financial Companies", path: "/services/non-banking-company-registration" },
          { title: "NBFC for Sale", path: "/services/nbfc-for-sale" },

          { title: "Society Registration", path: "/services/society-registration" },
          { title: "Political Party Registration", path: "/services/political-party-registration" },

          { title: "Nidhi Company", path: "/services/nidhi-company-registration" },

          { title: "FIEO-RCMC Registration", path: "/services/fieo-rcmc-registration" },
        ],
      },
      {
        title: "Licenses & Certification",
        children: [
          { title: "MSME Registration", path: "/services/msme-registration" },
          { title: "Digital Signature Certificate (DSC)", path: "/services/digital-signature-certificate" },

          { title: "FSSAI Registration", path: "/services/fssai-registration" },

          { title: "Importer Exporter Code (IEC) Registration", path: "/services/importer-exporter-code-registration" },
          { title: "APEDA-RCMC Registration", path: "/services/apeda-rcmc-registration" },

          { title: "Masala Board / Spice Board Registration", path: "/services/spice-board-registration" },

          { title: "ISO Registration", path: "/services/iso-registration" },

          { title: "LMPC Certificate", path: "/services/lmpc-certificate" },
          { title: "Hallmark Registration", path: "/services/hallmark-registration" },

          { title: "BIS Registration and Certification", path: "/services/bis-registration-certification" },

          { title: "Liquor License", path: "/services/liquor-license" },

          { title: "CLRA Registration and Licensing", path: "/services/clra-registration" },

          { title: "AD Code Registration", path: "/services/ad-code-registration" },

          { title: "GST Registration", path: "/services/gst-registration" },
        ],
      },
      {
        title:"Trademark & IP",
        children:[
            { title: "Trademark Assignment", path: "/services/trademark-assignment" },
            { title: "Trademark Registration", path: "/services/trademark-registration" },
            { title: "Trademark Objection", path: "/services/trademark-registration" },
            { title: "Trademark Renewal", path: "/services/trademark-renewal" },
            { title: "Trademark Opposition", path: "/services/trademark-opposition" },
            { title: "Trademark Rectification", path: "/services/trademark-rectification" },
            { title: "Trademark Hearing", path: "/services/trademark-hearing" },
            { title: "Trademark Infringement Notice", path: "/services/trademark-infringement-notice" },
            { title: "Patent Registration", path: "/services/patent-registration" },
            { title: "Patent Infringement", path: "/services/patent-infringement" },
            { title: "Patent Opposition", path: "/services/patent-opposition" },
            { title: "Patent Provisional", path: "/services/patent-provisional" },
        ]
      },
    ],
  },

  {
    title: "Tax Services",
    children: [
      {
        title: "Income Tax",
        children: [
          { title: "ITR-1 Filing", path: "/services/itr-1-filing" },
          { title: "ITR-2 Filing", path: "/services/itr-2-filing" },
          { title: "Business ITR Filing", path: "/services/business-itr-filing" },
        ],
      },
      {
        title: "GST",
        children: [
          { title: "GST Return Filing", path: "/services/gst-return-filing" },
          { title: "GSTR-9 Filing", path: "/services/gstr-9" },
        ],
      },
    ],
  },

  {
    title: "Legal Services",
    children: [
      {
        title: "Family Law",
        children: [
          { title: "Court Marriage", path: "/services/court-marriage" },
          { title: "Mutual Divorce", path: "/services/mutual-divorce" },
        ],
      },
      {
        title: "Civil Law",
        children: [
          { title: "Cheque Bounce Cases", path: "/services/cheque-bounce-cases" },
          { title: "RERA Cases", path: "/services/rera-cases" },
        ],
      },
    ],
  },

  {
    title: "IT Services",
    children: [
      { title: "Website Development", path: "/services/website-development" },
      { title: "Mobile App Development", path: "/services/mobile-app-development" },  
      { title: "E-commerce Development", path: "/services/e-commerce-development" },
      { title: "Software Development", path: "/services/software-development" },
      { title: "UI/UX Design", path: "/services/ui-ux-design" },
    ],
  },

  
];

export default function Navbar() {
  const pathname = usePathname();

  const [openMainIndex, setOpenMainIndex] = useState<number | null>(null);
  const [openChildIndex, setOpenChildIndex] = useState<number | null>(null);

  const navRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenMainIndex(null);
        setOpenChildIndex(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close on route change
  useEffect(() => {
    setOpenMainIndex(null);
    setOpenChildIndex(null);
  }, [pathname]);

  return (
    <nav
      ref={navRef}
      className="bg-black text-white px-8 py-4 shadow-lg sticky top-0 z-50"
    >
      <div className="flex justify-between items-center">
        <Logo />

        <ul className="flex gap-8 relative font-medium">
          {menuData.map((item, index) => (
            <li key={index} className="relative">
              {item.children ? (
                <>
                  <button
                    onClick={() =>
                      setOpenMainIndex(openMainIndex === index ? null : index)
                    }
                    className="flex items-center gap-1 hover:text-orange-400"
                  >
                    {item.title}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        openMainIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openMainIndex === index && (
                    <div 
                    className={`absolute top-10 bg-white text-black rounded-xl shadow-2xl w-80 p-5 space-y-3 border border-gray-200 max-h-[500px] overflow-y-auto z-50 ${index >= menuData.length - 2 ? "right-0" : "left-0"}`}>
                     
                      {item.children.map((subItem, subIndex) => (
                        <div key={subIndex}>
                          {subItem.children ? (
                            <>
                              <button
                                onClick={() =>
                                  setOpenChildIndex(
                                    openChildIndex === subIndex
                                      ? null
                                      : subIndex
                                  )
                                }
                                className="flex justify-between items-center w-full font-medium hover:text-orange-500"
                              >
                                {subItem.title}
                                <ChevronDown
                                  size={14}
                                  className={`transition-transform ${
                                    openChildIndex === subIndex
                                      ? "rotate-180"
                                      : ""
                                  }`}
                                />
                              </button>

                              {openChildIndex === subIndex && (
                                <div className="pl-4 mt-2 space-y-2 border-l border-gray-200">
                                  {subItem.children.map((child, i) => (
                                    <Link
                                      key={i}
                                      href={child.path || "#"}
                                      className="block text-sm hover:text-orange-500"
                                    >
                                      {child.title}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </>
                          ) : (
                            <Link
                              href={subItem.path || "#"}
                              className="block hover:text-orange-500"
                            >
                              {subItem.title}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link href={item.path || "#"}>{item.title}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}