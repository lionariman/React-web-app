import React from "react";
import s from "./Posts.module.css"
import Post from "./Post/Post";
import {
    addPostActionCreator,
    onPostChangeActionCreator
} from "../../../store/actions";

function Posts(props) {
    let postsElem = props.profilePage.postsData.map((item, i) =>
        <Post key={i} id={item.id} message={item.message} like={item.like}></Post>);

    let addPost = () => { addPostActionCreator(); }
    let onPostChange = (e) => { onPostChangeActionCreator(e.target.value); }

    return <div className={s.allPosts}>
        <h2>All Posts</h2>
        <div className={s.textareaBlock}>
            <textarea
                className={s.textarea}
                value={props.profilePage.newPostText}
                onChange={onPostChange} />
            <button
                className={s.addPostButton}
                onClick={addPost}>add post
            </button>
        </div>
        {postsElem}
    </div>

}

export default Posts;