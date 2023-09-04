// eslint-disable-next-line import/prefer-default-export
export async function getPhotographers(id) {
  // variables define
  let photographersList = null;
  let mediaList = null;
  // Data restore
  return fetch("../../data/photographers.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }
      return response.json();
    })
    .then((photographers) => {
      if(id) {
        photographersList = photographers.photographers.filter((data) => data.id === parseInt(id, 10));
        mediaList = photographers.media.filter((data) => data.photographerId === parseInt(id, 10));
      } else {
        photographersList = photographers.photographers;
        mediaList = null;
      }
      return {
        photographersList,
        mediaList
      };
    });
}
