let instance = null;

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw response.statusText;
  }
}

function parseJSON(response) {
  return response.json()
}

class API {
  constructor() {
    if(!instance){
      instance = this;
    }
    this.API_URL = 'https://api.myjson.com/';
  }

  getList() {
    var fetchData;

    fetchData = fetch(this.API_URL + 'bins/cdt5h', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(checkStatus)
      .then(parseJSON)
      .catch(function(ex) {
        throw(ex)
      });

    return fetchData;
  }
}

export default new API();