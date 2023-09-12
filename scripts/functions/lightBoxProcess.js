import LightBoxFactory from "../factories/LightBoxFactory.js";

const lightBoxProcess = async (objects, photographerName) => {
  const articles = document.querySelectorAll(".media-container article .lightBoxBtn");
  const lightbox = document.querySelector("#lightBox");
  const mediaCloseBtn = document.querySelector(".mediaClose");
  articles.forEach((article) => {
    article.addEventListener("click", () => {
      lightbox.style.display = "flex";

      /* ***** search media index ***** */
      const index = objects.findIndex(
        (data) => data.id === parseInt(article.dataset.id, 10),
      );

      /* ***** lunch lightbox ***** */
      const lightBoxModel = new LightBoxFactory(objects, index);
      lightBoxModel.render(objects, index, photographerName);
      mediaCloseBtn.focus();
    });
  });
  
  mediaCloseBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });
};

// eslint-disable-next-line import/prefer-default-export
export { lightBoxProcess };
