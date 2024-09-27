import React, { useEffect, useState } from 'react';

interface ShootingStarsBackgroundProps {
  isDarkMode: boolean;
}

const ShootingStarsBackground: React.FC<ShootingStarsBackgroundProps> = React.memo(({ isDarkMode }) => {
  const [stars, setStars] = useState<JSX.Element[]>([]);
  const starColor = isDarkMode ? 'rgba(255, 191, 0, 1)' : 'rgba(30, 144, 255, 1)';
  const backgroundFrom = isDarkMode ? '#1b2735' : '#f0f8ff';
  const backgroundTo = isDarkMode ? '#090a0f' : '#e6f3ff';

  useEffect(() => {
    const newStars = Array.from({ length: 20 }).map((_, index) => (
      <div 
        key={index} 
        className={`shooting_star star-${index + 1}`} 
        style={{
          top: `${Math.random() * 100}vh`,
          left: `${Math.random() * 100}vw`,
          animationDelay: `${Math.random() * 5000}ms`,
        }}
      />
    ));
    setStars(newStars);
  }, []);

  return (
    <div className={`fixed inset-0 overflow-hidden bg-gradient-to-b from-[${backgroundFrom}] to-[${backgroundTo}] transition-colors duration-300`}>
      <div className="night absolute inset-0">
        {stars}
      </div>
      <style>{`
        .night {
          position: relative;
          transform: rotateZ(45deg);
          background: transparent;
        }
        .shooting_star {
          position: absolute;
          height: 3px;
          background: linear-gradient(-45deg, ${starColor}, ${starColor.replace('1)', '0)')});
          border-radius: 999px;
          filter: drop-shadow(0 0 6px ${starColor});
          animation: tail 5000ms ease-in-out infinite, shooting 5000ms ease-in-out infinite;
        }
        .shooting_star::before, .shooting_star::after {
          content: '';
          position: absolute;
          top: calc(50% - 1.5px);
          right: 0;
          height: 3px;
          background: linear-gradient(-45deg, ${starColor.replace('1)', '0)')}, ${starColor}, ${starColor.replace('1)', '0)')});
          border-radius: 100%;
          transform: translateX(50%) rotateZ(45deg);
          animation: shining 5000ms ease-in-out infinite;
        }
        .shooting_star::after {
          transform: translateX(50%) rotateZ(-45deg);
        }
        @keyframes tail {
          0% { width: 0; }
          30% { width: 150px; }
          100% { width: 0; }
        }
        @keyframes shining {
          0% { width: 0; }
          50% { width: 30px; }
          100% { width: 0; }
        }
        @keyframes shooting {
          0% { transform: translateX(-300px); }
          100% { transform: translateX(calc(100vw + 300px)); }
        }
      `}</style>
    </div>
  );
});

ShootingStarsBackground.displayName = 'ShootingStarsBackground';

export default ShootingStarsBackground;