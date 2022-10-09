import Posts from "./Posts";
import {
    addPostActionCreator,
    onPostChangeActionCreator
} from "../../../store/actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    };
}

const mapDispatchToProps = (dispatch) => {
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