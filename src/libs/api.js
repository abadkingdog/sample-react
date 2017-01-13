let instance = null;

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    var error = {
      message: response.statusText,
      code: response.status
    }
    throw error;
  }
}

function parseJSON(response) {
  return response.json()
}

function getQueryString(params) {
  var esc = encodeURIComponent;
  return Object.keys(params)
    .map(k => esc(k) + '=' + esc(params[k]))
    .join('&');
}

class API {
  constructor() {
    if(!instance){
      instance = this;
    }
    this.API_URL = 'https://virtserver.swaggerhub.com/abadkingdog/sampleAPI1/1.0.0/';
  }

  login(username, password) {
    var params = {
      username,
      password
    }

    var fetchData = this._fetch({
      url: 'user/login?' + getQueryString(params)
    })
      .then(checkStatus)
      .then(parseJSON)
      .catch(function(ex) {
        throw(ex)
      });

    return fetchData;
  }

  logout () {
    return this._fetch({
      url: 'user/logout'
    })
      .then(checkStatus)
      .catch((error) => {
        throw (error)
      })
  }

  getPetsByStatus(status) {
    var fetchData = this._fetch({
      url: 'pet/findByStatus?status=' + status
    })
      .then(checkStatus)
      .then(parseJSON)
      .catch(function(ex) {
        throw(ex)
      });

    return fetchData;
  }

  getPetById(petId) {
    var fetchData = this._fetch({
      url: 'pet/' + petId
    })
      .then(checkStatus)
      .then(parseJSON)
      .catch(function(ex) {
        throw(ex)
      });

    return fetchData;
  }

  _fetch(opts) {
    opts = Object.assign({},{
      method: 'GET',
      url: null,
      body: null,
      callback: null
    }, opts)

    var reqOpts = {
      method: opts.method,
      headers: {
        'Accept': 'application/json'
      }
    }
    if (this._sessionToken) {
      reqOpts.headers['Authorization'] = this._sessionToken
    }

    if (opts.method === 'POST' || opts.method === 'PUT') {
      reqOpts.headers['Content-Type'] = 'application/json'
    }

    if (opts.body) {
      reqOpts.body = JSON.stringify(opts.body)
    }

    return fetch(this.API_URL + opts.url, reqOpts);
  }
}

export default new API();