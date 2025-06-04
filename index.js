// console.log(`TESTING`);

// === Constants ===
const BASE = "https://fsa-puppy-bowl.herokuapp.com/api";
const COHORT = "2505-ftb-web-ft/players"; // Make sure to change this!
const API = `${BASE}/${COHORT}`;

const state = {
  puppies: [],
};

const app = document.getElementById(`app`);

const puppyList = document.createElement(`ul`);
app.appendChild(puppyList);

const getPuppyPlayers = async () => {
  const response = await fetch(API);
  const responseJsonObject = await response.json();
  state.puppies = responseJsonObject.data.players;

  renderPuppies();
};

const renderPuppies = () => {
  puppyList.innerHTML = ``;

  state.puppies.forEach((puppy) => {
    const puppyLi = document.createElement(`li`);
    puppyList.appendChild(puppyLi);

    const name = document.createElement(`h3`);
    name.textContent = puppy.name;

    const img = document.createElement(`img`);
    img.src = puppy.imageUrl;
    img.alt = puppy.name;

    puppyLi.appendChild(name);
    puppyLi.appendChild(img);
  });
};

getPuppyPlayers();

// add an event listener when the user clicks on each li
// make a new function to renderPuppyDetails
// create a new section with inner html
// create new elements per each information given
// appened details to app or li
