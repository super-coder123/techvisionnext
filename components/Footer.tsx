"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
  Instagram,
} from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* BRAND COLUMN */}
          <div className="lg:col-span-2">
           <Logo></Logo>

            <p className="text-gray-400 leading-relaxed mb-6">
              TechVision is a technology-driven consultancy platform connecting
              businesses with expert professionals. We deliver reliable
              solutions in digital transformation, compliance support,
              documentation, and enterprise technology services.
            </p>

            {/* SOCIALS */}
            <div className="flex gap-4">
              <a href="#" target="_blank" className="hover:text-white transition">
                <Facebook size={20} />
              </a>
              <a href="#" target="_blank" className="hover:text-white transition">
                <Twitter size={20} />
              </a>
              <a href="#" target="_blank" className="hover:text-white transition">
                <Youtube size={20} />
              </a>
              <a href="#" target="_blank" className="hover:text-white transition">
                <Linkedin size={20} />
              </a>
              <a href="#" target="_blank" className="hover:text-white transition">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">
              Company
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/blogs" className="hover:text-white">Blogs</Link></li>
              <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link href="#" className="hover:text-white">Talk to an Expert</Link></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">
              Services
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="#">Startup Registration</Link></li>
              <li><Link href="#">Company Incorporation</Link></li>
              <li><Link href="#">Compliance Support</Link></li>
              <li><Link href="#">Legal Documentation</Link></li>
              <li><Link href="#">IT Consulting</Link></li>
              <li><Link href="#">Cloud Solutions</Link></li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">
              Legal & Policies
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms & Conditions</Link></li>
              <li><Link href="/refund-policy">Refund Policy</Link></li>
              <li><Link href="/pricing-policy">Pricing Policy</Link></li>
              <li><Link href="/cancellation-policy">Cancellation Policy</Link></li>
            </ul>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-800 my-12" />

        {/* DISCLAIMER */}
        <div className="text-sm text-gray-500 leading-relaxed mb-8">
          <p>
            TechVision is a consultancy and technology services platform that connects
            clients with qualified professionals including consultants, legal experts,
            chartered accountants, and technical specialists. We do not directly provide
            legal representation or financial services. All information on this website
            is provided for general informational purposes only and should not be
            considered professional advice.
          </p>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">

          <div className="flex flex-wrap gap-6">
            <Link href="#">Sitemap</Link>
            <Link href="/refund-policy">Refund Policy</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/careers">Careers</Link>
          </div>

          <p className="text-center md:text-right">
            © {new Date().getFullYear()} TechVision. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}