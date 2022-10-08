import { combineReducers, createStore } from "redux";
import dialogsPageReducer from "./dialogsPageReduser";
import friendsPageReducer from "./friendsPageReducer";
import profilePageReducer from "./profilePageReducer";

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    friendsPage: friendsPageReducer
});

let store = createStore(reducers);

window.store = store; // check store in console

export default store;