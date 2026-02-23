"use client";

import Image from "next/image";

export default function OurStory() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h1
          id="Story"
          className="text-5xl md:text-6xl font-extrabold tracking-wide mb-16 text-gray-900" 
        >
          OUR STORY
        </h1>

        {/* Image */}
        <div className="relative w-full flex justify-center">
          <Image
            src="/our-story.png"    // place image in public folder
            alt="Our Story"
            width={1200}
            height={600}
            className="rounded-2xl shadow-xl object-contain"
            priority
          />
        </div>

      </div>
    </section>
  );
}