import React from "react";
import s from "./Post.module.css"

function Post(props) {
    return (
        <div className={s.post}>
            <p>Post {props.name} </p>
        </div>
    )
}

export default Post;