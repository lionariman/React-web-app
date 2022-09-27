const ADD_POST = 'ADD_POST';
const ADD_MESSAGE = 'ADD_MESSAGE';
const ON_POST_CHANGE = 'ON_POST_CHANGE';
const ON_MESSAGE_CHANGE = 'ON_MESSAGE_CHANGE';

let store = {
    _state: {
        dialogsPage: {
            dialogsData: [
                { id: '1', name: 'Lion' },
                { id: '2', name: 'Eagle' },
                { id: '3', name: 'Parrot' },
                { id: '4', name: 'Ronaldo' },
                { id: '5', name: 'Messi' }
            ],
            messagesData: [
                { id: '1', msg: 'hi!' },
                { id: '2', msg: 'Wassap!!!' },
                { id: '3', msg: 'No! It is my burger, not yours!' },
                { id: '4', msg: 'what the heck!' },
                { id: '5', msg: 'well... I got it...' }
            ],
            newMessageText: ''
        },
        profilePage: {
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
        },
        friendsPage: {
            friendsData: [
                { id: '1', name: 'Pele', age: "23" },
                { id: '2', name: 'Neuer', age: "24" },
                { id: '3', name: 'Linkoln', age: "202" },
                { id: '4', name: 'Ronaldo', age: "33" },
                { id: '5', name: 'Spider-man', age: "35" },
                { id: '6', name: 'Maximus', age: "122" },
                { id: '7', name: 'Thanos', age: "50" },
                { id: '8', name: 'Humanoid', age: "000" },
                { id: '9', name: 'Alien', age: "1000" }
            ]
        }
    },

    getState() {
        return this._state;
    },

    _renderEntireTree() {
        console.log('renderEntireTree is empty');
    },

    subscribe(observer) {
        this._renderEntireTree = observer;
    },

    _addPost() {
        let newPost = {
            id: 6,
            message: this._state.profilePage.newPostText,
            like: 0
        }
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._renderEntireTree(store);
    },

    _onPostChange(newText) {
        this._state.profilePage.newPostText = newText;
        this._renderEntireTree(store);
    },

    _addMessage() {
        let newMessage = {
            id: '6',
            msg: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messagesData.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._renderEntireTree(store);
    },

    _onMessageChange(newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._renderEntireTree(store);
    },

    dispatch(action) {
        switch (action.type) {
            case ADD_POST:
                this._addPost();
                break;
            case ADD_MESSAGE:
                this._addMessage();
                break;
            case ON_POST_CHANGE:
                this._onPostChange(action.newText);
                break;
            case ON_MESSAGE_CHANGE:
                this._onMessageChange(action.newText);
                break;
            default:
                console.log('< DISPATCH can\'t recognise which method you wanted to call >');
        }
    }
}

export const addPostActionCreator = () => {
    store.dispatch({ type: ADD_POST} );
}

export const addMessageActionCreator = () => {
    store.dispatch({ type: ADD_MESSAGE });
}

export const onPostChangeActionCreator = (text) => {
    store.dispatch({
        type: ON_POST_CHANGE,
        newText: text
    });
}

export const onMessageChangeActionCreator = (text) => {
    store.dispatch({
        type: ON_MESSAGE_CHANGE,
        newText: text
    });
}

export default store;