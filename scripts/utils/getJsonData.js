// eslint-disable-next-line import/prefer-default-export
export async function getPhotographers() {
  // Data restore
  return fetch("../../data/photographers.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }
      return response.json();
    })
    .then((photographers) => {
      const photographersList = photographers.photographers;
      const mediaList = photographers.media;
      return {
        photographersList,
        mediaList
      };
    });
}
