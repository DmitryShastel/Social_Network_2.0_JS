import React from 'react';
import './index.css';
import {store} from "./redux/redux-store";
import ReactDOM from "react-dom/client";
import App from "./App";
import {Provider} from "react-redux";


let renderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <Provider value={store}>
                <App/>
            </Provider>

        </React.StrictMode>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));

renderEntireTree(store.getState())
store.subscribe(() => {
    let state = store.getState()
    renderEntireTree(state)
})