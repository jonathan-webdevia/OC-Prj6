import { getPhotographers } from "../utils/getJsonData.js";

// Research id's photographer
const queryString = window.location.search;
const urlDatas = new URLSearchParams(queryString);
const photographerId = urlDatas.get("id");

// import utils functons
import { displayData } from "../functions/displayData.js";
import { displayMedia } from "../functions/displayMedia.js";
import liker from "../functions/likesProcess.js";
import { lightBoxProcess } from "../functions/lightBoxProcess.js";
import sort from "../functions/sort.js";

const init = async () => {
  // data import
  const { photographersList, mediaList } =
    await getPhotographers(photographerId);

  // isolate photographer's data
  const photographer = photographersList[0];

  // lunch imported functions
  await displayData(photographersList[0]);
  await displayMedia(mediaList, photographer.name);
  await lightBoxProcess(mediaList, photographer.name);

  liker(photographer.price);
  sort(mediaList, photographer.name, photographer.price);
  
};

init();
