/* eslint-disable import/extensions */

import { getPhotographers } from "../utils/getJsonData.js";
import { photographerTemplate } from "../templates/photographers.js";
import MediaFactory from "../factories/MediaFactory.js";
import LikesFactory from "../factories/LikesFactory.js";
import LightBoxFactory from "../factories/LightBoxFactory.js";

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

const displayMedia = async (objects, photographerName) => {
  const mediaContainer = document.querySelector(".media-container");
  objects.forEach((object) => {
    const galleryBuilder = new MediaFactory();
    const newMedia = galleryBuilder.render(object, photographerName);
    mediaContainer.appendChild(newMedia);
  });
};

const lightBoxProcess = async (objects, photographerName) => {
  const articles = document.querySelectorAll(".media-container article .lightBoxBtn");
  const lightbox = document.querySelector("#lightBox");
  articles.forEach(article => {
    article.addEventListener("click", () => {
      const idMedia = parseInt(article.dataset.id, 10);
      lightbox.style.display = "flex";
      for (let i = 0; i < objects.length; i++) {
        if(parseInt(objects[i].id, 10) === idMedia) {
          const lightBox = new LightBoxFactory();
          lightBox.render(objects, i, photographerName);
        }
      }
    })
  })
};

const likesProcess = async (dailyPrice) => {
  // likes counter
  const likesCounter = async () => {
    const main = document.querySelector("main");
    const elements = document.querySelectorAll(".nbrLikes");
    const factory = new LikesFactory();
    const totalLikes = factory.totalLikesCounter(elements, dailyPrice);
    main.appendChild(totalLikes);
  };
  likesCounter();
  // like click event
  const likeButtons = document.querySelectorAll("button.liker");
  likeButtons.forEach((element) => {
    element.addEventListener("click", () => {
      const factory = new LikesFactory();
      factory.likeSystem(element);
      likesCounter();
    });
  });
  // display total likes
};

const init = async () => {
  // data import
  const { photographersList, mediaList } = await getPhotographers();
  // profilElmt
  const photographer = photographersList.filter(
    (data) => data.id === parseInt(photographerId, 10),
  )[0];
  await displayData(photographer);
  // mediaElmt
  const medias = mediaList.filter(
    (data) => data.photographerId === parseInt(photographerId, 10),
  );
  await displayMedia(medias, photographer.name);
  await lightBoxProcess(medias, photographer.name);
  // include the photographer price bec. it's in same elmt
  await likesProcess(photographer.price);

  // const photographer = photographersList.filter(() => id == photographerId);
};

init();
