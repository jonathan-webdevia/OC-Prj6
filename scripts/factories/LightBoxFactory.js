/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
import ImageFactory from "./ImageFactory.js";
import VideoFactory from "./videoFactory.js";

export default class LightBoxFactory {
  render(objects, index, photographerName) {

    const folderName = (photographerName.split(' ')[0]);
    const src = `../../assets/images/${  folderName}/`;

    let i = index;
    let counterIndex = index + 1;
    const previously = document.querySelector("#lightBox .previously");
    const nextly = document.querySelector("#lightBox .nextly");

    this.createElmt(objects[i], src, counterIndex, objects.length);

    previously.addEventListener("click", () => {
      if (i === 0) {
        i = objects.length - 1;
        counterIndex = i;
      } else {
        i--;
        counterIndex -= 1;
      }
      this.createElmt(objects[i], src, counterIndex, objects.length);
    });
    nextly.addEventListener("click", () => {
      if (i === objects.length - 1) {
        i = 0;
        counterIndex = 1;
      } else {
        i++;
        counterIndex += 1;
      }
      this.createElmt(objects[i], src, counterIndex, objects.length);
    });
  }

  createElmt(object, src, i, total) {
    let factory = null;
    if (object.image) {
      factory = new ImageFactory();
    } else if (object.video) {
      factory = new VideoFactory();
    }
    factory.createLightBoxElmt(object, src, i, total);
  }
}
