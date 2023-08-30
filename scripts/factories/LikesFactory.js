/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
import LikesImplementer from "./LikesImplementer.js";

export default class LikesFactory {
  totalLikesCounter(elements, dailyPrice) {
    let totalLikes = null;
    elements.forEach((element) => {
      const intValue = parseInt(element.textContent, 10);
      totalLikes += intValue;
    });
    const totalLikeAndPriceElmt = document.createElement("div");
      totalLikeAndPriceElmt.setAttribute(
        "aria-label",
        "Nombre de likes et tarification",
      );
      totalLikeAndPriceElmt.setAttribute("class", "totalLikesAndPrice");

      const totalLikesElmt = document.createElement("span");
      totalLikesElmt.setAttribute("aria-label", "Nombre de mentions j'aime");
      totalLikesElmt.innerHTML = `${totalLikes  } <i class="fa-solid fa-heart"></i>`;

      const priceElmt = document.createElement("span");
      priceElmt.setAttribute("aria-label", "Tarification journalière");
      priceElmt.textContent = `${dailyPrice  }€/jour`;

      totalLikeAndPriceElmt.appendChild(totalLikesElmt);
      totalLikeAndPriceElmt.appendChild(priceElmt);

      return totalLikeAndPriceElmt;
  }

  likeSystem(element) {
    const addAlike = new LikesImplementer();
    addAlike.implementer(element);
  }
}
