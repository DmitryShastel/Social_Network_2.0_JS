import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

export const Profile = (props) => {

    return (
        <div>
            <div>
                <ProfileInfo/>
                <MyPostsContainer store={props.store}/>
            </div>
        </div>
    )
}