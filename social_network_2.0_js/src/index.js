import React from 'react';
import './index.css';
import {store} from "./redux/redux-store";
import ReactDOM from "react-dom/client";
import App from "./App";
import {StoreContext} from "./components/StoreContext";

let renderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <StoreContext value={store}>
                <App/>
            </StoreContext>

        </React.StrictMode>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));

renderEntireTree(store.getState())
store.subscribe(() => {
    let state = store.getState()
    renderEntireTree(state)
})