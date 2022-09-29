import { ADD_MESSAGE, ON_MESSAGE_CHANGE } from "./actionConstants";

const addMessage = (state) => {
    let newMessage = {
        id: '6',
        msg: state.newMessageText
    }
    state.messagesData.push(newMessage);
    state.newMessageText = '';
    return state;
}

const onMessageChange = (state, newText) => {
    state.newMessageText = newText;
    return state;
}

const dialogsPageReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return addMessage(state);
        case ON_MESSAGE_CHANGE:
            return onMessageChange(state, action.newText);
        default:
            return state;
    }
}

export default dialogsPageReducer;