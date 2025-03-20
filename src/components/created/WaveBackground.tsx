import React from "react";

const WaveBackground = () => {
  return (
    <div className="w-full h-full overflow-hidden pointer-events-none">
      <svg
        className="w-full h-full"
        viewBox="0 0 500 400"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Vertical waves matched to the screenshot */}
        {Array.from({ length: 14 }).map((_, i) => (
          <path
            key={i}
            d={`M${40 + i * 34} 0
              Q${140 + i * 10} ${200}, ${40 + i * 34} 400`}
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="1.5"
            fill="none"
          />
        ))}
      </svg>
    </div>
  );
};

export default WaveBackground;