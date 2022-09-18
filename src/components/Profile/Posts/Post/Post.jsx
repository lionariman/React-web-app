import React from "react";
import s from "./Post.module.css"

function Post(props) {
    return (
        <div className={s.post}>
            <p>{props.message} </p>
        </div>
    )
}

export default Post;