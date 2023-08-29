// eslint-disable-next-line import/extensions
import ImageFactory from "./ImageFactory.js";
// eslint-disable-next-line import/extensions
import VideoFactory from "./videoFactory.js";

export default class MediaFactory {
  // media type checker & render HTML elmt
  render(object) {
    let factory = null;
    if (object.image) {
      factory = new ImageFactory();
    }
    if (object.video) {
      factory = new VideoFactory();
    }
    return factory.createElmtHTML(object);
  }
}
