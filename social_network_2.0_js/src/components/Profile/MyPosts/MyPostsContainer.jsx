import React from "react";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";

// export const MyPostsContainer = (props) => {
//
//     return (
//         <StoreContext.Consumer>{
//             (store) => {
//                 let state = store.getState()
//
//                 let addPost = () => {
//                     store.dispatch(addPostActionCreator())
//                 }
//
//                 let onPostChange = (text) => {
//                     let action = updateNewPostActionCreator(text)
//                     store.dispatch(action)
//                 }
//                 return <MyPosts
//                     updateNewPostText={onPostChange}
//                     addPost={addPost}
//                     posts={state.profilePage.posts}
//                     newPostText={state.profilePage.newPostText}
//                 />
//             }}
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: () => {
            dispatch(addPostActionCreator())
        },
        onPostChange: (text) => {
            let action = updateNewPostActionCreator(text)
            dispatch(action)
        }
    }
}

export let MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);