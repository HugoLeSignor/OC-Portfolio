import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Info, X } from 'lucide-react';

interface ProjetsPageProps {
  isDarkMode: boolean;
}

// Définition mise à jour du type pour un projet
interface Project {
  id: number;
  title: string;
  description: string;
  content: string;
  iframeUrl: string;
}

// Données des projets (à déplacer dans un fichier séparé plus tard)
const projects: Project[] = [
  {
    id: 1,
    title: "Booki",
    description: "Site factice en HTML, CSS pour une agence de voyage",
    content: `
      <div class="project-description">
        <h2 class="text-xl font-bold mb-2">Description du site Booki</h2>
        
        <h3 class="text-lg font-semibold mt-3 mb-1">But du site</h3>
        <p class="mb-2">Booki est un site web de réservation d'hébergements et d'activités pour les vacances, permettant aux utilisateurs de rechercher et découvrir des options pour leur séjour.</p>
        
        <h3 class="text-lg font-semibold mt-3 mb-1">Palette de couleurs</h3>
        <ul class="list-none mb-2">
          <li><span class="inline-block w-4 h-4 mr-2 align-middle" style="background-color: #0065FC;"></span>Principale : #0065FC (bleu)</li>
          <li><span class="inline-block w-4 h-4 mr-2 align-middle" style="background-color: #F2F2F2;"></span>Fond principal : #F2F2F2 (gris clair)</li>
          <li><span class="inline-block w-4 h-4 mr-2 align-middle" style="background-color: #DEEBFF;"></span>Fond des filtres : #DEEBFF (bleu clair)</li>
        </ul>
        
        <h3 class="text-lg font-semibold mt-3 mb-1">Design Responsive</h3>
        <p class="mb-1">Le site s'adapte à trois formats :</p>
        <ul class="list-disc list-inside mb-2">
          <li>Desktop (> 1024px)</li>
          <li>Tablette (768px - 1024px)</li>
          <li>Mobile (< 768px)</li>
        </ul>
        
        <h4 class="text-base font-medium mt-2 mb-1">Adaptations mobiles :</h4>
        <ul class="list-disc list-inside mb-2">
          <li>Réorganisation de l'en-tête</li>
          <li>Modification de l'affichage des filtres</li>
          <li>Changement de l'ordre des sections</li>
          <li>Affichage en colonne des activités</li>
          <li>Réagencement du pied de page</li>
        </ul>
      </div>
    `,
    iframeUrl: "https://hugolesignor.github.io/P2-Booki/"
  },
  {
    id: 2,
    title: "Projet 2",
    description: "Description courte du projet 2",
    content: "<p>Ceci est une description détaillée du projet 2.</p>",
    iframeUrl: "https://example.com/projet2"
  },
  // Ajoutez d'autres projets ici
];

const ProjetsPage: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [showDescription, setShowDescription] = useState(false);
  
    return (
      <div className="min-h-screen p-4 sm:p-6 md:p-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-center">Mes Projets</h1>
        <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-center">Découvrez mes réalisations récentes.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setSelectedProject(project)}>
              <CardContent className="p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-semibold mb-2">{project.title}</h2>
                <p className="text-sm sm:text-base">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
  
        <Dialog 
          open={selectedProject !== null} 
          onOpenChange={() => {
            setSelectedProject(null);
            setShowDescription(false);
          }}
        >
          {selectedProject && (
            <DialogContent className="w-[95vw] h-[90vh] max-w-none p-3 sm:p-4">
              <div className="relative w-full h-full">
                <iframe 
                  src={selectedProject.iframeUrl} 
                  className="w-full h-full border-0"
                  title={selectedProject.title}
                  allowFullScreen
                />
                <button
                  className="absolute top-4 left-4 z-10 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-lg"
                  onClick={() => setShowDescription(!showDescription)}
                  aria-label="Toggle Description"
                >
                  <Info size={24} />
                </button>
                {showDescription && (
                  <div className="absolute inset-0 bg-gray-900 bg-opacity-90 z-20 overflow-auto p-6 scrollbar-hide">
                    <button
                      className="absolute top-4 right-4 bg-transparent hover:bg-red-600 text-white rounded-full p-2 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-300 shadow-lg"
                      onClick={() => setShowDescription(false)}
                      aria-label="Close Description"
                    >
                      <X size={24} />
                    </button>
                    <h2 className="text-2xl font-bold mb-4 text-white">{selectedProject.title}</h2>
                    <div 
                      dangerouslySetInnerHTML={{ __html: selectedProject.content }} 
                      className="text-white prose prose-invert max-w-none"
                    />
                  </div>
                )}
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    );
  };
  
  export default ProjetsPage;