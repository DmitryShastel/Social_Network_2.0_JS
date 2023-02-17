import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";


export const Profile = (props) => {

    return (
        <div>
            <div>
                <ProfileInfo/>
                <MyPosts
                    posts={props.profilePage.posts}
                    addPost={props.addPost}
                    updateNewPost={props.updateNewPost}
                    newPostText={props.profilePage.newPostText}/>
            </div>
        </div>
    )
}