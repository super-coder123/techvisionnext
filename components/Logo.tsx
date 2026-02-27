// import Link from "next/link";

// export default function Logo() {
//   return (
//     <Link href="/" className="flex items-center gap-2 cursor-pointer">
//       <svg
//         width="40"
//         height="40"
//         viewBox="0 0 100 100"
//         className="text-orange-500"
//       >
//         <circle cx="50" cy="50" r="45" fill="currentColor" />
//         <text
//           x="50%"
//           y="55%"
//           textAnchor="middle"
//           fill="white"
//           fontSize="40"
//           fontWeight="bold"
//           dy=".3em"
//         >
//           TV
//         </text>
//       </svg>

//       <span className="text-xl font-bold text-white tracking-wide">
//         TechVision
//       </span>
//     </Link>
//   );
// }

// import Link from "next/link";

// export default function Logo() {
//   return (
//     <Link href="/" className="flex items-center gap-3 cursor-pointer group">
//       {/* SVG Icon */}
//       <div className="relative">
//         <svg
//           width="42"
//           height="42"
//           viewBox="0 0 100 100"
//           className="text-orange-500 transition-transform group-hover:rotate-12 duration-300"
//         >
//           <circle cx="50" cy="50" r="45" fill="currentColor" />
//           <text
//             x="50%"
//             y="50%"
//             textAnchor="middle"
//             fill="white"
//             fontSize="38"
//             fontWeight="900"
//             dy=".35em"
//           >
//             TV
//           </text>
//         </svg>
//       </div>

//       {/* Text Container */}
//       <div className="flex flex-col leading-tight">
//         <span className="text-xl font-bold text-white tracking-wide">
//           Tech<span className="text-orange-500">Vision</span>
//         </span>
        
//         {/* Sub-text starting under the 'V' */}
//         <span className="text-[10px] font-medium text-slate-400 uppercase tracking-[0.22em] ml-[2.6rem]">
//           NextGen Solutions
//         </span>
//       </div>
//     </Link>
//   );
// }

"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Logo() {
  const words = ["NextGen Solutions"];
  const [index, setIndex] = useState(0);
  const [subText, setSubText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = words[index];
      
      if (isDeleting) {
        setSubText(fullText.substring(0, subText.length - 1));
        setSpeed(50); // Faster when erasing
      } else {
        setSubText(fullText.substring(0, subText.length + 1));
        setSpeed(150); // Normal speed when typing
      }

      if (!isDeleting && subText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500); // Pause at end
      } else if (isDeleting && subText === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length); // Next word
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [subText, isDeleting, index, speed]);

  return (
    <Link href="/" className="flex items-center gap-3 cursor-pointer group">
      <div className="relative">
        <svg
          width="42"
          height="42"
          viewBox="0 0 100 100"
          className="text-orange-500 transition-transform group-hover:rotate-12 duration-300"
        >
          <circle cx="50" cy="50" r="45" fill="currentColor" />
          <text
            x="50%" y="50%" textAnchor="middle" fill="white"
            fontSize="38" fontWeight="900" dy=".35em"
          >
            TV
          </text>
        </svg>
      </div>

      <div className="flex flex-col leading-tight">
        <span className="text-xl font-bold text-white tracking-wide">
          Tech<span className="text-orange-500">Vision</span>
        </span>
        
        <div className="flex items-center ml-[2.6rem]">
          <span className="text-[10px] font-medium text-slate-400 uppercase tracking-[0.22em] min-h-[1em]">
            {subText}
          </span>
          {/* Custom blinking cursor */}
          <span className="w-[2px] h-3 bg-orange-500 ml-1 animate-pulse" />
        </div>
      </div>
    </Link>
  );
}