import { renderEntireTree } from "../render";

const state = {
    dialogsPage: {
        dialogsData: [
            { id: '1', name: 'Nariman' },
            { id: '2', name: 'Abdullah' },
            { id: '3', name: 'Linkoln' },
            { id: '4', name: 'Ronaldo' },
            { id: '5', name: 'Messi' }
        ],
        messagesData: [
            { id: '1', msg: 'hi!' },
            { id: '2', msg: 'Wassap!!!' },
            { id: '3', msg: 'No! It is my burger, not yours!' },
            { id: '4', msg: 'what the heck!' },
            { id: '5', msg: 'well... I got it...' }
        ]
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
        ]
    },
    friendsPage: {
        friendsData: [
            { id: '1', name: 'Nariman', age: "23" },
            { id: '2', name: 'Abdullah', age: "24" },
            { id: '3', name: 'Linkoln', age: "202" },
            { id: '4', name: 'Ronaldo', age: "33" },
            { id: '5', name: 'Messi', age: "35" },
            { id: '6', name: 'Maximus', age: "122" },
            { id: '7', name: 'Ruslan', age: "50" },
            { id: '8', name: 'Humanoid', age: "000" },
            { id: '9', name: 'Alien', age: "1000" }
        ]
    }
}

export const methods = {
    addPost(postMessage) {
        let newPost = {
            id: 6,
            message: postMessage,
            like: 0
        }
        state.profilePage.postsData.push(newPost);
        renderEntireTree({
            state: state,
            methods: methods
        });
    }
}

export default state;