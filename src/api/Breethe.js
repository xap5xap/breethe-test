export function getCatalogs() {
  return fetch('https://admindev.breethe.com/api/v5/catalogs/default').then(response => {
    return response.json();
  });
}
