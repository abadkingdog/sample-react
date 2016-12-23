let instance = null;

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
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
        console.log('parsing failed', ex)
      });

    return fetchData;
  }

  setItem() {
    // 
  }
}

export default new API();