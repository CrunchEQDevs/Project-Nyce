import React from "react";

const CircuitryBackground = () => {
  return (
    <div className="w-full h-full overflow-hidden pointer-events-none">
      <svg
        className="w-full h-full"
        viewBox="0 0 500 400"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Horizontal lines */}
        {Array.from({ length: 8 }).map((_, i) => (
          <path
            key={`h-${i}`}
            d={`M0 ${50 + i * 50} H500`}
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="1"
            fill="none"
          />
        ))}

        {/* Vertical lines */}
        {Array.from({ length: 10 }).map((_, i) => (
          <path
            key={`v-${i}`}
            d={`M${50 + i * 50} 0 V400`}
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="1"
            fill="none"
          />
        ))}

        {/* Circuit nodes */}
        {Array.from({ length: 20 }).map((_, i) => (
          <circle
            key={`node-${i}`}
            cx={50 + Math.floor(i / 4) * 100}
            cy={50 + (i % 4) * 100}
            r="4"
            fill="rgba(255, 255, 255, 0.2)"
          />
        ))}

        {/* Circuit connections */}
        {Array.from({ length: 15 }).map((_, i) => {
          const startX = 50 + Math.floor(i / 3) * 100;
          const startY = 50 + (i % 3) * 100;
          const endX = startX + 50 + (i % 2) * 50;
          const endY = startY + 50 - (i % 2) * 50;
          
          return (
            <path
              key={`connection-${i}`}
              d={`M${startX} ${startY} L${startX + 25} ${startY} L${startX + 25} ${endY - 25} L${endX} ${endY - 25} L${endX} ${endY}`}
              stroke="rgba(255, 255, 255, 0.15)"
              strokeWidth="1.5"
              fill="none"
            />
          );
        })}
      </svg>
    </div>
  );
};

export default CircuitryBackground;