const SEND_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'


let initialState = {
    dialogs: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Sacha'},
        {id: 3, name: 'Nikolas'}
    ],

    messages: [
        {id: 1, message: 'hi'},
        {id: 2, message: 'buy'},
        {id: 3, message: 'buy now'}
    ],
    newMessageBody: ''
}

export const dialogsReducer = (state = initialState, action) => {

    let stateCopy;


    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            stateCopy = {...state, newMessageBody: action.body}
            return stateCopy;

        case SEND_MESSAGE:
            let body = state.newMessageBody

            stateCopy = {...state, newMessageBody: '', messages: [...state.messages, {id: 8, message: body}]}

            return stateCopy;
        default:
            return state
    }
}

export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}
export const updateNewMessageBodyActionCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }
}