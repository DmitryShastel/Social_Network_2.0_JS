import React from "react";
import {Post} from "./MyPost/Post";
import s from './MyPosts.module.css'

export const MyPosts = () => {

    let postData = [
        {id: 1, message:'Hi how are you', like: 15},
        {id: 2, message:'It is my first post', like: 23}
    ]

    return (
           <div className={s.posts}>
               <div>Ava + description</div>
               <h3>My posts</h3>
               <div>
                    <textarea></textarea>
                   <div className={s.button}>
                       <button>Add Post</button>
                   </div>

               </div>

               <Post id={postData[0].id} message={postData[0].message} like={postData[0].like}/>
               <Post id={postData[1].id} message={postData[1].message} like={postData[1].like}/>
           </div>
    )
}