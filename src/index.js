import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App'
import manageUsers from './reducers/manageUsers'
import { createStore } from 'redux';


// add imports and code
const store = createStore(
  manageUsers,
  window.__REACT_DEVTOOLS_EXTENSION && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
  // add imports and code
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
