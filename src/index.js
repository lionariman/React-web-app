import React from 'react';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import store from './store/redux-store';

import MyContext from './context'; // context import (delete me after testing)

const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <MyContext.Provider value={state}>
        <App />
      </MyContext.Provider>
    </React.StrictMode>
  );
}

let subscriber = () => {
  renderEntireTree(store.getState());
}

subscriber();

store.subscribe(subscriber);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
