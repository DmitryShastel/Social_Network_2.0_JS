import React from "react";
import s from './Profile.module.css'

export const Profile = () => {
    return (
        <div className={s.content}>
            <img src='https://www.planetware.com/wpimages/2022/01/world-most-beautiful-islands-st-lucia-caribbean.jpg'/>
            <div className={s.postsContent}>
                <div>Ava + description</div>
                <div>My posts</div>
                <div>New post</div>
                <div>post 1</div>
                <div>post 2</div>
            </div>

        </div>
    )
}