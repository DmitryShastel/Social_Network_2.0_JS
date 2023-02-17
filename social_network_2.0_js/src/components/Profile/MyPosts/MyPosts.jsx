import React from "react";
import {Post} from "./MyPost/Post";
import s from './MyPosts.module.css'

export const MyPosts = (props) => {

    let postElements = props.posts.map(p => <Post id={p.id} message={p.message} like={p.like}/>)

    let newPostElement = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    }

    let onPostChange = () => {

    }

    return (
        <div className={s.posts}>
            <div>Ava + description</div>
            <h3>My posts</h3>
            <div>
                <textarea
                    ref={newPostElement}
                    value={props.newPostText}
                    onChange={onPostChange}
                />
                <div className={s.button}>
                    <button onClick={addPost}>Add Post</button>
                </div>

            </div>
            {postElements}
        </div>
    )
}