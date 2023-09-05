const liker = (price) => {
  /* ***** Select DOM elmts **** */
  const likerBtns = document.querySelectorAll(".liker");
  const likesPriceDOM = document.querySelector(".totalLikesAndPrice");

  /* ***** className that will change heart's type ***** */
  const likeClass = "fa-solid fa-heart";
  const unlikeClass = "fa-regular fa-heart";

  /* ***** create likes counter var ***** */
  let totalLikes = null;

  /* ***** Create the DOM elmts ***** */
  const likesAndPriceDOM = (likesSUM) => `<div class="likesCounter">
                                            <span>${likesSUM}</span> 
                                            <i class="fa-solid fa-heart"></i>
                                          </div>
                                          <div>
                                            ${price}€ / jour
                                          </div>`;

  /* ***** browse the nodelist and update the DOM ***** */
  likerBtns.forEach((likerBtn) => {
    const likeContainer = likerBtn.closest("p").firstChild;
    let nbrLikesMedia = parseInt(likeContainer.textContent, 10);
    totalLikes += nbrLikesMedia;
    likerBtn.addEventListener("click", () => {
      if (likerBtn.dataset.like === "false") {
        likerBtn.setAttribute("data-like", "true");
        likerBtn.firstChild.setAttribute("class", likeClass);
        nbrLikesMedia++;
        totalLikes++;
      } else if (likerBtn.dataset.like === "true") {
        likerBtn.setAttribute("data-like", "false");
        likerBtn.firstChild.setAttribute("class", unlikeClass);
        nbrLikesMedia--;
        totalLikes--;
      }
      likeContainer.textContent = nbrLikesMedia;
      likesPriceDOM.innerHTML = likesAndPriceDOM(totalLikes);
    });
  });
  likesPriceDOM.innerHTML = likesAndPriceDOM(totalLikes);
};

export default liker;
