import reportWebVitals from './reportWebVitals';
import './index.css';
import state from './state/state';
import { methods } from './state/state';
import { renderEntireTree } from './render';

renderEntireTree({
  state: state,
  methods: methods
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log)