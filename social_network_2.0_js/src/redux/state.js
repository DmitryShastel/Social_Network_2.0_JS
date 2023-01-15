import {renderEntireTree} from "../render";

export let state = {
    profilePage: {
         posts: [
            {id: 1, message: 'Hi how are you', like: 15},
            {id: 2, message: 'It is my first post', like: 23}
        ]
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

export let addPost = (postMessage) => {
    let newPost = {id:5, message: postMessage, like: 0}
    state.profilePage.posts.push(newPost)
    renderEntireTree(state)
}