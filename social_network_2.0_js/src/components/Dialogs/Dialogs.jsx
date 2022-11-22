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

    let dialogData = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Sacha'},
        {id: 3, name: 'Nikolas'}
    ]




    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogData[0].name} id={dialogData[0].id}/>
                <DialogItem name={dialogData[1].name} id={dialogData[1].id}/>
                <DialogItem name={dialogData[2].name} id={dialogData[2].id}/>
            </div>

            <div className={s.message}>
                <Message message='hi'/>
                <Message  message='buy'/>
                <Message message='buy now'/>
            </div>
        </div>
    )
}