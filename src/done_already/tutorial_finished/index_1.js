import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// JSX
ReactDOM.render(
  <div>
    <h1>hello world</h1>
    <p>this is a test</p>
  </div>
  ,
  document.getElementById('root')
);

var myNewP = document.createElement("p")
myNewP.innerHTML = "This is just beginning."

var root = document.getElementById("root")
document.body.insertBefore(myNewP, root)