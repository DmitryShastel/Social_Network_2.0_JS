import React from "react";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../StoreContext";
import {connect} from "react-redux";


export const DialogsContainer = (props) => {

    return <StoreContext.Consumer>{

        (store) => {

            let state = store.getState().dialogsPage

            let onSendMessageClick = () => {
                store.dispatch(sendMessageActionCreator())
            }

            let onNewMessageChange = (body) => {
                store.dispatch(updateNewMessageBodyActionCreator(body))
            }

            return <Dialogs
                updateNewMessageBody={onNewMessageChange}
                sendMessage={onSendMessageClick}
                dialogsPage={state}
            />
        }}
    </StoreContext.Consumer>
}

let f1 = () => {
    return {}
}

let f2 = () => {
    return {}
}

let SuperDialogsContainer = connect(f1, f2)(Dialogs);