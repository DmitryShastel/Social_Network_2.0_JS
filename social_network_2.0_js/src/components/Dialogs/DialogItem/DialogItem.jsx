import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";


export const DialogItem = (props) => {
    let path = '/dialogs/' + props.id

    return (
        <NavLink to={path} className={navData => navData.isActive ? s.active : s.item}>
            {props.name}
        </NavLink>
    )

}
