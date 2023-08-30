/* eslint-disable class-methods-use-this */
export default class ImageFactory {
  
  createGalleryElmt(object, src) {
    // const's media recovery
    const { id, title, image, likes } = object;
    // create the HTML element
    const article = document.createElement("article");
    const img = document.createElement("img");
    img.setAttribute("src", src + image);
    img.setAttribute("class", "lightBoxBtn");
    img.setAttribute("data-id", id);

    const imgDescription = document.createElement("div");
    imgDescription.setAttribute("class", "imgDescription");

    const titleP = document.createElement("p");
    titleP.textContent = title;

    const likesP = document.createElement("p");

    const nbrLikes = document.createElement("span");
    nbrLikes.setAttribute("class", "nbrLikes");
    nbrLikes.textContent = `${likes} `;

    const button = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("class", "liker");
    button.setAttribute("data-id", id);
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

  createLightBoxElmt(object, src) {
    const mediaLightbox = document.querySelector("#lightBox .media");
    mediaLightbox.innerHTML = "";
    const image = document.createElement("img");
    image.setAttribute("src", src + object.image);
    image.setAttribute("class", "mediabloc");
    const description = document.createElement("div");
    description.textContent = object.title;

    mediaLightbox.appendChild(image);
    mediaLightbox.appendChild(description);
  }
}
