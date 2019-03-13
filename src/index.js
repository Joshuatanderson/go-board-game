//React
import React from 'react';
import ReactDOM from 'react-dom';
//components
import App from './components/App'
import 'bulma/css/bulma.css';
import './index.css'; //gets included into bundle file

//imports App from app.js, so it can use the app class
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
