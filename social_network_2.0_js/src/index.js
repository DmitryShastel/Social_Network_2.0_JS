import React from 'react';
import './index.css';
import {store} from "./redux/redux-store";
import ReactDOM from "react-dom/client";
import App from "./App";


let renderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App
                state={state}
                dispatch={store.dispatch.bind(store)}
                store={store}
            />
        </React.StrictMode>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));

renderEntireTree(store.getState())
store.subscribe(() => {
    let state = store.getState()
    renderEntireTree(state)
})