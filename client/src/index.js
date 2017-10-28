import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware());

const appTemplate = (
  <div>
    <Provider store={store}>
      <App />
    </Provider>
  </div>
);
ReactDOM.render(appTemplate, document.getElementById('root'));
