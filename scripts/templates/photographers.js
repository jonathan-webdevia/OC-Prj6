// eslint-disable-next-line import/prefer-default-export
export function photographerTemplate(data) {
  const { city, country, id, name, portrait, price, tagline } = data;

  const picture = `assets/photographers/${portrait}`;
  const url = `./photographer.html?id=${id}`;

  const getUserCardDOM = () => {
    // Create an article
    const article = document.createElement("article");
    article.setAttribute(
      "aria-label",
      "Carte de présentation d'un photographe.",
    );
    // create header width h2 & img as link
    const header = document.createElement("div");
    header.setAttribute("class", "card--header");

    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("aria-label", "Redirection vers la page du photographe.");

    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.setAttribute("alt", "Photo de profil du photographe");

    const h2 = document.createElement("h2");
    h2.textContent = name;
    h2.setAttribute("aria-label", "Nom du photographe");

    link.appendChild(img);
    link.appendChild(h2);
    header.appendChild(link);

    // create body
    const body = document.createElement("div");
    body.setAttribute("class", "card--body");
    body.setAttribute(
      "aria-label",
      "Description des services proposés pas le photograohe.",
    );

    const location = document.createElement("h3");
    location.textContent = `${city},${country}`;
    location.setAttribute("aria-label", "Localisation du photographe");

    const citation = document.createElement("p");
    citation.setAttribute("class", "citation");
    citation.textContent = tagline;
    citation.setAttribute("aria-label", "Citation choisi par le photographe");

    const rate = document.createElement("p");
    rate.setAttribute("class", "rate");
    rate.textContent = `${price}€/jour`;
    rate.setAttribute("aria-label", "Tarification journalière");

    body.appendChild(location);
    body.appendChild(citation);
    body.appendChild(rate);

    article.appendChild(header);
    article.appendChild(body);

    // return template
    return article;
  };

  function getProfilCardDOM() {
    const description = document.createElement("div");
    description.setAttribute("class", "profil-description");

    const nameH2 = document.createElement("h2");
    nameH2.textContent = name;

    const locationH3 = document.createElement("h3");
    locationH3.textContent = `${city}, ${country}`;

    const taglineP = document.createElement("p");
    taglineP.textContent = tagline;

    description.appendChild(nameH2);
    description.appendChild(locationH3);
    description.appendChild(taglineP);

    const contactBtn = document.createElement("button");
    contactBtn.textContent = "Contactez-moi";
    contactBtn.setAttribute("class", "contact_button");
    contactBtn.setAttribute("onclick", "displayModal()");

    const profilPicImg = document.createElement("img");
    profilPicImg.setAttribute("src", picture);

    return { description, contactBtn, profilPicImg };
  }

  return { getUserCardDOM, getProfilCardDOM };
}
