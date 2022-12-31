import React from 'react';
import { Provider } from "react-redux";
import { createRoot } from 'react-dom/client';
import store from "./redux/store";
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// https://react-redux.js.org/tutorials/quick-start

setTimeout(() => {
  // Refreshing the website once, just because of a minor glitch fix
  let reloadedOnce = window.localStorage.getItem("loadedOnce");
  if (reloadedOnce !== "true") {
    window.localStorage.setItem("loadedOnce", "true");
    document.location.reload();
  }
  setTimeout(() => window.localStorage.setItem("loadedOnce", "false"), 1000);
}, 100);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister(); // TODO: please change this to .register() when you will build the application

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
