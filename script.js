const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const spriteContainer = document.getElementById("sprite-container");
const types = document.getElementById("types");

const pokemon = async () => {
  const inputPoke = searchInput.value.toLowerCase();
  clearData();

  try {
    const response = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${inputPoke}`);
    const data = await response.json();

    if (data && data.id) {
      display(data);
    }
    
  } catch (error) {
    console.error("Error:", error);
    alert("Pokémon not found!");
  }
};

function clearData() {
  pokemonName.textContent = "";
  pokemonId.textContent = "";
  weight.textContent = "";
  height.textContent = "";
  hp.textContent = "";
  attack.textContent = "";
  defense.textContent = "";
  specialAttack.textContent = "";
  specialDefense.textContent = "";
  speed.textContent = "";
  spriteContainer.innerHTML = "";
  types.innerHTML = "";
}

function display(data) {
  pokemonName.textContent = data.name.toUpperCase();
  pokemonId.textContent = `#${data.id}`;
  weight.textContent = `Weight: ${data.weight}`;
  height.textContent = `Height: ${data.height}`;
  hp.textContent = data.stats[0].base_stat;
  attack.textContent = data.stats[1].base_stat;
  defense.textContent = data.stats[2].base_stat;
  specialAttack.textContent = data.stats[3].base_stat;
  specialDefense.textContent = data.stats[4].base_stat;
  speed.textContent = data.stats[5].base_stat;

  const image = document.createElement("img");
  image.src = data.sprites.front_default;
  image.setAttribute('id', 'sprite');
  image.alt = `${data.name}'s sprite`;
  spriteContainer.appendChild(image);

  data.types.forEach(obj => {
    const type = document.createElement("span");
    type.textContent = obj.type.name.toUpperCase();
    type.classList.add("type-span");
    types.appendChild(type);
  });
}

searchButton.addEventListener('click', pokemon);
searchInput.addEventListener('keydown', e => {
  if(e.key === "Enter"){
    pokemon();
  }
});



button.addEventListener("click", pokemon);
input.addEventListener("keydown", e => {
  if(e.key === "Enter"){
    pokemon();
  }
});
