import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/state";


export const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage
    let dialogElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElements = state.message.map(m => <Message message={m.message} id={m.id}/>)
    let newMessageBody = state.newMessageBody


    let onSendMessageClick = (e) => {
        props.store.dispatch(sendMessageActionCreator())
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.store.dispatch(updateNewMessageBodyActionCreator(body))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    {dialogElements}
                </div>

            </div>

            <div className={s.messages}>
                <div className={s.dialog}> {messageElements}</div>

            </div>


        </div>

    )
}

// <div>
//     <div><textarea
//         value={newMessageBody}
//         onChange={onNewMessageChange}
//     /></div>
//     <div>
//         <button onClick={onSendMessageClick}>Add Message</button>
//     </div>
// </div>