import React from "react";
import Posts from "./Posts";
import {
    addPostActionCreator,
    onPostChangeActionCreator
} from "../../../store/actions";
import { connect } from "react-redux";

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