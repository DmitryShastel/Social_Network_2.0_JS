import React from "react";
import s from'./Dialogs.module.css'

export const Dialogs = (props) => {
    return (
        <div className={s.dialogs} >
          <div className={s.dialogsItems}>
              <div className={`${s.dialog} ${s.active}`}>
                  Dima 
              </div>
              <div className={s.dialog}>
                  Sacha
              </div>
              <div className={s.dialog}>
                  Nikolas
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