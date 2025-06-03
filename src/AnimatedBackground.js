import React from 'react';

const AnimatedBackgroundSVG = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        overflow: 'hidden',
        backgroundColor: '#f9fafb', // Tu color de fondo original (bg-gray-50)
      }}
    >
      <svg
        className="waves"
        xmlns="http://www.w3.org/2000/svg"
        // xmlnsXlink="http://www.w3.org/1999/xlink" // Puedes omitir esto si usas solo href
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
        style={{
          width: '100%',
          height: '35vh', // Aumentado para prueba
          position: 'absolute',
          bottom: 0,
          left: 0,
        }}
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use
            href="#gentle-wave"
            x="48"
            y="0"
            fill="rgba(203, 213, 225, 0.7)" 
            style={{ animation: 'wave 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite' }}
          />
          <use
            href="#gentle-wave"
            x="48"
            y="3"
            fill="rgba(226, 232, 240, 0.5)" 
            style={{ animation: 'wave 18s cubic-bezier(0.55, 0.5, 0.45, 0.5) reverse infinite', animationDelay: '-2s' }}
          />
          <use
            href="#gentle-wave"
            x="48"
            y="5"
            fill="rgba(241, 245, 249, 0.3)" 
            style={{ animation: 'wave 12s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite', animationDelay: '-4s' }}
          />
          <use
            href="#gentle-wave"
            x="48"
            y="7"
            fill="rgba(248, 250, 252, 1)" 
            style={{ animation: 'wave 8s cubic-bezier(0.55, 0.5, 0.45, 0.5) reverse infinite', animationDelay: '-5s' }}
          />
        </g>
      </svg>
      <style jsx global>{`
        @keyframes wave {
          0% {
            transform: translateX(-90px);
          }
          100% {
            transform: translateX(85px);
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackgroundSVG;