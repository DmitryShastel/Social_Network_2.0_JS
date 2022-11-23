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


export const Dialogs = (props) => {

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

    let dialogElements = dialogs.map(m => <DialogItem name={m.name} id={m.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>

            <div className={s.message}>
                {/*<Message message={messageData[0].message} id={messageData[0].id}/>*/}
                {/*<Message message={messageData[1].message} id={messageData[1].id}/>*/}
                {/*<Message message={messageData[2].message} id={messageData[2].id}/>*/}
            </div>
        </div>
    )
}