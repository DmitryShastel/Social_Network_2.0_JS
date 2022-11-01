import React from "react";
import s from'./Dialogs.module.css'
import {NavLink} from "react-router-dom";

export const Dialogs = (props) => {
    return (
        <div className={s.dialogs} >
          <div className={s.dialogsItems}>
              <NavLink className={`${s.dialog} ${s.active}`}>
                  Dima
              </NavLink>
              <NavLink className={s.dialog}>
                  Sacha
              </NavLink>
              <NavLink className={s.dialog}>
                  Nikolas
              </NavLink>
          </div>
            <div className={s.message}>
                <div>hi</div>
                <div>buy</div>
                <div>how are you</div>
            </div>
        </div>
    )
}