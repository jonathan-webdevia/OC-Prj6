import {displayMedia} from "./displayMedia.js";
import { lightBoxProcess } from "./lightBoxProcess.js";
import liker from "./likesProcess.js";

const sort = (mediaList, photographerName, PhotographerPrice) => {

    const selector = document.querySelector("#tri");

    selector.addEventListener("change", () => {
      const selectedValue = selector.value;
      let newList = null;
      if (selectedValue === "likes") {
        newList = mediaList.sort((a, b) => (a.likes < b.likes ? 1 : -1));
      } else if (selectedValue === "title") {
        newList = mediaList.sort((a, b) => (a.title < b.title ? 1 : -1));
      }
      displayMedia(newList, photographerName);
      lightBoxProcess(newList, photographerName);
      liker(PhotographerPrice);
    });
};

export default sort;
