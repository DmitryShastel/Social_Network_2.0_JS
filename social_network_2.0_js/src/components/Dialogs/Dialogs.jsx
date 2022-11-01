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
    return(
        <div >{props.message}</div>
    )
}


export const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Dima' id='1'/>
                <DialogItem name='Sacha' id='2'/>
                <DialogItem name='Nikolas' id='3'/>
            </div>

            <div className={s.message}>
                <Message message='hi'/>
                <Message  message='buy'/>
                <Message message='buy now'/>
            </div>
        </div>
    )
}