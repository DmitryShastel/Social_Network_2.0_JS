import React from "react";
import s from './MyPosts.module.css'
import {MyPost} from "./MyPost/MyPost";

export const MyPosts = () => {
    return (
           <div>
               <div>Ava + description</div>
               <div>My posts</div>
               <div>
                    <textarea></textarea>
                   <button>Add Post</button>
               </div>
               <MyPost/>
           </div>
    )
}