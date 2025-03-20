import React from "react";

const MatrixBackground = () => {
  return (
    <div className="w-full h-full overflow-hidden pointer-events-none">
      <svg
        className="w-full h-full"
        viewBox="0 0 500 400"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Digital rain vertical lines */}
        {Array.from({ length: 30 }).map((_, i) => {
          const x = 10 + i * 17;
          const height = 100 + Math.random() * 300;
          const opacity = 0.05 + Math.random() * 0.15;
          
          return (
            <line
              key={`rain-${i}`}
              x1={x}
              y1={0}
              x2={x}
              y2={height}
              stroke={`rgba(255, 255, 255, ${opacity})`}
              strokeWidth="1"
            />
          );
        })}

        {/* Binary circles */}
        {Array.from({ length: 40 }).map((_, i) => {
          const size = Math.random() > 0.7 ? 3 : 1.5;
          const x = 10 + (i % 30) * 17;
          const y = 20 + Math.floor(i / 2) * 50 + (Math.random() * 20);
          
          return (
            <circle
              key={`binary-${i}`}
              cx={x}
              cy={y}
              r={size}
              fill="rgba(255, 255, 255, 0.2)"
            />
          );
        })}

        {/* Data flow paths */}
        {Array.from({ length: 5 }).map((_, i) => {
          const startX = 50 + i * 100;
          
          return (
            <path
              key={`flow-${i}`}
              d={`M${startX} 0 
                 C${startX + 50} 100, ${startX - 50} 200, ${startX + 30} 300 
                 L${startX + 30} 400`}
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="1"
              fill="none"
            />
          );
        })}

        {/* Horizontal data lines */}
        {Array.from({ length: 5 }).map((_, i) => {
          const y = 80 + i * 60;
          const dashArray = i % 2 === 0 ? "5,5" : "1,12";
          
          return (
            <path
              key={`data-h-${i}`}
              d={`M0 ${y} H500`}
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="1"
              strokeDasharray={dashArray}
              fill="none"
            />
          );
        })}

        {/* Connection nodes */}
        {Array.from({ length: 10 }).map((_, i) => {
          const x = 50 + (i % 5) * 100;
          const y = 80 + Math.floor(i / 5) * 180;
          
          return (
            <React.Fragment key={`node-group-${i}`}>
              <circle
                cx={x}
                cy={y}
                r="8"
                fill="rgba(0, 0, 0, 0.5)"
                stroke="rgba(255, 255, 255, 0.15)"
                strokeWidth="1"
              />
              <circle
                cx={x}
                cy={y}
                r="3"
                fill="rgba(255, 255, 255, 0.2)"
              />
            </React.Fragment>
          );
        })}
      </svg>
    </div>
  );
};

export default MatrixBackground;