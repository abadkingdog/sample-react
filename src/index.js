import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import App from './containers/App';
import Main from './containers/Main';
import Auth from './containers/Auth';

import configureStore from './store/configureStore';
import './bootstrap.min.css';

var store = configureStore();
var history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Main} />
        <Route path="auth" component={Auth}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
