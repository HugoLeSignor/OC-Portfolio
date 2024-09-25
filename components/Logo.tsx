import React from 'react';

const Logo: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-16 h-16 cursor-pointer">
    <g transform="translate(0,0)">
      <path d="M25,30 L75,30 L25,70 L75,70" stroke="#FFBF00" strokeWidth="3" fill="none"/>
      <path d="M30,20 L70,80" stroke="#FFBF00" strokeWidth="3" fill="none"/>
    </g>
  </svg>
);

export default Logo;