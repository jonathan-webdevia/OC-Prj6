export default class Photographers {
  constructor(data) {
    this.city = data.city;
    this.country = data.country;
    this.id = data.id;
    this.name = data.name;
    this.portrait = data.portrait;
    this.price = data.price;
    this.tagline = data.tagline;
    this.picture = `./assets/photographers/${data.portrait}`;
    this.url = `./photographer.html?id=${this.id}`;
  }

  getUserCardDOM() {
    const article = document.createElement("article");
    article.setAttribute(
      "aria-label",
      "Carte de présentation d'un photographe.",
    );

    /* ***** header creation width h2 & img as link ***** */
    const header = document.createElement("div");
    header.setAttribute("class", "card--header");
    header.setAttribute("aria-label", "Photo et nom du photogarphe")
    const link = document.createElement("a");
    link.setAttribute("href", this.url);
    link.setAttribute("aria-label", "Redirection vers la page du photographe.");
    // profil picture choiced by the photographer
    const profilPic = document.createElement("img");
    profilPic.setAttribute("src", this.picture);
    profilPic.setAttribute("alt", "Photo de profil du photographe");
    // photographer's name
    const phName = document.createElement("h2");
    phName.textContent = this.name;
    phName.setAttribute("aria-label", "Prénom du photographe");
    // add elmts in header
    link.appendChild(profilPic);
    link.appendChild(phName);
    header.appendChild(link);

    /* ***** create body's card ***** */
    const body = document.createElement("div");
    body.setAttribute("class", "card--body");
    body.setAttribute(
      "aria-label",
      "Description des services proposés pas le photographe.",
    );
    // photographer's geolocation
    const location = document.createElement("h3");
    location.textContent = `${this.city}, ${this.country}`;
    location.setAttribute("aria-label", "Localisation du photographe");
    // photographer's citation
    const citation = document.createElement("p");
    citation.setAttribute("class", "citation");
    citation.textContent = this.tagline;
    citation.setAttribute("aria-label", "Citation choisi par le photographe");
    // photographer's citation
    const rate = document.createElement("p");
    rate.setAttribute("class", "rate");
    rate.textContent = `${this.price}€/jour`;
    rate.setAttribute("aria-label", "Tarification journalière");
    // add elmt in body
    body.appendChild(location);
    body.appendChild(citation);
    body.appendChild(rate);

    /* ***** article constructor ***** */
    article.appendChild(header);
    article.appendChild(body);

    // return article
    return article;
  }

  getProfilCardDOM() {
    /* ***** Create profil's description ***** */
    const description = document.createElement("div");
    description.setAttribute("class", "profil-description");
    // photographer's name
    const phName = document.createElement("h2");
    phName.textContent = this.name;
    // photographer's location
    const phLocation = document.createElement("h3");
    phLocation.textContent = `${this.city}, ${this.country}`;
    // photographer's citation
    const phTagline = document.createElement("p");
    phTagline.textContent = this.tagline;
    // add elmts in description block
    description.appendChild(phName);
    description.appendChild(phLocation);
    description.appendChild(phTagline);

    /* ***** create contact button ***** */
    const contactBtn = document.createElement("button");
    contactBtn.textContent = "Contactez-moi";
    contactBtn.setAttribute("class", "contact_button");
    contactBtn.setAttribute("onclick", "displayModal()");

    /* ***** create the profil picture elmt ***** */
    const profilPicImg = document.createElement("img");
    profilPicImg.setAttribute("src", this.picture);

    return { description, contactBtn, profilPicImg };
  }
}
