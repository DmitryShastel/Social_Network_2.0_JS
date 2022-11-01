import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

export const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={`${s.dialog} ${s.active}`}>
                    <NavLink to='/dialogs/1' className={ navData => navData.isActive ? s.active : s.item}>
                        Dima
                    </NavLink>
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