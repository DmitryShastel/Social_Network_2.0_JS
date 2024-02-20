import React from "react";
import s from './ProfileInfo.module.css'
import {Preloader} from "../../Common/Preloader/Preloader";


export const ProfileInfo = (props) => {


    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img
                    src='https://www.planetware.com/wpimages/2022/01/world-most-beautiful-islands-st-lucia-caribbean.jpg'/>
            </div>
            <div>
                <img src={props.profile.photos.large}/>
            </div>

        </div>
    )
}