import React from "react";
import {Post} from "./MyPost/Post";
import s from './MyPosts.module.css'

export const MyPosts = () => {
    return (
           <div className={s.posts}>
               <div>Ava + description</div>
               <div>My posts</div>
               <div>
                    <textarea></textarea>
                   <button>Add Post</button>
               </div>

               <Post message='Hi how are you' like='  15'/>
               <Post message='It is my first post' like='  23'/>
           </div>
    )
}