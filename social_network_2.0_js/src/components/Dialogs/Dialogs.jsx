import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";


export const Dialogs = (props) => {

    let dialogElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElements = props.state.message.map(m => <Message message={m.message} id={m.id}/>)

    let newMessageElement = React.createRef()

    let addMessage = () => {
        let message = newMessageElement.current.value
        alert(message)
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
                <textarea ref={newMessageElement}></textarea>
                <button onClick={addMessage}>Add Message</button>
            </div>

        </div>
    )
}