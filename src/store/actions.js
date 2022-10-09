import {
    ADD_MESSAGE,
    ADD_POST,
    ON_MESSAGE_CHANGE,
    ON_POST_CHANGE,
    ON_FOLLOW_CLICK
} from "./actionConstants";

export const addPostActionCreator = () => {
    return { type: ADD_POST };
}

export const onPostChangeActionCreator = (text) => {
    return {
        type: ON_POST_CHANGE,
        newText: text
    };
}

export const addMessageActionCreator = () => {
    return { type: ADD_MESSAGE };
}

export const onMessageChangeActionCreator = (text) => {
    return {
        type: ON_MESSAGE_CHANGE,
        newText: text
    };
}

export const onFollowClickActionCreator = (id) => {
    return {
        type: ON_FOLLOW_CLICK,
        userId: id
    };
}