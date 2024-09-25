import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import ShootingStarsBackground from './ShootingStarsBackground';

const HomePage: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [text, setText] = useState('');
  const [isClient, setIsClient] = useState(false);
  const fullText = 'Développeur Web Frontend';

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    let index = 0;
    const intervalId = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [isClient]);

  if (!isClient) {
    return <div className="min-h-screen bg-gradient-to-b from-[#1b2735] to-[#090a0f]" />;
  }

  return (
    <div className='min-h-screen bg-gradient-to-b from-[#1b2735] to-[#090a0f] text-foreground flex flex-col font-sans relative'>
      <ShootingStarsBackground />
      <header className='p-6 relative z-10'>
        <div
          className='flex flex-col items-center'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Logo />
          <div className='mt-4 w-full max-w-4xl mx-auto relative'>
            <h1
              className={`text-2xl font-semibold text-[#FFBF00] text-center transition-all duration-300 ${
                isHovered ? 'opacity-0' : 'opacity-100'
              }`}
            >
              Bienvenue
            </h1>
            <nav
              className={`absolute top-0 left-0 w-full transition-all duration-300 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <ul className='flex justify-between items-center'>
                <li>
                  <Link href='/' className='text-[#FFBF00] hover:text-[#FFD700] transition-colors'>
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link href='/projets' className='text-[#FFBF00] hover:text-[#FFD700] transition-colors'>
                    Projets
                  </Link>
                </li>
                <li>
                  <Link href='/a-propos' className='text-[#FFBF00] hover:text-[#FFD700] transition-colors'>
                    À propos
                  </Link>
                </li>
                <li>
                  <Link href='/contact' className='text-[#FFBF00] hover:text-[#FFD700] transition-colors'>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className='flex-grow flex flex-col justify-center items-center p-6 relative z-10'>
        <h2 className='text-4xl sm:text-6xl font-bold mb-6 text-white text-center tracking-tight'>
          {text}
          <span className='animate-pulse text-[#FFBF00]'>|</span>
        </h2>
        <p className='text-xl text-center max-w-2xl text-gray-300 font-light leading-relaxed'>
          Bienvenue dans mon Portfolio. Explorez mes projets et découvrez
          comment je peux donner vie à vos idées.
        </p>
      </main>

      <footer className='p-6 text-center text-[#FFBF00] text-sm relative z-10'>
        © {new Date().getFullYear()} Le Signor Hugo. 
      </footer>
    </div>
  );
};

export default HomePage;