import React from 'react';

interface AProposPageProps {
  isDarkMode: boolean;
}

const AProposPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">À Propos de Moi</h1>
      <p className="text-xl mb-8">Apprenez-en plus sur mon parcours et mes compétences.</p>
    </div>
  );
};

export default AProposPage;