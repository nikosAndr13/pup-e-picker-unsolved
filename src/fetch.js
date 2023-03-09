export function fetchData(url) {
  return fetch(url)
    .then((res) => {
      return res.json();
    })
    .catch((error) => console.error(error));
}
