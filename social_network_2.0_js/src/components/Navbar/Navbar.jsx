import React from "react";
import s from './Navbar.module.css'

export const Navbar = () => {
    return (
        <nav className={s.navbar}>
            <div className={s.navContent}>
                <div>
                    <a className={`${s.item} ${s.active}`} href='/profile'>Profile</a>
                </div>
                <div>
                    <a className={s.item} href='/dialogs'>Message</a>
                </div>
                <div>
                    <a className={s.item} href='/news'>News</a>
                </div>
                <div>
                    <a className={s.item} href='/music'>Music</a>
                </div>
                <div>
                    <a className={s.item} href='/settings'>Settings</a>
                </div>
            </div>
        </nav>
    )
}