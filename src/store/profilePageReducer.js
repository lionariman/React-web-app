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

let initialState = {
    postsData: [
        { id: '1', message: 'mars is the fourth planet in front of the sun', like: "19" },
        { id: '2', message: 'milky way is a galaxy', like: "74" },
        { id: '3', message: 'what\'s more useless than you?', like: "2" },
        { id: '4', message: 'I don\'t like such innocent people...', like: "44" },
        {
            id: 5,
            message: 'Are you listening to me, Neo, or were you looking at the woman in the red dress?',
            like: "32"
        }
    ],
    newPostText: ''
}

const profilePageReducer = (defstate = initialState, action) => {
    let state = { ...defstate };
    state.postsData = [...defstate.postsData];
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