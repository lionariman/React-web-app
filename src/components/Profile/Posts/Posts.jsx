import React from "react";
import s from "./Posts.module.css"
import Post from "./Post/Post";
import {
    addPostActionCreator,
    onPostChangeActionCreator
} from "../../../store/store";

function Posts(props) {
    let postsElem = props.store.getState().profilePage.postsData.map((item, i) =>
        <Post key={i} id={item.id} message={item.message} like={item.like}></Post>);

    let refTextarea = React.createRef();
    let addPost = () => { addPostActionCreator(); }
    let onPostChange = () => { onPostChangeActionCreator(refTextarea.current.value); }

    return <div className={s.allPosts}>
        <h2>All Posts</h2>
        <div className={s.textareaBlock}>
            <textarea
                className={s.textarea}
                ref={refTextarea}
                value={props.store.getState().profilePage.newPostText}
                onChange={onPostChange}
            />
            <button
                className={s.addPostButton}
                onClick={addPost}>add post
            </button>
        </div>
        {postsElem}
    </div>

}

export default Posts;