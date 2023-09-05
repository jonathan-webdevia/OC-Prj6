/* eslint-disable class-methods-use-this */
export default class VideoFactory {
  constructor(data, index) {
    this.id = data.id;
    this.title = data.title;
    this.video = data.video;
    this.likes = data.likes;
    this.index = index;
  }

  createGalleryElmt(src) {
    // create the HTML element
    const article = document.createElement("article");
    
    const media = document.createElement("video");
    media.setAttribute("id", "video");
    media.setAttribute("class", "lightBoxBtn");
    media.setAttribute("data-id", this.id)

    const source = document.createElement("source");
    source.setAttribute("src", src + this.video);
    source.setAttribute("type", "video/mp4");
    media.appendChild(source);

    const imgDescription = document.createElement("div");
    imgDescription.setAttribute("class", "imgDescription");

    const titleP = document.createElement("p");
    titleP.textContent = this.title;

    const likesP = document.createElement("p");
    
    const nbrLikes = document.createElement("span");
    nbrLikes.setAttribute("class", "nbrLikes");
    nbrLikes.textContent = this.likes;

    const button = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("class", "liker");
    button.setAttribute("data-id", this.id);
    button.setAttribute("data-like", false);
  
    const heart = document.createElement("i");
    heart.setAttribute("class", "fa-regular fa-heart");
    button.appendChild(heart)

    likesP.appendChild(nbrLikes);
    likesP.appendChild(button);

    imgDescription.appendChild(titleP);
    imgDescription.appendChild(likesP);

    article.appendChild(media);
    article.appendChild(imgDescription);

    return article;
  }

  createLightBoxElmt(src, counterLength) {
    /* ***** recover lightBox container & remove chils ***** */
    const mediaLightbox = document.querySelector("#lightBox .media");
    mediaLightbox.innerHTML = "";

    /* ***** add a counter ***** */
    const counter = document.createElement("div");
    counter.setAttribute("class", "counter");
    counter.textContent = `${this.index + 1  }/${  counterLength}`;

    /* ***** create the elmt video ***** */
    const video = document.createElement("video");
    video.setAttribute("class", "mediabloc");
    video.setAttribute("autoplay", "true");
    video.setAttribute("muted", "true");
    // add a src at video
    const source = document.createElement("source");
    source.setAttribute("src", src + this.video);
    source.setAttribute("type", "video/mp4");
    video.appendChild(source);

    const description = document.createElement("div");
    description.textContent = this.title;

    /* ***** add elmts in lightbox ***** */
    mediaLightbox.appendChild(counter)
    mediaLightbox.appendChild(video);
    mediaLightbox.appendChild(description);
  }
}