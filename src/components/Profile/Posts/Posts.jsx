import React from "react";
import s from "./Posts.module.css"
import Post from "./Post/Post";

function Posts(props) {
    return <div className={s.allPosts}>
        <h2>All Posts</h2>
        <div className={s.textareaBlock}>
            <textarea className={s.textarea}></textarea>
            <button className={s.addPostButton}>add post</button>
        </div>
        {props.postsData.map((item, i) => <Post key={i} name={item.name} like={item.like}></Post>)}
    </div>

}

export default Posts;