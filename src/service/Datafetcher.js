import axios from 'axios';

class Datafetcher {
  constructor() {
    this.data = null;
    this.token =
      document.cookie.split('=')[1] === '' ? '' : document.cookie.split('=')[1];
    this.tokenHeader = {
      headers: { Authorization: `Bearer ${this.token}` },
    };
  }

  fetchWithTokenHeader(url, callback) {
    axios.get(url, this.tokenHeader).then((res) => callback(res.data));
  }
}
export default Datafetcher;
