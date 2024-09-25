import React, { useEffect, useState } from 'react';

const ShootingStarsBackground: React.FC = React.memo(() => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden bg-gradient-to-b from-[#1b2735] to-[#090a0f]">
      <div className="night absolute inset-0 w-full h-full">
        {Array.from({ length: 20 }).map((_, index) => (
          <div key={index} className={`shooting_star star-${index + 1}`} />
        ))}
      </div>
      <style>{`
        .night {
          position: relative;
          width: 100%;
          height: 100%;
          transform: rotateZ(45deg);
          background: transparent;
        }
        .shooting_star {
          position: absolute;
          left: 50%;
          top: 50%;
          height: 1px;
          background: linear-gradient(-45deg, rgba(255, 191, 0, 1), rgba(255, 191, 0, 0));
          border-radius: 999px;
          filter: drop-shadow(0 0 3px rgba(255, 191, 0, 1));
          animation: tail 3000ms ease-in-out infinite, shooting 3000ms ease-in-out infinite;
        }
        .shooting_star::before, .shooting_star::after {
          content: '';
          position: absolute;
          top: calc(50% - 0.5px);
          right: 0;
          height: 1px;
          background: linear-gradient(-45deg, rgba(255, 191, 0, 0), rgba(255, 191, 0, 1), rgba(255, 191, 0, 0));
          border-radius: 100%;
          animation: shining 3000ms ease-in-out infinite;
        }
        .shooting_star::before {
          transform: translateX(50%) rotateZ(45deg);
        }
        .shooting_star::after {
          transform: translateX(50%) rotateZ(-45deg);
        }
        @keyframes tail {
          0% { width: 0; }
          30% { width: ${Math.max(windowSize.width, windowSize.height) * 0.1}px; }
          100% { width: 0; }
        }
        @keyframes shining {
          0% { width: 0; }
          50% { width: ${Math.max(windowSize.width, windowSize.height) * 0.03}px; }
          100% { width: 0; }
        }
        @keyframes shooting {
          0% { transform: translateX(0); }
          100% { transform: translateX(${Math.max(windowSize.width, windowSize.height) * 0.3}px); }
        }
        ${Array.from({ length: 20 }).map((_, i) => `
          .star-${i + 1} {
            top: calc(50% - ${Math.random() * Math.max(windowSize.width, windowSize.height) - Math.max(windowSize.width, windowSize.height) / 2}px);
            left: calc(50% - ${Math.random() * Math.max(windowSize.width, windowSize.height)}px);
            animation-delay: ${Math.random() * 9999}ms;
          }
          .star-${i + 1}::before, .star-${i + 1}::after {
            animation-delay: ${Math.random() * 9999}ms;
          }
        `).join('')}
      `}</style>
    </div>
  );
});

ShootingStarsBackground.displayName = 'ShootingStarsBackground';

export default ShootingStarsBackground;