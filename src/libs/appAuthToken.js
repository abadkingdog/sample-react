export default class AppAuthToken {
  /**
   * ## AppAuthToken
   *
   * set the key
   */
  constructor () {
    this.SESSION_TOKEN_KEY = 'SESSION_TOKEN_KEY';
    this.store = sessionStorage;
  }
  /**
   * ### storeSessionToken
   * Store the session key 
   */
  storeSessionToken(sessionToken) {
    return this.store.setItem(this.SESSION_TOKEN_KEY, sessionToken);
  }
  /**
   * ### getSessionToken
   * @param {String} sessionToken the currentUser
   */
  getSessionToken(sessionToken) {
    if (sessionToken) {
      return this.store.setItem(this.SESSION_TOKEN_KEY, sessionToken);
    }
    return this.store.getItem(this.SESSION_TOKEN_KEY);
  }
  /**
   * ### deleteSessionToken
   * Deleted during log out
   */
  deleteSessionToken() {
    return this.store.removeItem(this.SESSION_TOKEN_KEY);
  }
}

