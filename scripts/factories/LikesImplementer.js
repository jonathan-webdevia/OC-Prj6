/* eslint-disable class-methods-use-this */
export default class LikesImplementer {
  implementer(element) {
    const like = element.parentNode.firstChild;
    const nbrLike = parseInt(like.textContent, 10);
    if(element.dataset.like === "false") {
        element.setAttribute("data-like", true);
        like.textContent = `${nbrLike + 1  } `;
        element.firstChild.setAttribute("class", "fa-solid fa-heart");
    } else {
        element.setAttribute("data-like", false);
        like.textContent = `${nbrLike - 1  } `;
        element.firstChild.setAttribute("class", "fa-regular fa-heart");
    }
  }
}
