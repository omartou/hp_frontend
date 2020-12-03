import axios from "axios";

class Datafetcher {
  constructor() {
    this.data = null;
    this.token =
      document.cookie.split("=")[1] === "" ? "" : document.cookie.split("=")[1];
    this.tokenHeader = {
      headers: { Authorization: `Bearer ${this.token}` },
    };
  }

  fetch(url, callback) {
    axios.get(url).then((res) => callback(res.data));
  }

  fetchWithTokenHeader(url, callback) {
    axios.get(url, this.tokenHeader)
    .then((res) => callback(res.data)).catch((e) => callback("denied"));
  }

  fetchForRegistration(url, userDataObject, callback) {
    // axios.post(url, userDataObject).then((res) => callback(true));
    axios.post(url, userDataObject).then((res) => callback(res.data));
  }

  fetchForLogin(url, userDataObject, callback) {
    axios.post(url, userDataObject).then((res) => callback(res.data));
  }
}


export default Datafetcher;
