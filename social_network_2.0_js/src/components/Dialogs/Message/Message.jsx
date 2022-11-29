import React from "react";
import s from './../Dialogs.module.css'

export const Message = (props) => {
    return (
        <div>
            <img className={s.imgMessage} src='https://upload.wikimedia.org/wikipedia/commons/0/05/Google_Messages_logo.svg'/>
            {props.message}</div>
    )
}