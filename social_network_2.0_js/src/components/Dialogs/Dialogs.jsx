import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    return (
        <NavLink to='/dialogs/1' className={navData => navData.isActive ? s.active : s.item}>
            {props.name}
        </NavLink>
    )

}


export const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <div className={`${s.dialog} ${s.active}`}>
                    <DialogItem name='Dima' id='1'/>
                </div>


                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'>
                        Sacha
                    </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'>
                        Nikolas
                    </NavLink>
                </div>

            </div>
            <div className={s.message}>
                <div>hi</div>
                <div>buy</div>
                <div>how are you</div>
            </div>
        </div>
    )
}