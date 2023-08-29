export default class ImageFactory {
  // eslint-disable-next-line class-methods-use-this
  createElmtHTML(object) {
    // const's media recovery
    const { title, image, likes} = object;
    // create the HTML element
    const article = document.createElement("article");
    const imgSRC = `../../assets/images/mimi/${image}`;
    const img = document.createElement("img");
    img.setAttribute("src", imgSRC);

    const imgDescription = document.createElement("div");
    imgDescription.setAttribute("class", "imgDescription");

    const titleP = document.createElement("p");
    titleP.textContent = title;

    const likesP = document.createElement("p");
    likesP.innerHTML = `${likes} &#x2764;`;

    imgDescription.appendChild(titleP);
    imgDescription.appendChild(likesP);

    article.appendChild(img);
    article.appendChild(imgDescription);

    return article;
  }
}
