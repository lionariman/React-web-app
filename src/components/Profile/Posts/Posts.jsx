import React from "react";
import s from "./Posts.module.css"
import Post from "./Post/Post";

function Posts(props) {
    // debugger;
    let postsElem = props.profilePage.postsData.map((item, i) =>
        <Post key={i} id={item.id} message={item.message} like={item.like}></Post>);

    let refTextarea = React.createRef();

    let onPostChange = () => {
        let val = refTextarea.current.value;
        props.methods.onPostChange(val);
    }

    return <div className={s.allPosts}>
        <h2>All Posts</h2>
        <div className={s.textareaBlock}>
            <textarea
                className={s.textarea}
                ref={refTextarea}
                value={props.profilePage.newPostText}
                onChange={onPostChange} />
            <button
                className={s.addPostButton}
                onClick={props.methods.addPost}>add post
            </button>
        </div>
        {postsElem}
    </div>

}

export default Posts;