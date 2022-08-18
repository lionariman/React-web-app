import React from "react";
import s from "./Post.module.css"

function Post(props) {
    return (
        <div className={s.post}>
            <p>Post {props.name} </p>
            <div className="text">
                <input type="text"></input>
            </div>
            <div className="like">
                <button>Like</button>
            </div>
        </div>
    )
}

export default Post;