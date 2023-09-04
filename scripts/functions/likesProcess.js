// eslint-disable-next-line import/extensions
import LikesFactory from "../factories/LikesFactory.js";

const likesProcess = async (dailyPrice) => {
  // likes counter
  const likesCounter = async () => {
    const main = document.querySelector("main");
    const elements = document.querySelectorAll(".nbrLikes");
    const factory = new LikesFactory();
    const totalLikes = factory.totalLikesCounter(elements, dailyPrice);
    main.appendChild(totalLikes);
  };
  likesCounter();
  // like click event
  const likeButtons = document.querySelectorAll("button.liker");
  likeButtons.forEach((element) => {
    element.addEventListener("click", () => {
      const factory = new LikesFactory();
      factory.likeSystem(element);
      likesCounter();
    });
  });
  // display total likes
};

// eslint-disable-next-line import/prefer-default-export
export { likesProcess };
