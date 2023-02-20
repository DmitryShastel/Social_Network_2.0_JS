const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST = 'UPDATE-NEW-POST'

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
            ]
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
        if (action.type === ADD_POST) {
            let newPost = {id: 5, message: this._state.profilePage.newPostText, like: 0}
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }
    }
}


export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST,
        newText: text
    }
}