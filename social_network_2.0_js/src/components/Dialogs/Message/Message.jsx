import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = '/dialogs/' + props.id

    return (
        <NavLink to={path} className={navData => navData.isActive ? s.active : s.item}>
            {props.name}
        </NavLink>
    )

}

const Message = (props) => {
    return (
        <div>{props.message}</div>
    )
}


export const Message = (props) => {

    let dialogs = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Sacha'},
        {id: 3, name: 'Nikolas'}
    ]

    let message = [
        {id: 1, message: 'hi'},
        {id: 2, message: 'buy'},
        {id: 3, message: 'buy now'}
    ]

    let dialogElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElements = message.map(m => <Message message={m.message} id={m.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>

            <div className={s.message}>
                {messageElements}
            </div>
        </div>
    )
}