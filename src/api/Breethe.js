export function getCatalogs() {
  return fetch('https://admindev.breethe.com/api/v5/catalogs/default').then(response => {
    return response.json();
  });
}

export function authenticate(email, password) {
  //should call api to authenticate
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(`faketoken${email}${password}`);
    }, 100);
  });
}
