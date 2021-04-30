import React from 'react';
import ReactDOM from 'react-dom';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/jquery/dist/jquery.js";
import './index.css';
// import App from './App';
import Login from "./components/login";
import NavBar from "./components/navBar";
 import reportWebVitals from './reportWebVitals';
/*
This is the main render method that draws the webpage
*/
ReactDOM.render(
   <div>
     <NavBar/>
     <br></br>
     <br></br>
     <Login/>
   </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
