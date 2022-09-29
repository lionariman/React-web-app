import { ADD_POST, ON_POST_CHANGE } from "./actionConstants";


const addPost = (state) => {
    let newPost = {
        id: 6,
        message: state.newPostText,
        like: 0
    }
    state.postsData.push(newPost);
    state.newPostText = '';
    return state;
}

const onPostChange = (state, newText) => {
    state.newPostText = newText;
    return state;
}

const profilePageReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            return addPost(state);
        case ON_POST_CHANGE:
            return onPostChange(state, action.newText);
        default:
            return state;
    }
}

export default profilePageReducer;