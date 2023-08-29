// eslint-disable-next-line import/extensions
import { getPhotographers } from "../utils/getJsonData.js";
// eslint-disable-next-line import/extensions
import { photographerTemplate } from "../templates/photographers.js";
// eslint-disable-next-line import/extensions
import MediaFactory from "../factories/MediaFactory.js";

// Research id's photographer

const queryString = window.location.search;
const urlDatas = new URLSearchParams(queryString);
const photographerId = urlDatas.get("id");

const displayData = async (photographer) => {
  // Create the profil card
  const profilCard = document.querySelector(".photograph-header");
  const photographProfilTemplate = photographerTemplate(photographer);
  const profilCardDom = photographProfilTemplate.getProfilCardDOM();
  profilCard.appendChild(profilCardDom.description);
  profilCard.appendChild(profilCardDom.contactBtn);
  profilCard.appendChild(profilCardDom.profilPicImg);
};

const displayMedia = async (objects) => {
  const mediaContainer = document.querySelector(".media-container");
  objects.forEach((object) => {
    const test = new MediaFactory().render(object);
    mediaContainer.appendChild(test);
  });
};

const init = async () => {
  // data import
  const { photographersList, mediaList } = await getPhotographers();
  // profilElmt
  const photographer = photographersList.filter(
    (data) => data.id === parseInt(photographerId, 10),
  )[0];
  displayData(photographer);
  // mediaElmt
  const medias = mediaList.filter(
    (data) => data.photographerId === parseInt(photographerId, 10),
  );
  displayMedia(medias);

  // const photographer = photographersList.filter(() => id == photographerId);
};

init();
