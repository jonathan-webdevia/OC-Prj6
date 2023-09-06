import MediaFactory from "../factories/MediaFactory.js";

const displayMedia = async (medias, photographerName) => {
  const mediaContainer = document.querySelector(".media-container");
  mediaContainer.innerHTML = "";
  const galleryRender = (objects) => {
    objects.forEach((object) => {
      const galleryBuilder = new MediaFactory();
      const newMedia = galleryBuilder.render(object, photographerName);
      mediaContainer.appendChild(newMedia);
    });
  };
  galleryRender(medias);
};

// eslint-disable-next-line import/prefer-default-export
export { displayMedia };
