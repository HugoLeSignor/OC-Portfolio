import React from 'react';

interface ContactPageProps {
  isDarkMode: boolean;
}

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">Contactez-moi</h1>
      <p className="text-xl mb-8">N'hésitez pas à me contacter pour discuter de vos projets.</p>
    </div>
  );
};

export default ContactPage;