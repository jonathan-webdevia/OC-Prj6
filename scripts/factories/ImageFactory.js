/* eslint-disable class-methods-use-this */
export default class ImageFactory {
  constructor(data, index) {
    this.id = data.id;
    this.title = data.title;
    this.image = data.image;
    this.likes = data.likes;
    this.index = index;
  }

  createGalleryElmt(src) {
    // create the HTML element
    const article = document.createElement("article");

    const img = document.createElement("img");
    img.setAttribute("src", src + this.image);
    img.setAttribute("class", "lightBoxBtn");
    img.setAttribute("data-id", this.id);

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
    button.appendChild(heart);

    likesP.appendChild(nbrLikes);
    likesP.appendChild(button);

    imgDescription.appendChild(titleP);
    imgDescription.appendChild(likesP);

    article.appendChild(img);
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
    counter.textContent = `${this.index + 1}/${counterLength}`;

    /* ***** create the img elmt ***** */
    const image = document.createElement("img");
    image.setAttribute("src", src + this.image);
    image.setAttribute("class", "mediabloc");

    const description = document.createElement("div");
    description.textContent = this.title;

    /* ***** add elmts in lightbox ***** */
    mediaLightbox.appendChild(counter)
    mediaLightbox.appendChild(image);
    mediaLightbox.appendChild(description);
  }
}
