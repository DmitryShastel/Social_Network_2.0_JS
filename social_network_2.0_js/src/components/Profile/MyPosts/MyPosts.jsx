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

               <Post message='Hi how are you' like='  15'/>
               <Post message='It is my first post' like='  23'/>
           </div>
    )
}