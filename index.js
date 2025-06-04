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
puppyList.innerHTML = `puppy-list`;
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
    const puppyUl = document.createElement(`ul`);
    puppyUl.textContent = puppy.name;
    puppyList.appendChild(puppyUl);
  });
};

getPuppyPlayers();


