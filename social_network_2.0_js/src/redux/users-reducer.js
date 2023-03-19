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

export const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state, newMessageBody: action.body
            }

        case SEND_MESSAGE:
            let body = state.newMessageBody

            return {
                ...state, newMessageBody: '', messages: [...state.messages, {id: 8, message: body}]
            };
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