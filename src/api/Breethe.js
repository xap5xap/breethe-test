// export async function getCatalogs() {
//   console.log('Breethe.js - getCatalogs')
//   const response = await fetch('https://admindev.breethe.com/api/v5/catalogs/default');
//   return response.json();
// }

export function getCatalogs() {
  console.log('Breethe.js - getCatalogs');
  return fetch('https://admindev.breethe.com/api/v5/catalogs/default').then(response => {
    return response.json();
  });
}
