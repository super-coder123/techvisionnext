import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 cursor-pointer">
      <svg
        width="40"
        height="40"
        viewBox="0 0 100 100"
        className="text-orange-500"
      >
        <circle cx="50" cy="50" r="45" fill="currentColor" />
        <text
          x="50%"
          y="55%"
          textAnchor="middle"
          fill="white"
          fontSize="40"
          fontWeight="bold"
          dy=".3em"
        >
          TV
        </text>
      </svg>

      <span className="text-xl font-bold text-white tracking-wide">
        TechVision
      </span>
    </Link>
  );
}