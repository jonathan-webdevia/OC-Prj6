
import Photographers from "../templates/Photographers.js";

const displayData = async (photographer) => {
  /* ***** parent selector ***** */
  const profilCard = document.querySelector(".photograph-header");

  /* ***** create a new profil object ***** */
  const profilModel = new Photographers(photographer);
  const profilCardDom = profilModel.getProfilCardDOM();

  /* ***** add the childnodes elmts ***** */
  profilCard.appendChild(profilCardDom.description);
  profilCard.appendChild(profilCardDom.contactBtn);
  profilCard.appendChild(profilCardDom.profilPicImg);
};

// eslint-disable-next-line import/prefer-default-export
export { displayData };