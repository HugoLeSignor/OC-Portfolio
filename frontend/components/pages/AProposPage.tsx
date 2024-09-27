import React from 'react';
import Image from 'next/image';
import { FaReact, FaNodeJs, FaSass } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiNextdotjs, SiTailwindcss, SiJavascript } from 'react-icons/si';

const AProposPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center p-8 overflow-y-auto">
      <div className="max-w-2xl w-full">
        <h1 className="text-4xl font-bold mb-6 text-center">À Propos de Moi</h1>
        
        <div className="flex flex-col md:flex-row items-center mb-8">
          <div className="w-48 h-48 relative mb-4 md:mb-0 md:mr-8">
            <Image
              src="/moi.jpg"
              alt="Hugo Le Signor"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <p className="text-xl text-center md:text-left">
            Découvrez mon parcours et mes compétences en développement web.
          </p>
        </div>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Mon Parcours</h2>
          <p className="mb-4 text-justify">
            Passionné par la technologie depuis mon plus jeune âge, j&apos;ai suivi une formation en informatique à OpenClassrooms.
            Pendant l&apos;obtention de mon diplôme, j&apos;ai travaillé sur divers projets qui m&apos;ont permis d&apos;affiner mes compétences en développement web.
            Mon expérience couvre à la fois le développement frontend et backend, me permettant de créer des applications web complètes et performantes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Mes Compétences</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <FaReact className="text-2xl mr-2 text-blue-500" />
              <span>React</span>
            </div>
            <div className="flex items-center">
              <div className="bg-white rounded-full p-0 mr-2">
                <SiNextdotjs className="text-2xl text-black" />
              </div>
              <span>Next.js</span>
            </div>
            <div className="flex items-center">
              <SiJavascript className="text-2xl mr-2 text-yellow-400" />
              <span>JavaScript</span>
            </div>
            <div className="flex items-center">
              <SiTypescript className="text-2xl mr-2 text-blue-600" />
              <span>TypeScript</span>
            </div>
            <div className="flex items-center">
              <SiTailwindcss className="text-2xl mr-2 text-teal-500" />
              <span>TailwindCSS</span>
            </div>
            <div className="flex items-center">
              <FaSass className="text-2xl mr-2 text-pink-500" />
              <span>Sass</span>
            </div>
            <div className="flex items-center">
              <FaNodeJs className="text-2xl mr-2 text-green-600" />
              <span>Node.js</span>
            </div>
            <div className="flex items-center">
              <SiMongodb className="text-2xl mr-2 text-green-500" />
              <span>MongoDB</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AProposPage;