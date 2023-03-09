import React from 'react';
import './index.css';
import {store} from "./redux/redux-store";
import ReactDOM from "react-dom/client";
import App from "./App";
import {StoreContext} from "./components/StoreContext";


let renderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <StoreContext.Provider value={store}>
                <App/>
            </StoreContext.Provider>

        </React.StrictMode>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));

renderEntireTree(store.getState())
store.subscribe(() => {
    let state = store.getState()
    renderEntireTree(state)
})