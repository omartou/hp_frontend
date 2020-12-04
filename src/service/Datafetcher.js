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
    axios
      .get(url, this.tokenHeader)
      .then((res) => callback(res.data))
      .catch((e) => callback("denied"));
  }

  fetchForLoginAndRegistration(url, userDataObject, callback) {
    axios.post(url, userDataObject).then((res) => callback(res.data));
  }

  // editCharacter(url, userDataObject) {
  //   let object = {
  //     headers: { Authorization: `Bearer ${this.token}` },
  //     name : `${userDataObject.name}`,
  //     alias : `${userDataObject.alias}`,
  //     boggart : `${userDataObject.boggart}`,
  //     patronus : `${userDataObject.patronus}`,
  //     role : `${userDataObject.role}`,
  //     wand : `${userDataObject.wand}`,
  //     house : `${userDataObject.house}`,
  //     bloodStatus : `${userDataObject.bloodStatus}`,
  //     species : `${userDataObject.species}`,
  //     animagus : `${userDataObject.animagus}`,
  //     school : `${userDataObject.school}`,
  //     dumbledoresArmy : `${userDataObject.dumbledoresArmy}`,
  //     deathEater : `${userDataObject.deathEater}`,
  //     orderOfThePhoenix : `${userDataObject.orderOfThePhoenix}`,
  //     ministryOfMagic : `${userDataObject.ministryOfMagic}`,
  //   }
  //   axios.put(url, object).then((res) => console.log("xd"))
  // }

  editCharacter(url, userDataObject) {
    // let object = {
    //   // headers: { Authorization: `Bearer ${this.token}` },
    //   name : `${userDataObject.name}`,
    //   alias : `${userDataObject.alias}`,
    //   boggart : `${userDataObject.boggart}`,
    //   patronus : `${userDataObject.patronus}`,
    //   role : `${userDataObject.role}`,
    //   wand : `${userDataObject.wand}`,
    //   house : `${userDataObject.house}`,
    //   bloodStatus : `${userDataObject.bloodStatus}`,
    //   species : `${userDataObject.species}`,
    //   animagus : `${userDataObject.animagus}`,
    //   school : `${userDataObject.school}`,
    //   dumbledoresArmy : `${userDataObject.dumbledoresArmy}`,
    //   deathEater : `${userDataObject.deathEater}`,
    //   orderOfThePhoenix : `${userDataObject.orderOfThePhoenix}`,
    //   ministryOfMagic : `${userDataObject.ministryOfMagic}`,
    // }
    axios
      .put(
        url, 
        userDataObject,
        {headers: { Authorization: `Bearer ${this.token}` }}
      )
      .then((res) => console.log("xd"))
  }
}

export default Datafetcher;
