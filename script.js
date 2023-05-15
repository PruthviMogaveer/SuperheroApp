// id --> URL/id
//json.image.url
// name -->  URL/search/name of hero
// json.result[0].imae.url

const SUPERHERO_ACCESS_TOKEN = "1723444421425152"
const URL = `https://superheroapi.com/api.php/${SUPERHERO_ACCESS_TOKEN}`

const heroInfoDiv = document.getElementById("heroImg")
const getRandomHero = document.getElementById("getRandomHero")
const getSearchHero = document.getElementById("searchHero")
const searchInput = document.getElementById("searchInput")
const heroName = document.getElementById("name")


const getRandomHeros = (id, name) => {
  fetch(`${URL}/${id}`)
    .then((response) => response.json())
    .then((json) => {
      const charecter = json
      heroInfo(charecter)
    });
};

const getSearchedHero = (name) => {
  fetch(`${URL}/search/${name}`)
    .then((response) => response.json())
    .then((json) => {
      const charecter = json.results[0];
      heroInfo(charecter)
      
    });
};
const statEmoji = {
  intelligence: " 🧠",
  strength: " 💪",
  speed: " 💨",
  durability: " 🏋️‍♂️",
  power: " 📊",
  combat: " 🗡️",
};


const heroInfo = (charecter) => {
    console.log(charecter)
    const name = `<h1>${charecter.name}</h1>`
    const img = `<img src ="${charecter.image.url}" height=200 width=200/>`
    const heroStats = Object.keys(charecter.powerstats).map(stat => {
     return `<p>${stat.toUpperCase()}${statEmoji[stat]} : ${charecter.powerstats[stat]}</p>`
    }).join('')
    heroName.innerHTML = `${name}`
    heroInfoDiv.innerHTML = `${img}<div>${heroStats}</div>`
}

const randomHero = () => {
  const numberOfHero = 731;
  return Math.floor(Math.random() * numberOfHero) + 1;
};
getRandomHero.onclick = () => getRandomHeros(randomHero());
getSearchHero.onclick = () => getSearchedHero(searchInput.value);
