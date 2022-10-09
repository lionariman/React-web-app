import { ADD_MESSAGE, ON_MESSAGE_CHANGE } from "./actionConstants";

const addMessage = (state) => {
    let newMessage = {
        id: state.messagesData.at(-1).id + 1,
        msg: state.newMessageText
    };
    return {
        ...state,
        messagesData: [...state.messagesData, newMessage],
        newMessageText: ''
    };
}

const onMessageChange = (state, newText) => {
    return {
        ...state,
        newMessageText: newText
    };
}

let initialState = {
    dialogsData: [
        { id: 1, name: 'Lion' },
        { id: 2, name: 'Eagle' },
        { id: 3, name: 'Parrot' },
        { id: 4, name: 'Ronaldo' },
        { id: 5, name: 'Messi' }
    ],
    messagesData: [
        { id: 1, msg: 'hi!' },
        { id: 2, msg: 'Wassap!!!' },
        { id: 3, msg: 'No! It is my burger, not yours!' },
        { id: 4, msg: 'what the heck!' },
        { id: 5, msg: 'well... I got it...' }
    ],
    newMessageText: ''
}

const dialogsPageReducer = (state = initialState, action) => {
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
