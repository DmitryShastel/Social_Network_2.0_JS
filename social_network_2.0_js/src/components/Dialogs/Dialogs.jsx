import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/state";


export const Dialogs = (props) => {

    let dialogElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElements = props.state.message.map(m => <Message message={m.message} id={m.id}/>)

    let newMessageElement = React.createRef()

    let addMessage = () => {
        props.dispatch(addMessageActionCreator())

        // let message = newMessageElement.current.value
        // alert(message)
         newMessageElement.current.value = ''
    }

    let onMessageChange = () => {
        let newMessage = newMessageElement.current.value
        props.dispatch(updateNewMessageActionCreator(newMessage))

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
                    value={props.newMessageText}
                    onChange={onMessageChange}
                />
                <button onClick={addMessage}>Add Message</button>
            </div>

        </div>
    )
}