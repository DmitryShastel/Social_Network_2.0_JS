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
                    newPostText={props.profilePage.newPostText}
                    // addPost={props.addPost}
                    // updateNewPost={props.updateNewPost}
                    dispatch={props.dispatch}/>
            </div>
        </div>
    )
}