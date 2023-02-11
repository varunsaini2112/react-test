function APIHandler(url: string) {
  return new Promise<any>((resolve, reject) => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => resolve(json))
      .catch((error) => reject(error));
  });
}

export default APIHandler;
