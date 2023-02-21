import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/state";


export const Dialogs = (props) => {

    let dialogElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElements = props.state.message.map(m => <Message message={m.message} id={m.id}/>)

    let newMessageElement = React.createRef()

    let onSendMessageClick = () => {
        props.dispatch(sendMessageActionCreator())

        // let message = newMessageElement.current.value
        // alert(message)
         newMessageElement.current.value = ''
    }

    let onNewMessageChange = () => {
        let newMessage = newMessageElement.current.value
        props.dispatch(updateNewMessageBodyActionCreator(newMessage))

    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>

            <div className={s.message}>
                {messageElements}
            </div>
            <div>
                <textarea
                    ref={newMessageElement}
                    value={props.newMessageBody}
                    onChange={onNewMessageChange}
                />
                <button onClick={onSendMessageClick}>Add Message</button>
            </div>

        </div>
    )
}