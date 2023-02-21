import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
export let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi how are you', like: 15},
                {id: 2, message: 'It is my first post', like: 23}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dima'},
                {id: 2, name: 'Sacha'},
                {id: 3, name: 'Nikolas'}
            ],

            message: [
                {id: 1, message: 'hi'},
                {id: 2, message: 'buy'},
                {id: 3, message: 'buy now'}
            ],
            newMessageBody: ''
        }
    },
    getState() {
        return this._state;
    },

    _callSubscriber() {
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._callSubscriber(this._state)
    }
}



