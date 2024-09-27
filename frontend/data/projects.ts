export const projects = [
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
    // Add other projects here
  ];