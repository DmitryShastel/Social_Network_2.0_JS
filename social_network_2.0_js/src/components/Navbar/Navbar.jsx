import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className={s.navbar}>
            <div className={s.navContent}>
                <div>
                    <NavLink to='/profile' className={`${s.item} ${s.active}`} >Profile</NavLink>
                </div>
                <div>
                    <NavLink to='/dialogs' className={s.item} >Message</NavLink>
                </div>
                <div>
                    <NavLink to='/news' className={s.item} >News</NavLink>
                </div>
                <div>
                    <NavLink to='/music' className={s.item} >Music</NavLink>
                </div>
                <div>
                    <NavLink to='/settings' className={s.item} >Settings</NavLink>
                </div>
            </div>
        </nav>
    )
}