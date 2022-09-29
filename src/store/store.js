import dialogsPageReducer from "./dialogsPageReduser";
import profilePageReducer from "./profilePageReducer";

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

    getState() { return this._state; },
    _callSubscriber() { console.log('renderEntireTree is empty'); },
    subscribe(observer) { this._callSubscriber = observer; },

    dispatch(action) {
        this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action);
        this._state.profilePage = profilePageReducer(this._state.profilePage, action);
        this._callSubscriber(store);
    }
}

export default store;
