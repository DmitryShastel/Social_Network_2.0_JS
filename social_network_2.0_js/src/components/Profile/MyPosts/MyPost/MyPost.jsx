import React from "react";
import s from './MyPost.module.css'

export const MyPost = () => {
    return (
        <div className={s.mypost}>
            <div className={s.item}>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP0Kl2NFoXYE4jav-CZD1y_5SKKiamvXJwDg&usqp=CAU'/>
                post 1
            </div>
            <div>
                <nav>like</nav>
            </div>
        </div>

    )
}