import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

export const renderEntireTree = (props) => {
    root.render(
        <React.StrictMode>
            <App state={props.state} methods={props.methods} />
        </React.StrictMode>
    );
}
