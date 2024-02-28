import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {newsReducer} from "./news-reducer";
import {usersReducer} from "./users-reducer";

export let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    news: newsReducer,
    usersPage: usersReducer,
    auth: usersReducer,
})

export let store = createStore(reducers)

window.store = store

