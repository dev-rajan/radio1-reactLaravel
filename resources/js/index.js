import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import "./assets/css/default.css";
import "./assets/sass/style.scss";
import "./assets/css/animate.css";
import "./assets/css/owl-carousel.css";
import "./assets/css/mediaelementplayer.css";
import "./assets/css/slidenav.css";
import "./assets/css/responsive.css";
import "./assets/vendor/fontawesome4.7.0/css/font-awesome.min.css";
import "./assets/css/error.scss";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
