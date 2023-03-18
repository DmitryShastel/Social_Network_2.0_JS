import React from 'react';
import './index.css';
import {store} from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);


// ReactDOM.render(<Provider  store = {store}>
//             <App/>
//         </Provider>,
//
//     document.getElementById('root')
// );


// let renderEntireTree = () => {
//     root.render(
//         <React.StrictMode>
//             <Provider store={store}>
//                 <App/>
//             </Provider>
//
//         </React.StrictMode>
//     );
// }
// const root = ReactDOM.createRoot(document.getElementById('root')

// renderEntireTree(store.getState())
// store.subscribe(() => {
//     let state = store.getState()
//     renderEntireTree(state)
// })

// renderEntireTree();
// store.subscribe(() => {
//     renderEntireTree()
// })
