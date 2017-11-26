import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import "semantic-ui-css/semantic.min.css";
import decode from "jwt-decode";
import App from './App';
import store from "./store"
import { userLoggedIn } from "./store/actions/auth";
import registerServiceWorker from './registerServiceWorker';

if (localStorage.bookWormJWT) {
  const payload = decode(localStorage.bookWormJWT);
  const user    = { 
    token    : localStorage.bookWormJWT,
    email    : payload.email,
    confirmed: payload.confirmed
   };
  store.dispatch(userLoggedIn(user));
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
