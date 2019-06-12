import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import $ from 'jquery';
import Popper from 'popper.js';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";

//import "../node_modules/jquery/dist/jquery.slim.min.js"
//import "../node_modules/tether/dist/js/tether.min.js"

//import "../node_modules/react/dist/react.min.js"
//import "../node_modules/react-dom/dist/react-dom.min.js"

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
