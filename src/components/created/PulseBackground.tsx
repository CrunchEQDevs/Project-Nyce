import React from "react";

const PulseBackground = () => {
  return (
    <div className="w-full h-full overflow-hidden pointer-events-none">
      <svg
        className="w-full h-full"
        viewBox="0 0 500 400"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Concentric circles */}
        {Array.from({ length: 8 }).map((_, i) => (
          <circle
            key={`circle-${i}`}
            cx="250"
            cy="200"
            r={50 + i * 50}
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="1"
            fill="none"
          />
        ))}

        {/* Radial lines */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 30) * Math.PI / 180;
          const x2 = 250 + Math.cos(angle) * 400;
          const y2 = 200 + Math.sin(angle) * 400;
          
          return (
            <line
              key={`radial-${i}`}
              x1="250"
              y1="200"
              x2={x2}
              y2={y2}
              stroke="rgba(255, 255, 255, 0.15)"
              strokeWidth="1"
            />
          );
        })}

        {/* Pulse waves */}
        {Array.from({ length: 3 }).map((_, i) => {
          const offset = i * 80;
          
          return (
            <path
              key={`pulse-${i}`}
              d={`M0 ${200 + offset} 
                 Q125 ${180 + offset}, 175 ${220 + offset} 
                 T325 ${180 + offset} 
                 T500 ${220 + offset}`}
              stroke="rgba(255, 255, 255, 0.2)"
              strokeWidth="1.5"
              fill="none"
            />
          );
        })}
        
        {/* Data points */}
        {Array.from({ length: 10 }).map((_, i) => (
          <circle
            key={`data-${i}`}
            cx={50 + i * 45}
            cy={200 + Math.sin(i * 0.8) * 50}
            r="3"
            fill="rgba(255, 255, 255, 0.25)"
          />
        ))}
      </svg>
    </div>
  );
};

export default PulseBackground;