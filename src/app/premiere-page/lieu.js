// Récupérer les éléments DOM
const locationInput = document.getElementById('locationInput');
const locationList = document.getElementById('locationList');

// Écouter les événements de saisie dans la barre de recherche
locationInput.addEventListener('input', function() {
  const searchTerm = locationInput.value.toLowerCase(); // Convertir le terme de recherche en minuscules
  
  // Effacer les anciens résultats
  locationList.innerHTML = '';
  
  // Si le terme de recherche est vide, ne rien faire
  if (searchTerm.trim() === '') {
    return;
  }
  
  // Créer un carré pour chaque résultat correspondant
  const locations = ['Pallet Town', 'Viridian City', 'Pewter City', 'Cerulean City', 'Vermilion City', 'Lavender Town', 'Celadon City', 'Fuchsia City', 'Saffron City', 'Cinnabar Island', 'Indigo Plateau', 'New Bark Town', 'Cherrygrove City', 'Violet City', 'Azalea Town', 'Goldenrod City', 'Ecruteak City', 'Olivine City', 'Cianwood City', 'Mahogany Town', 'Blackthorn City']; // Exemple de liste de lieux Pokémon
  const matchingLocations = locations.filter(location => location.toLowerCase().includes(searchTerm)); // Filtrer les lieux correspondant au terme de recherche
  
  matchingLocations.forEach(location => {
    const locationCard = document.createElement('div');
    locationCard.classList.add('location-card');
    locationCard.textContent = location;
    locationList.appendChild(locationCard);
  });
});
