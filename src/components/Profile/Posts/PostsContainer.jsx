import React from "react";
import Posts from "./Posts";
import {
    addPostActionCreator,
    onPostChangeActionCreator
} from "../../../store/actions";

function PostsContainer(props) {

    let addPost = () => { addPostActionCreator(); }
    let onPostChange = (e) => { onPostChangeActionCreator(e.target.value); }

    return <Posts
        postsData={props.profilePage.postsData}
        newPostText={props.profilePage.newPostText}
        addPost={addPost}
        onPostChange={onPostChange}>
    </Posts>

}

export default PostsContainer;