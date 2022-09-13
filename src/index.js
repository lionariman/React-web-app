import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// ----------------- DATA SECTION -----------------

let dialogsData = [
  { id: '1', name: 'Nariman' },
  { id: '2', name: 'Abdullah' },
  { id: '3', name: 'Linkoln' },
  { id: '4', name: 'Ronaldo' },
  { id: '5', name: 'Messi' }
];

let messagesData = [
  { id: '1', msg: 'hi!' },
  { id: '2', msg: 'Wassap!!!' },
  { id: '3', msg: 'No! It is my burger, not yours!' },
  { id: '4', msg: 'what the heck!' },
  { id: '5', msg: 'well... I got it...' }
];

let posts = [
  { name: 'Nariman', like: "19" },
  { name: 'Abdullah', like: "74" },
  { name: 'Linkoln', like: "2" },
  { name: 'Ronaldo', like: "44" },
  { name: 'Messi', like: "32" }
];

let allData = {};

allData['dialogsData'] = dialogsData;
allData['messagesData'] = messagesData;
allData['postsData'] = posts;

// ----------------- DATA SECTION -----------------

root.render(
  <React.StrictMode>
    <App data={allData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log)
