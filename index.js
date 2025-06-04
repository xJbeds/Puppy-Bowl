// console.log(`TESTING`);

// === Constants ===
const BASE = "https://fsa-puppy-bowl.herokuapp.com/api";
const COHORT = "2505-ftb-web-ft/players"; // Make sure to change this!
const API = `${BASE}/${COHORT}`;

const state = {
  puppies: [],
  selectedPuppy: `none`,
};
// creating elements

const app = document.getElementById(`app`);

const puppyList = document.createElement(`ul`);
app.appendChild(puppyList);

const puppyDetails = document.createElement(`div`);
puppyDetails.id = "puppy-details";
app.appendChild(puppyDetails);

// main api async function

const getPuppyPlayers = async () => {
  const response = await fetch(API);
  const responseJsonObject = await response.json();
  state.puppies = responseJsonObject.data.players;

  renderPuppies();
};

// create element functions

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

    puppyLi.addEventListener("click", () => {
      state.selectedPuppy = puppy;
      renderPuppyDetails();
    });

    puppyList.appendChild(puppyLi);
    puppyLi.appendChild(name);
    puppyLi.appendChild(img);
  });

  const renderPuppyDetails = () => {
    const puppy = state.selectedPuppy;

    if (puppy === "none") {
      return;
    }
    // inner html added to user page

    puppyDetails.className = "selected-puppy";
    puppyDetails.innerHTML = `
    <h2>${puppy.name}</h2>

    <img src="${puppy.imageUrl}" alt="${puppy.name}" />

    <p><strong>ID:</strong> ${puppy.id}</p>

    <p><strong>Breed:</strong> ${puppy.breed}</p>

    <p><strong>Status:</strong> ${puppy.status}</p>

    <p><strong>Team:</strong> ${puppy.team ? puppy.team.name : "Unassigned"}</p>
    `;
  };
};

getPuppyPlayers();

// add an event listener when the user clicks on each li
// make a new function to renderPuppyDetails
// create a new section with inner html
// create new elements per each information given
// appened details to app or li
