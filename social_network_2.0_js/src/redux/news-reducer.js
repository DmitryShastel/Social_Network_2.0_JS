const ADD_NEW = 'ADD-NEW'
const UPDATE_NEW = 'UPDATE-NEW'


let initialState = {
    news: [
        {id: 1, new: 'new#1'},
        {id: 2, new: 'new#2'},
        {id: 3, new: 'new#3'},
    ],
    newNewText: ''
}

export const newsReducer = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case ADD_NEW:
            let newNew = {id: new Date().getTime(), new: state.newNewText}
            state.news.push(newNew)
            state.newNewText = ''
            return state;
        case UPDATE_NEW:
            state.newNewText = action.newNewText
            return state;
        default:
            return state;
    }
}

export const addNewActionCreator = () => {
    return {
        type: ADD_NEW
    }
}

export const updateNewActionCreator = (text) => {
    return {
        type: UPDATE_NEW,
        newNewText: text
    }
}