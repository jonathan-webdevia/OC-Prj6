/* eslint-disable class-methods-use-this */
export default class VideoFactory {
  createGalleryElmt(object, src) {
    // const's media recovery
    const { id, title, video, likes } = object;
    // create the HTML element
    const article = document.createElement("article");
    article.setAttribute("data-id", id)
    const media = document.createElement("video");
    media.setAttribute("id", "video");
    media.setAttribute("class", "lightBoxBtn");
    media.setAttribute("data-id", id);
    const source = document.createElement("source");
    source.setAttribute("src", src + video);
    source.setAttribute("type", "video/mp4");
    media.appendChild(source);

    const imgDescription = document.createElement("div");
    imgDescription.setAttribute("class", "imgDescription");

    const titleP = document.createElement("p");
    titleP.textContent = title;

    const likesP = document.createElement("p");
    
    const nbrLikes = document.createElement("span");
    nbrLikes.setAttribute("class", "nbrLikes");
    nbrLikes.textContent = `${ likes} `;

    const button = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("class", "liker");
    button.setAttribute("data-id", id);
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

  createLightBoxElmt(object, src, i, total) {
    const mediaLightbox = document.querySelector("#lightBox .media");
    mediaLightbox.innerHTML = "";
    const counter = document.createElement("div");
    counter.setAttribute("class", "counter");
    counter.textContent = `${i  }/${  total}`;
    const video = document.createElement("video");
    video.setAttribute("class", "mediabloc");
    video.setAttribute("autoplay", "true");
    video.setAttribute("muted", "true");
    const source = document.createElement("source");
    source.setAttribute("src", src + object.video);
    source.setAttribute("type", "video/mp4");
    video.appendChild(source);
    const description = document.createElement("div");
    description.textContent = object.title;

    mediaLightbox.appendChild(counter);
    mediaLightbox.appendChild(video);
    mediaLightbox.appendChild(description);
  }
}