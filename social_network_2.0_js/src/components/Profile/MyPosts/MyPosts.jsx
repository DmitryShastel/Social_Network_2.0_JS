import React from "react";
import {Post} from "./MyPost/Post";
import s from './MyPosts.module.css'
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";

export const MyPosts = (props) => {

    let postElements = props.posts.map(p => <Post id={p.id} message={p.message} like={p.like}/>)

    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch(addPostActionCreator())

    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.dispatch(updateNewPostActionCreator(text))
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