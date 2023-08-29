export default class VideoFactory {
    // eslint-disable-next-line class-methods-use-this
  // eslint-disable-next-line class-methods-use-this
  createElmtHTML(object) {
    // const's media recovery
    const { title, video, likes } = object;
    // create the HTML element
    const article = document.createElement("article");
    const videoSrc = `../../assets/images/mimi/${video}`;
    const media = document.createElement("video");
    media.setAttribute("id", "video");
    const source = document.createElement("source");
    source.setAttribute("src", videoSrc);
    source.setAttribute("type", "video/mp4");
    media.appendChild(source);

    const imgDescription = document.createElement("div");
    imgDescription.setAttribute("class", "imgDescription");

    const titleP = document.createElement("p");
    titleP.textContent = title;

    const likesP = document.createElement("p");
    likesP.innerHTML = `${likes} &#x2764;`;

    imgDescription.appendChild(titleP);
    imgDescription.appendChild(likesP);

    article.appendChild(media);
    article.appendChild(imgDescription);

    return article;
  }
}