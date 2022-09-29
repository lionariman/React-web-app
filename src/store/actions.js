import store from "./store";
import {
    ADD_MESSAGE,
    ADD_POST,
    ON_MESSAGE_CHANGE,
    ON_POST_CHANGE
} from "./actionConstants";

export const addPostActionCreator = () => {
    store.dispatch({ type: ADD_POST });
}

export const onPostChangeActionCreator = (text) => {
    store.dispatch({
        type: ON_POST_CHANGE,
        newText: text
    });
}

export const addMessageActionCreator = () => {
    store.dispatch({ type: ADD_MESSAGE });
}

export const onMessageChangeActionCreator = (text) => {
    store.dispatch({
        type: ON_MESSAGE_CHANGE,
        newText: text
    });
}