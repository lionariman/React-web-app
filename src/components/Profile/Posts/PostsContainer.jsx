import React from "react";
import Posts from "./Posts";
import {
    addPostActionCreator,
    onPostChangeActionCreator
} from "../../../store/actions";
import { connect } from "react-redux";

// function PostsContainer(props) {
//     let addPost = () => { props.dispatch(addPostActionCreator()); } // callback
//     let onPostChange = (e) => { props.dispatch(onPostChangeActionCreator(e.target.value)); } // callback
//     return <Posts
//         postsData={props.profilePage.postsData}
//         newPostText={props.profilePage.newPostText}
//         addPost={addPost}
//         onPostChange={onPostChange}>
//     </Posts>
// }

let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        onPostChange: (e) => {
            dispatch(onPostChangeActionCreator(e.target.value));
        }
    };
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;