import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {newsReducer} from "./news-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";

export let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    news: newsReducer,
})

export let store = createStore(reducers)

window.store = store

