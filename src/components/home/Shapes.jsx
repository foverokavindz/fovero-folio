import React from 'react';

// Memphis Design Shapes Component
const Shapes = () => {
  return (
    <div className="shapes">
      {/* Memphis Squiggle */}
      <svg
        width="60"
        height="30"
        className="shape s1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 25 Q15 5 25 15 T45 15 T55 5"
          stroke="#FF6B9D"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      {/* Memphis Triangle - Filled */}
      <svg
        width="50"
        height="45"
        className="shape s2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          points="25,5 45,40 5,40"
          fill="#FFE156"
          stroke="#1A1A2E"
          strokeWidth="3"
        />
      </svg>

      {/* Memphis Circle - Striped */}
      <svg
        width="45"
        height="45"
        className="shape s3"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="stripes1" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="6" stroke="#1A1A2E" strokeWidth="3" />
          </pattern>
        </defs>
        <circle cx="22.5" cy="22.5" r="20" fill="url(#stripes1)" stroke="#1A1A2E" strokeWidth="3"/>
      </svg>

      {/* Memphis Plus/Cross */}
      <svg
        width="35"
        height="35"
        className="shape s4"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="12" y="2" width="11" height="31" fill="#00D4AA" stroke="#1A1A2E" strokeWidth="2"/>
        <rect x="2" y="12" width="31" height="11" fill="#00D4AA" stroke="#1A1A2E" strokeWidth="2"/>
      </svg>

      {/* Memphis Zigzag */}
      <svg
        width="70"
        height="25"
        className="shape s5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polyline
          points="5,20 15,5 25,20 35,5 45,20 55,5 65,20"
          stroke="#9B59B6"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Memphis Semi-Circle */}
      <svg
        width="50"
        height="30"
        className="shape s6"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 25 A20 20 0 0 1 45 25"
          fill="#FF6B9D"
          stroke="#1A1A2E"
          strokeWidth="3"
        />
      </svg>

      {/* Memphis Square with Dot */}
      <svg
        width="40"
        height="40"
        className="shape s7"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="5" y="5" width="30" height="30" fill="#FFE156" stroke="#1A1A2E" strokeWidth="3"/>
        <circle cx="20" cy="20" r="6" fill="#1A1A2E"/>
      </svg>

      {/* Memphis Donut */}
      <svg
        width="45"
        height="45"
        className="shape s8"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="22.5" cy="22.5" r="18" fill="none" stroke="#4ECDC4" strokeWidth="8"/>
        <circle cx="22.5" cy="22.5" r="18" fill="none" stroke="#1A1A2E" strokeWidth="2"/>
      </svg>

      {/* Memphis Lightning Bolt */}
      <svg
        width="30"
        height="50"
        className="shape s9"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          points="18,0 5,22 14,22 10,50 25,20 16,20"
          fill="#FF8C42"
          stroke="#1A1A2E"
          strokeWidth="2"
        />
      </svg>

      {/* Memphis Star */}
      <svg
        width="45"
        height="45"
        className="shape s10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          points="22.5,2 27,17 42,17 30,27 35,42 22.5,32 10,42 15,27 3,17 18,17"
          fill="#00D4AA"
          stroke="#1A1A2E"
          strokeWidth="2"
        />
      </svg>

      {/* Memphis Dotted Circle */}
      <svg
        width="50"
        height="50"
        className="shape s11"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="25" cy="25" r="20" fill="none" stroke="#FF6B9D" strokeWidth="4" strokeDasharray="8 4"/>
      </svg>
    </div>
  );
};

export default Shapes;
