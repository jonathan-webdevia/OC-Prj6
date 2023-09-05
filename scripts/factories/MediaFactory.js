import ImageFactory from "../templates/Images.js";
import VideoFactory from "../templates/Video.js";

export default class MediaFactory {
  render(object, photographerName) {
    /* ***** recover firstName of photographer to find folder ***** */
    const folderName = (photographerName.split(' ')[0]);
    const src = `../../assets/images/${  folderName}/`;
    let factory = null;
    /* ***** test media type ***** */
    if (object.image) {
      factory = new ImageFactory(object);
    }
    if (object.video) {
      factory = new VideoFactory(object);
    }
    /* ***** return and object ***** */
    return factory.createGalleryElmt(src);
  }
}
