// Fonction pour mettre à jour la date
function updateDate() {
  const date = new Date().toLocaleDateString('fr-FR');
  document.getElementById("date").innerText = date;
}

// Fonction pour mettre en majuscule la première lettre d'une chaîne de caractères
function firstCapitalLetter(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

// Fonction pour mettre à jour les informations météorologiques sur la carte
function cardUpdate(cityName) {
  // Appel de la fonction getWeather pour obtenir les informations météorologiques de la ville spécifiée
  getWeather(cityName).then(async value => {
      // Mettre à jour le nom de la ville affiché
      document.getElementById("city-date").children.item(0).innerText = value.city;
      
      // Construire le chemin d'accès à l'image en fonction de la condition météorologique actuelle
      let weatherIcon = "./image/images/weatherIcons/" + value.weatherIcon;
      
      // Mettre à jour l'image affichée en fonction de la condition météorologique
      document.getElementById("weather").children.item(0).src = weatherIcon;

      // Mettre à jour le texte affichant la température
      document.getElementById("temp").innerText = parseInt(value.temp) + " °C";
      
      // Mettre à jour le texte affichant le type de météo (ex: "Ensoleillé", "Pluie", etc.)
      document.getElementById("weather-type").innerText = firstCapitalLetter(value.weatherType.description);
      
      // Mettre à jour le texte affichant la vitesse du vent
      document.getElementById("wind-value").innerText = parseInt(value.windSpeed) + " km/h";
      
      // Mettre à jour le texte affichant le pourcentage de précipitation
      document.getElementById("precipitation-value").innerText = parseInt(value.precipitation) + "%";
      
      // Mettre à jour le texte affichant le pourcentage d'humidité
      document.getElementById("humidity-value").innerText = parseInt(value.humidity) + "%";
  });
}

// Mettre à jour la date initiale
updateDate();

// Mettre à jour la date toutes les secondes (ou à un autre intervalle selon vos besoins)
setInterval(updateDate, 1000); // Mettre à jour la date toutes les secondes

// Mettre à jour la météo initiale avec la ville par défaut "Paris"
cardUpdate("Paris");

// Écouter les événements de saisie dans le champ de recherche de ville
document.getElementById("city-name").addEventListener("input", (e) => {
  // Votre logique de gestion de la saisie de la ville ici
  // Vous pouvez appeler la fonction cardUpdate pour mettre à jour la météo en fonction de la nouvelle ville entrée
});

// Écouter l'événement de focus dans le champ de recherche de ville
document.getElementById("city-name").addEventListener("focus", (e) => {
  // Votre logique lorsqu'il y a un focus sur le champ de recherche de ville
});

