import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';

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
        
        <h3 class="text-lg font-semibold mt-3 mb-1">Fonctionnalités principales</h3>
        <ul class="list-disc list-inside mb-2">
          <li>Recherche d'hébergements</li>
          <li>Filtrage des options</li>
          <li>Présentation des hébergements populaires</li>
          <li>Affichage des activités locales</li>
        </ul>
        
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
  
    return (
      <div className="min-h-screen p-8">
        <h1 className="text-4xl font-bold mb-6 text-center">Mes Projets</h1>
        <p className="text-xl mb-8 text-center">Découvrez mes réalisations récentes.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setSelectedProject(project)}>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                <p>{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
  
        <Dialog 
          open={selectedProject !== null} 
          onOpenChange={() => setSelectedProject(null)}
        >
          {selectedProject && (
            <DialogContent className="w-11/12 h-5/6 max-w-7xl bg-background p-4">
              <div className="flex flex-col h-full">
                <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
                <div className="flex-grow flex flex-col md:flex-row gap-4 overflow-hidden">
                  <div className="md:w-1/2 overflow-y-auto pr-4 max-h-[calc(100vh-200px)]">
                    <div dangerouslySetInnerHTML={{ __html: selectedProject.content }} />
                  </div>
                  <div className="md:w-1/2 overflow-hidden">
                    <iframe 
                      src={selectedProject.iframeUrl} 
                      className="w-full h-full border-0 rounded-lg"
                      title={selectedProject.title}
                      allowFullScreen
                      style={{ height: 'calc(100vh - 250px)' }}
                    />
                  </div>
                </div>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    );
  };
  
  export default ProjetsPage;