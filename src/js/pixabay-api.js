export function fetchImages(query) {
  return fetch(
    `https://pixabay.com/api/?key=42410938-e2284def214256f6c05887d1a&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      return data.hits;
    })
    .catch(error => {
      console.log(error);
    });
}
