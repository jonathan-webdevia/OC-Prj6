import { displayMedia } from "./displayMedia.js";
import { lightBoxProcess } from "./lightBoxProcess.js";
import liker from "./likesProcess.js";

/* ***** check label event & button states change ***** */
const sort = (mediaList, photographerName, PhotographerPrice) => {

  /* ***** recovery DOM elmts ***** */
  const label = document.querySelector(".sortSelector .label");
  const selectorList = document.querySelector(".sortSelector ul");
  const selectBtn = document.querySelectorAll(".media .sortSelector button");

  /* ***** check label's event click to deploy the selectors ***** */
  label.addEventListener("click", () => {
    selectBtn.forEach((button) => {
      if (button.dataset.label === label.textContent) {
        const invisible = button.closest(".btnContainer");
        invisible.style.display = "none";
      } else {
        const visible = button.closest(".btnContainer");
        visible.style.display = "block";
      }
    });

    /* ***** deploy and anim selector ***** */
    if (selectorList.classList.contains("active")) {
      selectorList.classList.add("unactive");
      selectorList.classList.remove("active");
      label.classList.remove("active");
    } else {
      selectorList.classList.add("active");
      label.classList.add("active");
      selectorList.classList.remove("unactive");
    }
  });

  /* ***** change order in mediaList ***** */
  selectBtn.forEach((button) => {
    button.addEventListener("click", () => {
      /* **** change the label elmt ***** */
      label.textContent = button.dataset.label;

      const selectedValue = button.dataset.sort;
      let newList = null;

      if (selectedValue === "likes") {
        newList = mediaList.sort((a, b) => (a.likes < b.likes ? 1 : -1));
      } else if (selectedValue === "title") {
        newList = mediaList.sort((a, b) => (a.title > b.title ? 1 : -1));
      } else if (selectedValue === "date") {
        newList = mediaList.sort((a, b) => (a.date > b.date ? 1 : -1));
      }

      displayMedia(newList, photographerName);
      lightBoxProcess(newList, photographerName);
      liker(PhotographerPrice);

      /* ***** fold the selector list ***** */
      selectorList.classList.add("unactive");
      selectorList.classList.remove("active");
      label.classList.remove("active");
    });
  });
};

export default sort;
