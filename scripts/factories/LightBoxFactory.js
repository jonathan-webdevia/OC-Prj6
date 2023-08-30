/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
import ImageFactory from "./ImageFactory.js";
import VideoFactory from "./videoFactory.js";

export default class LightBoxFactory {
  render(objects, index, photographerName) {

    const folderName = (photographerName.split(' ')[0]);
    const src = `../../assets/images/${  folderName}/`;

    let i = index;
    const previously = document.querySelector("#lightBox .previously");
    const nextly = document.querySelector("#lightBox .nextly");

    this.createElmt(objects[i], src);

    previously.addEventListener("click", () => {
      if (i === 0) {
        i = objects.length - 1;
      } else {
        i--;
      }
      this.createElmt(objects[i], src);
    });
    nextly.addEventListener("click", () => {
      if (i === objects.length - 1) {
        i = 0;
      } else {
        i++;
      }
      this.createElmt(objects[i], src);
    });
  }

  createElmt(object, src) {
    let factory = null;
    if (object.image) {
      factory = new ImageFactory();
    } else if (object.video) {
      factory = new VideoFactory();
    }
    factory.createLightBoxElmt(object, src);
  }
}
