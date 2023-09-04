import ImageFactory from "./ImageFactory.js";
import VideoFactory from "./videoFactory.js";

export default class LightBoxFactory {
  render(objects, index, phName) {
    const folderName = phName.split(" ")[0];
    const src = `../../assets/images/${folderName}/`;

    /* ***** control lightBox ***** */
    let currentIndex = index;
    const previousBtn = document.querySelector(".previously");
    const nextBtn = document.querySelector(".nextly");

    const lightBox = (i) => {
      let factory = null;
      if (objects[i].image) {
        factory = new ImageFactory(objects[i], i);
      } else if (objects[i].video) {
        factory = new VideoFactory(objects[i], i);
      }
      factory.createLightBoxElmt(src, objects.length);
    };

    const nextly = () => {
      currentIndex++;
      if (currentIndex === objects.length) {
        currentIndex = 0;
      }
      lightBox(currentIndex);
    };

    const previously = () => {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = objects.length - 1;
      }
      lightBox(currentIndex);
    };

    /* ***** event checking ***** */
    nextBtn.addEventListener("click", nextly);
    previousBtn.addEventListener("click", previously);
    window.addEventListener("keydown", (event) => {
      // lightBox controller
      if (event.code === "ArrowRight") {
        nextly();
      } else if (event.code === "ArrowLeft") {
        previously();
      }
      // close lightBox
      if (event.code === "Escape") {
        const lightbox = document.querySelector("#lightBox");
        lightbox.style.display = "none";
      }
    });
    lightBox(currentIndex);
  }
}
