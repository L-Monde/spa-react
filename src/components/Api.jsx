export default class Api {
  constructor(config) {
    this._url = config.url;
  }

  getData() {
    return fetch(`${this._url}`).then((response) => response.json());
  }
}
