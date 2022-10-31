import React from "react";
import s from './Navbar.module.css'

export const Navbar = () => {
    return (
        <nav className={s.navbar}>
            <div className={s.navContent}>
                <div>
                    <a href='/profile' className={`${s.item} ${s.active}`} >Profile</a>
                </div>
                <div>
                    <a href='/dialogs' className={s.item} >Message</a>
                </div>
                <div>
                    <a href='/news' className={s.item} >News</a>
                </div>
                <div>
                    <a href='/music' className={s.item} >Music</a>
                </div>
                <div>
                    <a href='/settings' className={s.item} >Settings</a>
                </div>
            </div>
        </nav>
    )
}