import { getPhotographers } from "../utils/getJsonData.js";
import Photographers from "../templates/Photographers.js";

// display photographers data
async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");
  // research template foreach photographer
  photographers.forEach((photographer) => {
    const photographerModel = new Photographers(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // data import
  const { photographersList } = await getPhotographers();
  displayData(photographersList);
}

init();
