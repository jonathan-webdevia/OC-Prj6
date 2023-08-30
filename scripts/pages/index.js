// eslint-disable-next-line import/extensions
import { getPhotographers } from "../utils/getJsonData.js";
// eslint-disable-next-line import/extensions
import { photographerTemplate } from "../templates/photographers.js";

// display photographers data
async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");
  // research template foreach photographer
  photographers.forEach((photographer) => {
    const photographerModel = photographerTemplate(photographer);
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
