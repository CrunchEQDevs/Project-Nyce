import React from "react";

const XLogoOfficial = ({ size = 24, color = "white", className = "" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill={color}
      className={className}
    >
      <path d="M13.3174 10.7749L19.1457 4H17.7646L12.7039 9.88256L8.66193 4H4L10.1312 12.8955L4 20H5.38116L10.7447 13.7878L15.0223 20H19.6842L13.3171 10.7749H13.3174ZM11.4585 12.9738L10.8262 12.0881L5.87886 5.03974H7.81764L11.7719 10.7102L12.4042 11.5959L17.635 19.0075H15.6962L11.4585 12.9742V12.9738Z"/>
    </svg>
  );
};

export default XLogoOfficial;