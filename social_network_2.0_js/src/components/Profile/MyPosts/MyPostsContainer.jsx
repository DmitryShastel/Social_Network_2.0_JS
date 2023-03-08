import React from "react";
import {Post} from "./MyPost/Post";
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
        <MyPosts/>
    )
}