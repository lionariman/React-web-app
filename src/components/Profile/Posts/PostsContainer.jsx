import React from "react";
import Posts from "./Posts";
import {
    addPostActionCreator,
    onPostChangeActionCreator
} from "../../../store/actions";

import MyContext from "../../../context";

function PostsContainer(props) {
    return (
        <MyContext.Consumer>
            {value => {
                let addPost = () => { addPostActionCreator(); }
                let onPostChange = (e) => { onPostChangeActionCreator(e.target.value); }
                return <Posts
                    postsData={value.profilePage.postsData}
                    newPostText={value.profilePage.newPostText}
                    addPost={addPost}
                    onPostChange={onPostChange}>
                </Posts>
            }
            }
        </MyContext.Consumer>
    );

}

export default PostsContainer;