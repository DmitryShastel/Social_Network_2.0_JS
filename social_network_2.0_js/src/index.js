import React from 'react';
import './index.css';
import {addPost, state, subscriber, updateNewPost} from "./redux/state";
import ReactDOM from "react-dom/client";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById('root'));
export let renderEntireTree = (state) => {

    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPost={updateNewPost}/>
        </React.StrictMode>
    );
}



subscriber(renderEntireTree)
renderEntireTree(state)




