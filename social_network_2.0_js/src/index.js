import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: 'Hi how are you', like: 15},
    {id: 2, message: 'It is my first post', like: 23}
]

let dialogs = [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Sacha'},
    {id: 3, name: 'Nikolas'}
]

let message = [
    {id: 1, message: 'hi'},
    {id: 2, message: 'buy'},
    {id: 3, message: 'buy now'}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts ={posts} dialogs={dialogs} message={message}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
