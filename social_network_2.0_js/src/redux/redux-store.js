import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {newsReducer} from "./news-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import {thunk as thunkMiddleware} from 'redux-thunk'

export let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    news: newsReducer,
})

export let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

