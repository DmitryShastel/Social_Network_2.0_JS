import React from 'react';
import './index.css';
import {store} from "./redux/state";
import ReactDOM from "react-dom/client";
import App from "./App";



let renderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App
                state={state}
                addPost={store.addPost.bind(store)}
                updateNewPost={store.updateNewPost.bind(store)}/>
        </React.StrictMode>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
renderEntireTree(store.getState())
store.subscribe(renderEntireTree)





