import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";



export const Profile = () => {

    let posts = [
        {id: 1, message: 'Hi how are you', like: 15},
        {id: 2, message: 'It is my first post', like: 23}
    ]


    return (
        <div>
            <div>
                <ProfileInfo/>
                <MyPosts posts={posts}/>
            </div>
        </div>
    )
}