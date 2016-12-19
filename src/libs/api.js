
let instance = null;

class API {
  constructor() {
    if(!instance){
      instance = this;
    }
    this.API_URL = 'https://api.myjson.com/';
  }

  getList() {
    return fetch(this.API_URL + 'bins/cdt5h', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(function(response) {
        return response.json()
      }).catch(function(ex) {
        console.log('parsing failed', ex)
      });
  }
}

export default new API();