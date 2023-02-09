import { apiMethods } from './libTypes';

function fetchWrapper(url: string, method?: apiMethods, body?: any) {
  return new Promise<any>((resolve, reject) => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => resolve(json))
      .catch((error) => reject(error));
  });
}

export default fetchWrapper;
