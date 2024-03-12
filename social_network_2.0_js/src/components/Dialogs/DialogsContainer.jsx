import React from "react";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}


let AuthRedirectionComponent = WithAuthRedirect(Dialogs)


let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyActionCreator(body))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectionComponent);