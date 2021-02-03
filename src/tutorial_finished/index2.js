import React, { useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';

function MyApp(){
    return (
    <ul>
        <li>10</li>
        <li>20</li>
        <li>30</li>
    </ul>
    )
}

ReactDOM.render(
    <MyApp />
    ,
    document.getElementById('root')
);
var root = document.getElementById('root')
var introduction = document.createElement('div')
introduction.innerHTML = "My name is Yu"
root.appendChild(introduction)