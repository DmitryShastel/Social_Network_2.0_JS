let store = {
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
    renderEntireTree() {},
}


let renderEntireTree = () => {}

export let state = {
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
}

export const addPost = () => {
    let newPost = {id: 5, message: state.profilePage.newPostText, like: 0}
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    renderEntireTree(state)
}
export const updateNewPost = (newText) => {
    state.profilePage.newPostText = newText
    renderEntireTree(state)
}
export const subscriber = (observer) => {
    renderEntireTree = observer
}