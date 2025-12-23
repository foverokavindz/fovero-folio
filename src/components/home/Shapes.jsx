import React from 'react';

// Memphis Design Shapes Component - Tech Stack Theme
const Shapes = () => {
  return (
    <div className="shapes">
      {/* TypeScript Logo */}
      <svg
        width="40"
        height="40"
        className="shape s1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="2" y="2" width="46" height="46" fill="#3178C6" stroke="#1A1A2E" strokeWidth="3"/>
        <text x="10" y="38" fontSize="25" fontWeight="bold" fontFamily="Arial, sans-serif" fill="#FFF">TS</text>
      </svg>

      {/* React Logo */}
      <svg
        width="55"
        height="50"
        className="shape s2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="27.5" cy="25" rx="24" ry="9" fill="none" stroke="#61DAFB" strokeWidth="3"/>
        <ellipse cx="27.5" cy="25" rx="24" ry="9" fill="none" stroke="#61DAFB" strokeWidth="3" transform="rotate(60 27.5 25)"/>
        <ellipse cx="27.5" cy="25" rx="24" ry="9" fill="none" stroke="#61DAFB" strokeWidth="3" transform="rotate(120 27.5 25)"/>
        <circle cx="27.5" cy="25" r="5" fill="#61DAFB"/>
      </svg>

      {/* Database Logo */}
      <svg
        width="45"
        height="52"
        className="shape s3"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="22.5" cy="12" rx="18" ry="8" fill="#00D4AA" stroke="#1A1A2E" strokeWidth="3"/>
        <rect x="4.5" y="12" width="36" height="30" fill="#00D4AA" stroke="none"/>
        <line x1="4.5" y1="12" x2="4.5" y2="42" stroke="#1A1A2E" strokeWidth="3"/>
        <line x1="40.5" y1="12" x2="40.5" y2="42" stroke="#1A1A2E" strokeWidth="3"/>
        <ellipse cx="22.5" cy="42" rx="18" ry="8" fill="#00D4AA" stroke="#1A1A2E" strokeWidth="3"/>
        <ellipse cx="22.5" cy="24" rx="18" ry="6" fill="none" stroke="#1A1A2E" strokeWidth="2" strokeDasharray="4 3"/>
      </svg>

      {/* Docker Logo (Whale with containers) */}
      <svg
        width="60"
        height="45"
        className="shape s4"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Whale body */}
        <path
          d="M10 28 Q5 28 5 24 L5 22 Q5 18 12 18 L48 18 Q52 18 52 22 L52 28 Q52 35 40 38 Q30 40 20 38 Q12 36 10 28"
          fill="#2496ED"
          stroke="#1A1A2E"
          strokeWidth="2"
        />
        {/* Containers */}
        <rect x="12" y="20" width="7" height="6" fill="#FFF" stroke="#1A1A2E" strokeWidth="1"/>
        <rect x="21" y="20" width="7" height="6" fill="#FFF" stroke="#1A1A2E" strokeWidth="1"/>
        <rect x="30" y="20" width="7" height="6" fill="#FFF" stroke="#1A1A2E" strokeWidth="1"/>
        <rect x="39" y="20" width="7" height="6" fill="#FFF" stroke="#1A1A2E" strokeWidth="1"/>
        <rect x="21" y="12" width="7" height="6" fill="#FFF" stroke="#1A1A2E" strokeWidth="1"/>
        <rect x="30" y="12" width="7" height="6" fill="#FFF" stroke="#1A1A2E" strokeWidth="1"/>
        <rect x="30" y="4" width="7" height="6" fill="#FFF" stroke="#1A1A2E" strokeWidth="1"/>
        {/* Eye */}
        <circle cx="8" cy="24" r="2" fill="#1A1A2E"/>
      </svg>

      <svg
        width="48"
        height="48"
        className="shape s5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
      >
        {/* Left angle bracket */}
        <polyline
          points="20,12 9,24 20,36"
          fill="none"
          stroke="#9B59B6"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Slash */}
        <line
          x1="23" y1="36" x2="32" y2="12"
          stroke="#9B59B6"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* Right angle bracket */}
        <polyline
          points="28,12 39,24 28,36"
          fill="none"
          stroke="#9B59B6"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Outline for Memphis style */}
        <polyline
          points="20,12 9,24 20,36"
          fill="none"
          stroke="#1A1A2E"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="23" y1="36" x2="32" y2="12"
          stroke="#1A1A2E"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <polyline
          points="28,12 39,24 28,36"
          fill="none"
          stroke="#1A1A2E"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

            <svg
        width="40"
        height="40"
        className="shape s5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="2" y="2" width="46" height="46" fill="#601180FF" stroke="#1A1A2E" strokeWidth="3"/>
        <text x="7" y="35" fontSize="15" fontWeight="bold" fontFamily="Arial, sans-serif" fill="#FFF">.NET</text>
      </svg>

      {/* DSA Logo (Tree/Graph structure) */}
      <svg
        width="55"
        height="50"
        className="shape s6"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Tree lines */}
        <line x1="27.5" y1="12" x2="15" y2="30" stroke="#1A1A2E" strokeWidth="3"/>
        <line x1="27.5" y1="12" x2="40" y2="30" stroke="#1A1A2E" strokeWidth="3"/>
        <line x1="15" y1="30" x2="8" y2="45" stroke="#1A1A2E" strokeWidth="3"/>
        <line x1="15" y1="30" x2="22" y2="45" stroke="#1A1A2E" strokeWidth="3"/>
        <line x1="40" y1="30" x2="33" y2="45" stroke="#1A1A2E" strokeWidth="3"/>
        <line x1="40" y1="30" x2="47" y2="45" stroke="#1A1A2E" strokeWidth="3"/>
        {/* Nodes */}
        <circle cx="27.5" cy="10" r="7" fill="#FF6B9D" stroke="#1A1A2E" strokeWidth="2"/>
        <circle cx="15" cy="28" r="6" fill="#FFE156" stroke="#1A1A2E" strokeWidth="2"/>
        <circle cx="40" cy="28" r="6" fill="#FFE156" stroke="#1A1A2E" strokeWidth="2"/>
        <circle cx="8" cy="44" r="5" fill="#00D4AA" stroke="#1A1A2E" strokeWidth="2"/>
        <circle cx="22" cy="44" r="5" fill="#00D4AA" stroke="#1A1A2E" strokeWidth="2"/>
        <circle cx="33" cy="44" r="5" fill="#00D4AA" stroke="#1A1A2E" strokeWidth="2"/>
        <circle cx="47" cy="44" r="5" fill="#00D4AA" stroke="#1A1A2E" strokeWidth="2"/>
      </svg>

      {/* Mechanical Keyboard Icon - Improved */}
      <svg
        width="54"
        height="28"
        className="shape s7"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 54 28"
      >
        {/* Keyboard body */}
        <rect x="2" y="4" width="50" height="20" rx="4" fill="#FFF8E7" stroke="#1A1A2E" strokeWidth="2"/>
        {/* Top row (Esc, F1-F4) */}
        <rect x="5" y="7" width="4" height="4" rx="1" fill="#FF6B9D" stroke="#1A1A2E" strokeWidth="1"/>
        <rect x="10" y="7" width="4" height="4" rx="1" fill="#FFE156" stroke="#1A1A2E" strokeWidth="1"/>
        <rect x="15" y="7" width="4" height="4" rx="1" fill="#00D4AA" stroke="#1A1A2E" strokeWidth="1"/>
        <rect x="20" y="7" width="4" height="4" rx="1" fill="#9B59B6" stroke="#1A1A2E" strokeWidth="1"/>
        <rect x="25" y="7" width="4" height="4" rx="1" fill="#FF8C42" stroke="#1A1A2E" strokeWidth="1"/>
        <rect x="30" y="7" width="4" height="4" rx="1" fill="#4ECDC4" stroke="#1A1A2E" strokeWidth="1"/>
        <rect x="35" y="7" width="4" height="4" rx="1" fill="#FF6B9D" stroke="#1A1A2E" strokeWidth="1"/>
        <rect x="40" y="7" width="4" height="4" rx="1" fill="#FFE156" stroke="#1A1A2E" strokeWidth="1"/>
        <rect x="45" y="7" width="4" height="4" rx="1" fill="#00D4AA" stroke="#1A1A2E" strokeWidth="1"/>
        {/* Home row (QWERTY) */}
        <rect x="7" y="13" width="4" height="4" rx="1" fill="#9B59B6" stroke="#1A1A2E" strokeWidth="1"/>
        <rect x="12" y="13" width="4" height="4" rx="1" fill="#FF8C42" stroke="#1A1A2E" strokeWidth="1"/>
        <rect x="17" y="13" width="4" height="4" rx="1" fill="#4ECDC4" stroke="#1A1A2E" strokeWidth="1"/>
        <rect x="22" y="13" width="4" height="4" rx="1" fill="#FF6B9D" stroke="#1A1A2E" strokeWidth="1"/>
        <rect x="27" y="13" width="4" height="4" rx="1" fill="#FFE156" stroke="#1A1A2E" strokeWidth="1"/>
        <rect x="32" y="13" width="4" height="4" rx="1" fill="#00D4AA" stroke="#1A1A2E" strokeWidth="1"/>
        <rect x="37" y="13" width="4" height="4" rx="1" fill="#9B59B6" stroke="#1A1A2E" strokeWidth="1"/>
        <rect x="42" y="13" width="4" height="4" rx="1" fill="#FF8C42" stroke="#1A1A2E" strokeWidth="1"/>
        {/* Bottom row (Ctrl, Alt, Space, etc.) */}
        <rect x="10" y="19" width="4" height="4" rx="1" fill="#FFE156" stroke="#1A1A2E" strokeWidth="1"/>
        <rect x="15" y="19" width="4" height="4" rx="1" fill="#00D4AA" stroke="#1A1A2E" strokeWidth="1"/>
        <rect x="20" y="19" width="12" height="4" rx="2" fill="#1A1A2E" stroke="#1A1A2E" strokeWidth="1"/>
        <rect x="33" y="19" width="4" height="4" rx="1" fill="#FF6B9D" stroke="#1A1A2E" strokeWidth="1"/>
        <rect x="38" y="19" width="4" height="4" rx="1" fill="#FFE156" stroke="#1A1A2E" strokeWidth="1"/>
        {/* Decorative Memphis dot */}
        <circle cx="6" cy="24" r="1.2" fill="#FF6B9D" stroke="#1A1A2E" strokeWidth="0.7"/>
        <circle cx="48" cy="24" r="1.2" fill="#00D4AA" stroke="#1A1A2E" strokeWidth="0.7"/>
      </svg>

      {/* Terminal Logo */}
      <svg
        width="55"
        height="45"
        className="shape s8"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="2" y="2" width="50" height="40" fill="#1A1A2E" stroke="#1A1A2E" strokeWidth="2" rx="4"/>
        <rect x="2" y="2" width="50" height="10" fill="#FF6B9D" stroke="#1A1A2E" strokeWidth="2" rx="4"/>
        <circle cx="10" cy="7" r="2" fill="#FF4757"/>
        <circle cx="18" cy="7" r="2" fill="#FFE156"/>
        <circle cx="26" cy="7" r="2" fill="#00D4AA"/>
        <text x="10" y="32" fontSize="14" fontFamily="monospace" fontWeight="bold" fill="#00D4AA">&gt;_</text>
      </svg>

      {/* Cloud Logo */}
      <svg
        width="60"
        height="40"
        className="shape s9"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 32 Q3 32 3 22 Q3 12 15 12 Q17 4 30 4 Q44 4 46 14 Q56 14 56 24 Q56 32 44 32 Z"
          fill="#4ECDC4"
          stroke="#1A1A2E"
          strokeWidth="3"
        />
        <circle cx="22" cy="20" r="3" fill="#1A1A2E"/>
        <circle cx="34" cy="20" r="3" fill="#1A1A2E"/>
        <path d="M24 26 Q30 30 36 26" stroke="#1A1A2E" strokeWidth="2" fill="none"/>
      </svg>

      {/* Laptop Logo */}
      <svg
        width="60"
        height="45"
        className="shape s10"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Screen */}
        <rect x="8" y="5" width="44" height="28" rx="2" fill="#1A1A2E" stroke="#1A1A2E" strokeWidth="2"/>
        <rect x="11" y="8" width="38" height="22" fill="#9B59B6"/>
        {/* Code lines on screen */}
        <line x1="14" y1="13" x2="28" y2="13" stroke="#FFE156" strokeWidth="2"/>
        <line x1="14" y1="18" x2="38" y2="18" stroke="#00D4AA" strokeWidth="2"/>
        <line x1="14" y1="23" x2="32" y2="23" stroke="#FF6B9D" strokeWidth="2"/>
        {/* Base */}
        <path d="M3 35 L8 33 L52 33 L57 35 L57 38 Q57 40 55 40 L5 40 Q3 40 3 38 Z" fill="#C0C0C0" stroke="#1A1A2E" strokeWidth="2"/>
      </svg>

      {/* Binary 1010 Logo */}
      <svg
        width="55"
        height="45"
        className="shape s11"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="2" y="2" width="51" height="41" fill="#FFE156" stroke="#1A1A2E" strokeWidth="3"/>
        <text x="8" y="18" fontSize="12" fontFamily="monospace" fontWeight="bold" fill="#1A1A2E">1010</text>
        <text x="8" y="32" fontSize="12" fontFamily="monospace" fontWeight="bold" fill="#1A1A2E">0101</text>
        <text x="8" y="42" fontSize="8" fontFamily="monospace" fill="#1A1A2E">1100</text>
      </svg>
    </div>
  );
};

export default Shapes;
