import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";


export const DialogItem = (props) => {
    let path = '/dialogs/' + props.id

    return (
        <NavLink to={path} className={navData => navData.isActive ? s.active : s.item}>
            <img className={s.image} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&usqp=CAU'/>
            {props.name}
        </NavLink>
    )

}
