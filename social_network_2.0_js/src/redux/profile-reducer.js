const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST = 'UPDATE-NEW-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'


let initialState = {
    posts: [
        {id: 1, message: 'Hi how are you', like: 15},
        {id: 2, message: 'It is my first post', like: 23}
    ],
    newPostText: '',
    profile: null
}

export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {id: 5, message: state.newPostText, like: 0}
            return {
                ...state, posts: [...state.posts, newPost], newPostText: ''
            }
        }
        case UPDATE_NEW_POST: {
            return {
                ...state, newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            }
        }
        default:
            return state
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
export const setUserProfileActionCreator = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}