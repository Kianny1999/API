document.addEventListener("DOMContentLoaded", function() {
    const Clanes = document.getElementById("Clanes");
  
    // Genera un número aleatorio entre 1 y 671 (el número máximo de personajes en la API)
    function getRandomCharacterId() {
      return Math.floor(Math.random() * 671) + 1;
    }
  
    // Crea una lista de 10 personajes aleatorios
    const randomCharacterIds = Array.from({ length: 10 }, getRandomCharacterId);
  
    // Realiza las solicitudes para obtener los 10 personajes aleatorios
    Promise.all(
      randomCharacterIds.map(characterId =>
        fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
          .then(response => response.json())
      )
    )
      .then(characters => {
        // Procesa los datos de los personajes y muestra la información
        Personajes.innerHTML = characters
          .map(character => {
            const nombre = character.name;
            const imagen = character.image;
            const origin = character.origin.name;
            const status = character.status;
            return `
              <h2>${nombre}</h2>
              <img class="imgs" src="${imagen}">
              <h1>${origin}</h1>
              <p>${status}</p>
            `;
          })
          .join(""); // Convierte la lista en una cadena HTML
      })
      .catch(error => {
        Personajes.innerHTML = "Error al cargar data";
      });
  });
  
