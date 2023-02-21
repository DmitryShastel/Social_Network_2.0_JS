import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";


export const DialogItem = (props) => {
    let path = '/dialogs/' + props.id

    return (

        <div className={s.dialog + ' ' + s.active}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&usqp=CAU'/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )

}