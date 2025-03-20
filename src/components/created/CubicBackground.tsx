import React from "react";

const CubicBackground = () => {
  return (
    <div className="w-full h-full overflow-hidden pointer-events-none">
      <svg
        className="w-full h-full"
        viewBox="0 0 500 400"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Cubic bezier curves */}
        {Array.from({ length: 12 }).map((_, i) => {
          const yOffset = i * 33;
          
          return (
            <path
              key={`cubic-${i}`}
              d={`M0 ${yOffset} 
                 C100 ${yOffset + 80}, 200 ${yOffset - 80}, 300 ${yOffset + 40} 
                 S400 ${yOffset - 40}, 500 ${yOffset}`}
              stroke="rgba(255, 255, 255, 0.15)"
              strokeWidth="1.5"
              fill="none"
            />
          );
        })}

        {/* Vertical lines with varying heights */}
        {Array.from({ length: 15 }).map((_, i) => {
          const height = 150 + Math.sin(i * 0.7) * 100;
          const x = 20 + i * 33;
          
          return (
            <line
              key={`vline-${i}`}
              x1={x}
              y1={400 - height}
              x2={x}
              y2="400"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="1"
            />
          );
        })}

        {/* Connection dots */}
        {Array.from({ length: 25 }).map((_, i) => {
          const row = Math.floor(i / 5);
          const col = i % 5;
          
          return (
            <circle
              key={`dot-${i}`}
              cx={80 + col * 90}
              cy={60 + row * 90}
              r="2"
              fill="rgba(255, 255, 255, 0.2)"
            />
          );
        })}

        {/* Connecting lines between dots */}
        {Array.from({ length: 16 }).map((_, i) => {
          const fromRow = Math.floor(i / 4);
          const fromCol = i % 4;
          const toRow = fromRow + (i % 2);
          const toCol = fromCol + 1;
          
          if (toRow < 5 && toCol < 5) {
            return (
              <line
                key={`connect-${i}`}
                x1={80 + fromCol * 90}
                y1={60 + fromRow * 90}
                x2={80 + toCol * 90}
                y2={60 + toRow * 90}
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth="1"
              />
            );
          }
          return null;
        })}
      </svg>
    </div>
  );
};

export default CubicBackground;