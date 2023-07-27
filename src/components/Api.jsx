class Api {
  constructor(config) {
    this._url = config.url;
  }

  getData() {
    return fetch(`${this._url}`).then((response) => response.json());
  }
}
const api = new Api({
  url: "https://jsonplaceholder.typicode.com/posts",
});
export default api;
